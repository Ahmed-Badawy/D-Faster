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

toastr.warning('<a target="_blank" href="http://cv.ahmed-badawy.com"><span class="fa fa-2x fa-briefcase"></span> Help Me nail A Job</a>');
// toastr.warning('<a target="_blank" href="https://github.com/Ahmed-Badawy/Develop-Faster"><span class="fa fa-2x fa-github"></span> Star Us on Github</a>');
// toastr.warning('<a target="_blank" href=""><span class="fa fa-2x fa-google"></span> Star Us on Google Play</a>');








    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });



  setTimeout(function(){

    $(".side_nav_filter_button").click(function(){
      $(".side_nav_filter_button").removeClass("btn-primary");
      $(this).addClass("btn-primary");
    });

  },500)

});



  // function get_id(id_name){ return document.getElementById(id_name); }
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }


  // var server_link = 'http://ahmed-badawy.com/';
  var server_link = 'http://localhost/_websites/ahmed-badawy.com/';
  var base_url = server_link+'projects/D-Faster/';

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














