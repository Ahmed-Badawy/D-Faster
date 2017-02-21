
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


function apply_text_area(area_name,mime_type){
    var txtarea = get_id_class(area_name,'mytextarea');

/*********************************Read Text File*************************************/  
    function read_text_file(file){
        if(file.type != "text/plain"){ //stop if it'sn't a text file
            alert("No Text File Inputed.");
            // return;
            // console.log(file);
        }
        var reader = new FileReader(); //call the FileReader class.
        reader.readAsText(file); //then call the readAsText functnion
        reader.onload = function(evt){ //what happens on loading the textfile.
            // console.log(evt);
            res = evt.target.result;
            handle_onread(res);
        }
    }
    function read_file_actions(evt){
        evt.stopPropagation();
        evt.preventDefault();

        console.log(evt);

        files = (evt.srcElement) ? evt.srcElement.files : evt.originalTarget.files;
        var total_size= 0;
        for(i=0; i<files.length ;i++){
            total_size += files[i].size;
        }
        console.log("Total Size is: "+total_size+" Bytes...");
        console.log("Files Count is: "+files.length+" Files...");

        read_text_file(files[0]);
    }
    function handle_onread(file_text){
        txtarea.value = file_text;
        count_chars();
        notifyUser('File Imported');
    }
    get_id_class(area_name,"upload_input").addEventListener('change',read_file_actions,false);
    get_id_class(area_name,"file_btn").addEventListener('click',function(){ get_id_class(area_name,"upload_input").click(); },false);

/********************************Copy TextArea Value**************************************/
    var clipboard_copy = new Clipboard('#'+area_name+' .copy_btn', {
        text: function() {
            // notifyUser('Text Was Copied');
            count_chars();
            toastr.info("Data Was Copied...");
            return txtarea.value;
        }
    });
    clipboard_copy.on('success', function(e) { console.log(e); });
    clipboard_copy.on('error', function(e) { console.log(e); });

/********************************Cut TextArea Value**************************************/
    var clipboard_cut = new Clipboard('#'+area_name+' .cut_btn', {
        text: function() {
            // notifyUser('Text Was Cut');
            var return_text = txtarea.value;
            txtarea.value = "";
            count_chars();
            toastr.info("Data Was Cut...");
            return return_text;
        }
    });
    clipboard_cut.on('success', function(e) { console.log(e); });
    clipboard_cut.on('error', function(e) { console.log(e); });
/********************************Select All TextArea Value**************************************/
    get_id_class(area_name,'selectAll').addEventListener('click',(function(){
        toastr.info("Selected All...");
        txtarea.setSelectionRange(0,txtarea.value.length);
    }),false);
/********************************Empty All**************************************/
    get_id_class(area_name,'emptyAll').addEventListener('click',(function(){
        txtarea.value = "";
        count_chars();
        toastr.info("Data Was Copied...");
    }),false);
/********************************Count Number Of Chars**************************************/
    // txtarea.addEventListener('keyup',function(){ count_chars() },false);
    function count_chars(){
        get_id_class(area_name,"txtlength").innerHTML = txtarea.value.length;    
        var Windowstxtsize = ByteSize.format(ByteSize.count(txtarea.value,{lineBreaks:2}));
        get_id_class(area_name,"txtsize").innerHTML = "size: "+Windowstxtsize;
    }
    function timeout() { setTimeout(function(){ count_chars(); timeout(); },5000); }
    timeout(); count_chars();
/********************************Create Textarea Download**************************************/    
    var textFile = false;
    function makeTextFile(text) {
        var data = new Blob([text], {type: mime_type});
// If we are replacing a previously generated file we need to manually revoke the object URL to avoid memory leaks :
        if (textFile) window.URL.revokeObjectURL(textFile);
        textFile = window.URL.createObjectURL(data);
        return textFile;
    };
    get_id_class(area_name,"download_content").addEventListener('click',function(){
        get_id_class(area_name,"download_content_link").href = makeTextFile(txtarea.value);
        get_id_class(area_name,"download_content_link").click();
        toastr.success("Saving...");
    },false);   
/**********************************************************************/
}