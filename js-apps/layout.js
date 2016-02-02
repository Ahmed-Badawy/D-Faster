$( document ).ready(function() {

//toaster options
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "2000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}


    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });



	// function get_id(id_name){ return document.getElementById(id_name); }
	function getParameterByName(name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	    results = regex.exec(location.search);
	    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

  setTimeout(function(){
  	var h = getParameterByName('h');
  	// var sh = getParameterByName('sh');
  	if(h) $("#"+h).addClass('highlight') 
  	// if(sh) $("#"+sh).addClass('subhighlight');
    console.log(h);
  },1000)


});


  // var base_url = "http://ahmed-badawy.com/projects/dev-tools/";
  var base_url = "http://localhost/_websites/ahmed-badawy.com/projects/dev-tools/";
  function goProject(project,h){
    console.log(project);
    window.location = base_url+"projects/"+project+".html?h="+h;
  }













