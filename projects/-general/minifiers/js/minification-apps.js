var myApp=angular.module('myApp',['ngRoute']);

	myApp.filter('minifySQL',function( ){
		return function(str){
			// output = "";
			// array = ['select','update','insert','delete','from','where','as','GROUP BY','ORDER BY','on','in','join','having','like','BEGIN','end','do','DISTINCT','FOREIGN','if','MODIFY'];
			// if(str){
			// 	output = Strip(str,"#comments");
			// 	output = Strip(output,"--comments");
			// 	output = Strip(output,"multipleLineComments");
			// 	output = Strip(output,"newlines"); 
			// 	output = Strip(output,"spaces");
			// 	output = Strip(output,"semicolonSpace");
			// } 
			// return output;

            
		}
	});

    myApp.filter('minifyCSS',function( ){
        return function(str){
            if(str) return vkbeautify.cssmin(str);
        }
    });
    myApp.filter('minifyJSON',function( ){
        return function(str){
            if(str) return vkbeautify.jsonmin(str);
        }
    });
    myApp.filter('minifyXML',function( ){
        return function(str){
            if(str) return vkbeautify.xmlmin(str);
        }
    });
    myApp.filter('minifySQL',function( ){
        return function(str){
            if(str) return vkbeautify.sqlmin(str);
        }
    });
    


    myApp.filter('minifyJS',function( ){
        return function(str,prams){
            output = "";
            if(str){
                output = str;
                if(prams.comments) output = Strip(str,"//comments");
                if(prams.comments) output = Strip(output,"multipleLineComments");
                if(prams.newline) output = Strip(output,"newlines"); 
                if(prams.dnewline) output = Strip(output,"newdoublelines"); 
                if(prams.spaces) output = Strip(output,"spaces");
                if(prams.bracketspace) output = Strip(output,"bracketSpace");
                if(prams.semicolonspace) output = Strip(output,"semicolonSpace");
                if(prams.equalspaces) output = Strip(output,"equalSpaces");
                if(prams.commaspaces) output = Strip(output,"commaSpaces");
            } 
            return output;
        }
    });





function replace_mysql_reserved_words(str){
	array = ['select','update','insert','delete','from','where','as','GROUP BY','ORDER BY','on','in','join','having','like','BEGIN','end','do','DISTINCT','FOREIGN','if','MODIFY'];
	for(word in array){
		new_txt = str.replace(/word/gim," ");
	}
}
function Strip(str,type){
	if(type=="htmlcomments")  				new_txt = str.replace(/<!--.*-->/gm," ");
    // else if(type=="//comments")             new_txt = str.replace(/\/\/.*/gm," "); //the dot wouldn't match the new line
	else if(type=="//comments")  			new_txt = str.replace(/\/\/(?=(?:[^"\\]*(?:\\.|"(?:[^"\\]*\\.)*[^"\\]*"))*[^"]*$)(?=(?:[^'\\]*(?:\\.|'(?:[^'\\]*\\.)*[^'\\]*'))*[^']*$).*$/gm," "); //means match all // to the end of the line. but don't match the ones inside a ""
	else if(type=="#comments")  			new_txt = str.replace(/\#(?=(?:[^"\\]*(?:\\.|"(?:[^"\\]*\\.)*[^"\\]*"))*[^"]*$)(?=(?:[^'\\]*(?:\\.|'(?:[^'\\]*\\.)*[^'\\]*'))*[^']*$).*$/gm," ");
	else if(type=="--comments")  			new_txt = str.replace(/\-\-(?=(?:[^"\\]*(?:\\.|"(?:[^"\\]*\\.)*[^"\\]*"))*[^"]*$)(?=(?:[^'\\]*(?:\\.|'(?:[^'\\]*\\.)*[^'\\]*'))*[^']*$).*$/gm," ");
	else if(type=="multipleLineComments")  	new_txt = str.replace(/\/\*([\s\S]*?)\*\//gm," ");
    // else if(type=="spaces")                 new_txt = str.replace(/[\s]+/gm," ");
	else if(type=="spaces")  				new_txt = str.replace(/[\t ]+(?=(?:[^"\\]*(?:\\.|"(?:[^"\\]*\\.)*[^"\\]*"))*[^"]*$)(?=(?:[^'\\]*(?:\\.|'(?:[^'\\]*\\.)*[^'\\]*'))*[^']*$)/gm," ");
    else if(type=="newlines")               new_txt = str.replace(/[\n\r]/gm," ");
	else if(type=="newdoublelines")  		new_txt = str.replace(/[\n\r]{2,}/gm,"\n");
    // else if(type=="semicolonSpace")         new_txt = str.replace(/[\s]*;[\s]*/gm,";"); //remove space after semicolom
    else if(type=="semicolonSpace")         new_txt = str.replace(/[\s]*;(?=(?:[^"\\]*(?:\\.|"(?:[^"\\]*\\.)*[^"\\]*"))*[^"]*$)(?=(?:[^'\\]*(?:\\.|'(?:[^'\\]*\\.)*[^'\\]*'))*[^']*$)[\s]*$/gm,";"); //remove space before & after ; but not inside a "" or a ''
    else if(type=="equalSpaces")         new_txt = str.replace(/[\s]*=(?=(?:[^"\\]*(?:\\.|"(?:[^"\\]*\\.)*[^"\\]*"))*[^"]*$)(?=(?:[^'\\]*(?:\\.|'(?:[^'\\]*\\.)*[^'\\]*'))*[^']*$)[\s]*/gm,"="); //remove space before & after = but not inside a ""  or a ''
    else if(type=="commaSpaces")         new_txt = str.replace(/[ ]*,(?=(?:[^"\\]*(?:\\.|"(?:[^"\\]*\\.)*[^"\\]*"))*[^"]*$)(?=(?:[^'\\]*(?:\\.|'(?:[^'\\]*\\.)*[^'\\]*'))*[^']*$)[\s]*/gm,","); //remove space before & after , but not inside a "" or a ''
    // else if(type=="bracketSpace") { new_txt = str.replace(/[\s]*\{[\s]*/gm,"{"); new_txt = new_txt.replace(/[\s]*\}[\s]*/gm,"}"); console.log(new_txt);}
    else if(type=="bracketSpace") { new_txt = str.replace(/[\s]*\{[ ]*/gm,"{"); new_txt = new_txt.replace(/[\s]*\}[ ]*/gm,"}"); }
    // else if(type=="colSpace")               new_txt = str.replace(/[\s]*\:[\s]*/gm,":");
	else if(type=="colSpace")               new_txt = str.replace(/[\s]*\:(?=(?:[^"\\]*(?:\\.|"(?:[^"\\]*\\.)*[^"\\]*"))*[^"]*$)(?=(?:[^'\\]*(?:\\.|'(?:[^'\\]*\\.)*[^'\\]*'))*[^']*$)[\s]*/gm,":");
	return new_txt;
}






window.onload = function(){
    apply_text_area('textarea1','text/javascript');
    apply_text_area('textarea2','text/javascript');
};


