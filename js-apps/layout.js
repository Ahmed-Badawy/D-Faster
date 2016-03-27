  var server_link = 'http://ahmed-badawy.com/';
  var server_link = 'http://localhost/_websites/ahmed-badawy.com/';
  var base_url = server_link+'projects/D-Faster/';
  
  var cv_link = "http://cv.ahmed-badawy.com";
  var chrome_app_link = "https://chrome.google.com/webstore/detail/d-faster/gpnmdoddfenngflamdbiigbecalmkfdf";



$( document ).ready(function() {

//toaster options
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": false,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "2000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

toastr.warning(`<a target="_blank" href="${cv_link}"><span class="fa fa-2x fa-briefcase"></span> Help Me get my dream job</a>`);
toastr.warning(`<a target="_blank" href="${base_url}"><span class="fa fa-2x fa-github"></span> Star Us on Github</a>`);
toastr.warning(`<a target="_blank" href="${chrome_app_link}"><span class="fa fa-2x fa-google"></span> Rate Us on Chrome Store</a>`);



  setTimeout(function(){

    // $(".side_nav_filter_button").click(function(){
    //   $(".side_nav_filter_button").removeClass("btn-primary");
    //   $(this).addClass("btn-primary");
    // });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

  },1000)

});



  // function get_id(id_name){ return document.getElementById(id_name); }
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }






  // function goProject(project,h,show_what){
  //   show_what = (show_what) ? show_what : 1;
  //   console.log(project);
  //   window.location = base_url+"projects/"+project+".html?h="+h+"&show_what="+show_what;
  // }





function str_parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, function() {
        return args[i++];
    });
}














