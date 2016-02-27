var myApp = angular.module('myApp',["angularUtils.directives.dirPagination","ngStorage"]);   //this is how we define the project name

	myApp.factory('ngStorageControlService',function($http,$log,$q,$localStorage){ //$log is a service used to logout things.
		return obj = {
			save: function(db_content){
				var deferred = $q.defer();
				$log.warn(db_content); 
				$localStorage.websites_saver_app = db_content;
				deferred.resolve();
				return deferred.promise;	
			},
			load: function(){
				var deferred = $q.defer(); 
				data = $localStorage.websites_saver_app;
				return_data = (data) ? data : null;
				deferred.resolve(return_data);
				return deferred.promise;
			},
		}
	});

myApp.filter('equality_filter',function(){ 
	return function(array,eq_field_name,eq_value){
		// console.log(eq_field_name);
		// console.log("the eq_value is: "+eq_value);
		// return array;
		if(eq_value==undefined || eq_value=="" || eq_value==false) return array;

		var new_array = [];
		angular.forEach(array, function(value, key) {
		  if(value[eq_field_name]==eq_value) this.push(value);
		}, new_array);
		// console.log(new_array);
		return new_array;
	}
});

myApp.filter('array_unique',function(){ 
	return function(array){ 
		var nuique = array.filter(function(value,index,self){
			return self.indexOf(value) == index;
		});
		return nuique;
	}
});



myApp.filter('multible_links',function( ){
	return function(text,ng_id){
		// console.log(text,ng_id);
		if(text){
			var final_output = "";
			text.replace(/.*,.*/g,function (match){
		        // console.log(match);
		        var line_array = match.split(",");
		        inline_array = "";
		        line_array.forEach(function(value,key){
		        	// value = value.replace(/http.*$/g,function(match){
		        	// 	return "<a href='"+match+"'>"+match+"</a><br>";
		        	// });
		        	if(inline_array!="") inline_array += " : "+value; 
		        	else inline_array += value; 
		        });
		        final_output += inline_array+"\n";
		        return match;
		    });
		    console.log(final_output);
		    elm = document.getElementById(ng_id);
		    console.log(elm);
		    if(elm) elm.innerHTML = final_output;
		    return final_output;
		}
		return "";
	}
});

