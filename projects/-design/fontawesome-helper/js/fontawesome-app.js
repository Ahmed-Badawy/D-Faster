var myApp=angular.module('myApp',['ngRoute']);


function array_unique(array){
    var nuique = array.filter(function(value,index,self){
        return self.indexOf(value) == index;
    });
    return nuique;
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function sanitize(str) {
    return $('<div></div>').text(str).html().replace(/"/gi,'&quot;').replace(/'/gi,'&apos;');   
}

myApp.controller('MainController',function($scope){
    $scope.icons = array_unique(allIcons);
    $scope.copy_format = 1;
    $scope.icon_size = 'fa-2x';
    $scope.icon_range = '3';

    $scope.$watch('icon_range',function(value){
        if(value==1) $scope.icon_size = '';
        if(value==2) $scope.icon_size = 'fa-lg';
        if(value==3) $scope.icon_size = 'fa-2x';
        if(value==4) $scope.icon_size = 'fa-3x';
        if(value==5) $scope.icon_size = 'fa-4x';
        if(value==6) $scope.icon_size = 'fa-5x';
    });
    
    $scope.cdn = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">';

    $scope.format3 = '<span class="fa fa-user"></span>';
    $scope.sanitize = function(str){ return sanitize(str) }
    $scope.check_style = function(num,var_name){ 
        return ($scope[var_name]==num) ? "btn btn-default active" : "btn btn-default" 
    }
    $scope.get_copy_format = function(icon){ 
        if($scope.copy_format==1) ans = 'fa '+$scope.icon_size+' fa-'+icon;
        if($scope.copy_format==2) ans = icon;
        if($scope.copy_format==3) ans = '<span class="fa '+$scope.icon_size+' fa-'+icon+'"></span>';
        // console.log(ans);
        return ans;
    }
});





    var clipboard_copy = new Clipboard('button');
    clipboard_copy.on('success', function(e) { toastr.warning('Icon To Clipboard: '+sanitize(e.text)) });
    clipboard_copy.on('error', function(e) { console.log(e); });

    var copy_cdn = new Clipboard('#copy_cdn');
    copy_cdn.on('success', function(e) { toastr.warning('CDN Link Was Copied') });
    copy_cdn.on('error', function(e) { console.log(e); });


/********************************Notify me**************************************/
    function notifyUser(msgHeader,img,msg){
        if(Notification.permission=='default'){
            alert('please allow notification for our website...')
        }else{
            // alert("hi");
            notify = new Notification(msgHeader,{
                body: msg,
                icon: (img) ? img : "1.jpg",
                tag: Math.floor((Math.random() * 100) + 1)
            });
            notify.onclick = function(){
                // console.log(this);
                window.location = 'http://ahmed-badawy.com';
            }
        }
    }
/**********************************************************************/    

function id(id){ return window.document.getElementById(id); }
function get_id_class(id_name,class_name){ 
    if(window.document.getElementById(id_name)==null) { console.log(id_name); console.log(class_name);}
    return window.document.getElementById(id_name).getElementsByClassName(class_name)[0]; 
}

