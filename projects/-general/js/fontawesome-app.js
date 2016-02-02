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
    
    $scope.cdn = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">';

    $scope.format3 = '<span class="fa fa-user"></span>';
    $scope.sanitize = function(str){ return sanitize(str) }
    $scope.format_class = function(num){ return ($scope.copy_format==num) ? "btn btn-default active" : "btn btn-default" }
    $scope.get_copy_format = function(icon){ 
        if($scope.copy_format==1) ans = "fa fa-"+icon;
        if($scope.copy_format==2) ans = icon;
        if($scope.copy_format==3) ans = '<span class="fa fa-'+icon+'"></span>';
        // console.log(ans);
        return ans;
    }
});





    var clipboard_copy = new Clipboard('button');
    clipboard_copy.on('success', function(e) { toastr.warning('Icon To Clipboard: '+sanitize(e.text)) });
    clipboard_copy.on('error', function(e) { console.log(e); });


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