window.edit_item = {};
myApp.controller('MainController',function($scope,$localStorage,$timeout,ngStorageControlService){
	// $scope.students = service1.table;
	// console.log(service1.table[0]);

	$scope.currentPage = 1;
  	$scope.pageSize = 30;
  	$scope.edit_item = {};
  	$scope.toastr = toastr;

	$scope.allTables = {};
	$scope.new_item = {};
	$scope.show_item = {};
    $scope.show_what = "all";
    

	 $scope.pageChangeHandler = function(num){
	    console.log('meals page changed to ' + num);
	};


	$scope.init_db = function(){
		// $scope.allTables.one = {};
		$scope.allTables = {
			table1 : [],
			table2 : [],
			table3 : []
		}
		ngStorageControlService.save($scope.allTables);
		// console.log($scope.allTables);
	}
	// $scope.init_db();


	$scope.Create = function(table_name,new_item){
		$scope.new_item.createdAt = moment().format('YYYY-MM-D H:mm:ss');
		$scope.new_item.ng_id = makeid(6);
		var new_item_obj = {
			createdAt: $scope.new_item.createdAt,
			ng_id: $scope.new_item.ng_id,
			f1: $scope.new_item.f1,
			f2: $scope.new_item.f2,
			f4: $scope.new_item.f4,
			f5: $scope.new_item.f5
		};
		if($scope.new_item.use_backups=="yes"){  
			new_item_obj.f3 = $scope.new_item.f3;
		 	new_item_obj.f6 = $scope.new_item.f6; 
		}
		// console.log(new_item_obj);
		$scope.allTables[table_name].push(new_item_obj);
		$scope.new_item = {};
		toastr.info('we have saved the new website');
		$scope.loadAll();
		// window.location.reload();
	}
	$scope.loadAll = function() {
		ngStorageControlService.load().then(function(data){
			// console.log("----------------");
			// console.log(data);
			if(!data){ 
				toastr.error('Initiating The Database');
				// console.log("initiating the database");
				$scope.init_db();
				window.location.reload();
			}
			$scope.allTables = data;
        	console.log($scope.allTables);
        	toastr.success('Database Has Been Synced');
		},function(){
			console.log("failed");
		});
    }
    $scope.loadAll();

    $scope.Update = function(table_name,edit_item) {
    	toastr.info('تم تعديل البيانات');
		ngStorageControlService.save($scope.allTables);
		$scope.loadAll();
    }

	$scope.Delete = function(table_name,item_id) {
		var new_array = [];
		angular.forEach($scope.allTables[table_name], function(value, key) {
		  if(value.ng_id == item_id){ 
		  	$scope.allTables[table_name].splice(key,1);
		  }
		}, new_array);
		// console.log($scope.allTables.table1);
        // $scope.allTables.splice(index,1);
		ngStorageControlService.save($scope.allTables);
		toastr.error('تم حذف البيانات المحددة');	
		$scope.loadAll();
    }
    $scope.RemoveAll = function(){
        $localStorage.$reset();
        // $scope.allTables = [];
        // ngStorageControlService.save($scope.allTables);
    	toastr.error('Removing All Databases');
    }
    // $scope.RemoveAll();







	$scope.export_db = function(){
		$scope.loadAll();
		var jsonString= JSON.stringify($scope.allTables,null,' ');

		var blob = new Blob([jsonString], {type: "text/plain;charset=utf-8"});
		saveAs(blob, "Extracted-Links.txt");
		toastr.warning('Websites Links Was Downloaded...');
	}



	$scope.students_names_array = [];
	angular.forEach($scope.students, function(value, key) {
	  this.push(value.name);
	}, $scope.students_names_array);

	$scope.bassign = function(item,value){
		$scope[item] = value;
		window[item] = value;
		if(item=='edit_item') toastr.info("<span class='fa fa-edit fa-lg fa-fw'></span> أكتب التعديلات المرادة.");
	}


	$scope.delete_it = function(href){
		console.log(href);
        var r = confirm("هل أنت متأكد من إلغاء العنصر ؟");
        if (r == true) {
            setTimeout(function(){
                window.location.assign(href)
            }, 1000);
        }
    }
	$scope.delete_it_with_alert = function(href,table_name,ng_id){
		swal({
		  title: "هل أنت متأكد ؟",
		  text: "تحذير! إذا تم حذف العنصر لن يمكنك إسترجاعة مرة إخرى",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "أحذفه",
		  cancelButtonText: "تراجع",
		  closeOnConfirm: false,
		  closeOnCancel: false
		},
		function(isConfirm){
		  if (isConfirm) {
		  	toastr.success('لقد تم الحذف');
		    swal("تم الحذف!", "تم حذف العنصر بنجاح! سيتم إعادة تحميل الصفحة لإضافة التعديلات", "success");
		    setTimeout(function(){
		    	// console.log(id);
                // window.location.assign(href);
			  	$scope.Delete(table_name,ng_id);
                // window.location.reload();
            }, 1000);
		  } else {
		  	toastr.success('لقد تراجعت عن عملية الحذف !');
			swal("لم يتم الحذف", "لم يتم حذف العنصر :)", "error");
		  }
		});		
    }    

    $scope.timeAgo = function($date){
        return timeAgo($date)
    }    

	var monthNames = [
	  "January", "February", "March",
	  "April", "May", "June", "July",
	  "August", "September", "October",
	  "November", "December"
	];    
    $scope.sql_time_formed = function($date){
        time = new Date($date);

		var date = new Date($date);
		var day = date.getDate();
		var monthIndex = date.getMonth();
		var year = date.getFullYear();

		output = monthNames[monthIndex]+'-'+day+'-'+year;
		// console.log(output);
		return output;
    }  
    
    $scope.assign_wysiwig = function(){
		console.log('assign_wysiwig');
    }

    $scope.import_file = function(){
    	console.log("hello");
    	console.log($scope.db_import);
    }

	// console.log($scope.students);
	// out = $scope.students.slice(5);
	// console.log(out);


	$scope.show_item = {};
    $scope.open_site = function(site,open_what){
    	$scope.show_item = site;
    	$scope.show_item.links = get_text_elms(site.f4,"links");
    	$scope.show_item.passwords = get_text_elms(site.f5,"passwords");
    	$scope.show_item.databases = get_text_elms(site.f6,"databases");
    	console.log($scope.show_item);
    	$scope.show_what = "website";
    	if(open_what == "backups") $scope.show_what_in = "backups";
    	else $scope.show_what_in = "normal";

    	// console.log($scope.show_item);
    }

    $scope.order_db_backup = {}
    $scope.order_backup = function(type,item,utility_link){
    	if(type=='database'){
    		$scope.order_db_backup.utility_link = $scope.show_item.f3+"?op=backup_db";
    		$scope.order_db_backup.name = item.field0;
    		$scope.order_db_backup.user = item.field1;
    		$scope.order_db_backup.pass = item.field2;
    		$scope.order_db_backup.host = item.field3;
    		$scope.order_db_backup.type = "save_gzip";
    		// console.log($scope.order_db_backup);
    		document.order_db_backup_form.action = $scope.order_db_backup.utility_link;
    		$timeout(function(){
    			submit_button=document.getElementById("order_db_backup_submit");
	    		submit_button.click();
    		},500)
    	}else if(type=="files"){

    	}
    }

});

	function get_text_elms(text,type){
		if(text){
			var final_output = [];
			text.replace(/.*,.*/g,function (match){
		        // console.log(match);
		        var line_array = match.split(",");
		        inline_obj = {};

		        if(line_array[0]) inline_obj.field0 = line_array[0].trim(); 
		        if(line_array[1]) inline_obj.field1 = line_array[1].trim(); 
		        if(line_array[2]) inline_obj.field2 = line_array[2].trim(); 
		        if(line_array[3]) inline_obj.field3 = line_array[3].trim(); 
		        if(line_array[4]) inline_obj.field4 = line_array[4].trim(); 

		        // line_array.forEach(function(value,key){
		        	// value = value.replace(/http.*$/g,function(match){
		        	// 	return "<a href='"+match+"'>"+match+"</a><br>";
		        	// });
		        	// inline_obj.field1 = value; 
		        	// else inline_obj += value; 
		        // });
		        // final_output += inline_obj+"\n";
		        final_output.push(inline_obj);
		        return match;
		    });
		    // console.log(final_output);
		    // elm = document.getElementById(ng_id);
		    // console.log(elm);
		    // if(elm) elm.innerHTML = final_output;
		    return final_output;
		}
		return [];
	}






$(document).ready(function() {
	//this is nessesary for appling the tooltip to all the pagination rows.
	function apply_tooltip() {
		$('[data-toggle="tooltip"]').tooltip();
		setTimeout(function(){ apply_tooltip() },5000);
	}
	apply_tooltip();


	// document.getElementById("import_file_input").addEventListener('change',import_file);
});



	function import_file(evt){
		var file = evt.target.files[0];
		read_text_file(file);
	}	
	function read_text_file(file){
		var file = evt.target.files[0];

		if(file.type != "text/plain"){ //stop if it'sn't a text file
			var res = "this isn't a text import file...";
			alert(res);
			// document.getElementById('textarea').innerHTML = res;
			return;
		}
		var reader = new FileReader(); //call the FileReader class.
		reader.readAsText(file); //then call the readAsText functnion
		reader.onload = function(evt){ //what happens on loading the textfile.
			var json_string = evt.target.result;
			var db_obj = JSON.parse( json_string );
			console.log("-------------------");

			$localStorage.db = db_obj;
			window.location.reload();

			// chrome.storage.sync.get("saved_search_websites",function(data){
			// 	var search_websites = data.saved_search_websites;
			// 	var new_all_websites = search_websites.concat(new_websites_obj);
			// 	console.log(new_all_websites);
			// 	chrome.storage.sync.set({'saved_search_websites': new_all_websites });	
			// 	alert('File Imported');
			// 	window.location.reload();
			// });

			// document.getElementById('textarea').innerHTML = res;	
		}
	}

function makeid(char_num){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < char_num; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}


function timeAgo(time){

    var templates = {
       prefix: "",
       suffix: " ago",
       seconds: "less than a minute",
       minute: "about a minute",
       minutes: "%d minutes",
       hour: "about an hour",
       hours: "about %d hours",
       day: "a day",
       days: "%d days",
       month: "about a month",
       months: "%d months",
       year: "about a year",
       years: "%d years"
    };

    // var templates = {
    //     prefix: " منذ ",
    //     suffix: "",
    //     seconds: "أقل من دقيقة",
    //     minute: "حوالى دقيقة",
    //     minutes: "%d دقائق",
    //     hour: "حوالى ساعة",
    //     hours: "حوالى %d ساعة",
    //     day: "يوم",
    //     days: "%d أيام",
    //     month: "حوالى شهر",
    //     months: "%d شهور",
    //     year: "حوالى سنة",
    //     years: "%d سنوات"
    // };

    var template = function(t, n) {
        return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
    };

    var timer = time;
    if (!time) return;
    time = time.replace(/\.\d+/, ""); // remove milliseconds
    time = time.replace(/-/, "/").replace(/-/, "/");
    time = time.replace(/T/, " ").replace(/Z/, " UTC");
    time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
    time = new Date(time * 1000 || time);

    var now = new Date();
    var seconds = ((now.getTime() - time) * .001) >> 0;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    var years = days / 365;

    return templates.prefix + (
            seconds < 45 && template('seconds', seconds) ||
            seconds < 90 && template('minute', 1) ||
            minutes < 45 && template('minutes', minutes) ||
            minutes < 90 && template('hour', 1) ||
            hours < 24 && template('hours', hours) ||
            hours < 42 && template('day', 1) ||
            days < 30 && template('days', days) ||
            days < 45 && template('month', 1) ||
            days < 365 && template('months', days / 30) ||
            years < 1.5 && template('year', 1) ||
            template('years', years)
        ) + templates.suffix;
}





