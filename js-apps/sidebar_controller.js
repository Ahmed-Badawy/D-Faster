//{name:'JavaScript Logger',location:'-general/js-logger/js-logger',icon:'list-ul'}, 
// {name:'B-Link Lists',location:'-general/b-link-lists/b-link-lists',icon:'list-ul'}, 
// {name:'B-Websites Saver',location:'-general/B-website-saver/websites-saver',icon:'save'}, 





myApp.controller('sidebar_controller',function($scope){

  $scope.server_link = server_link;
  $scope.base_url = base_url;
  $scope.cv_link = cv_link;
  $scope.chrome_app_link = chrome_app_link;


developer_links = {
        general: {name:'General Tools' , in_array:[
{name:'SandBox Project',location:'-general/sandbox/sandbox',icon:'clone'}, 
{name:'HTML Requests',location:'-general/html-requests/requests',icon:'external-link-square'}, 
{name:'Markdown Parser',location:'-general/markdown-parser/markdown-parser',icon:'pencil'}, 
{name:'Regex Tester',location:'-general/regex-tester/regex-tester',icon:'newspaper-o'}, 
        ]},
        
        data_conversions: {name:'Data Operations' , in_array:[
{name:'Minifiers',location:'',icon:'compress',type:'minifiers',links_array:[
    {name:'Minify JavaScript',location:'-general/minifiers/minify-js',icon:'compress',show_what:1},
    {name:'Minify HTML',location:'-general/minifiers/minify-html',icon:'compress',show_what:2},
    {name:'Minify CSS',location:'-general/minifiers/minify-css',icon:'compress',show_what:2},
    {name:'Minify XML',location:'-general/minifiers/minify-xml',icon:'compress',show_what:3},
    {name:'Minify JSON',location:'-general/minifiers/minify-json',icon:'compress',show_what:4},
    {name:'Minify SQL',location:'-general/minifiers/minify-sql',icon:'compress',show_what:4},
    {name:'Minify PHP',location:'-general/minifiers/minify-php',icon:'compress',show_what:7},
    {name:'Minify JAVA',location:'-general/minifiers/minify-java',icon:'compress',show_what:8},
]},


{name:'Pretty Print',location:'',icon:'file-text-o',type:'pretty_print',links_array:[
    {name:'Pretty Print JSON',location:'-dataformats/prettify/prettify',icon:'file-text-o',show_what:1},
    {name:'Pretty Print CSS',location:'-dataformats/prettify/prettify',icon:'file-text-o',show_what:2},
    {name:'Pretty Print XML',location:'-dataformats/prettify/prettify',icon:'file-text-o',show_what:3},
    {name:'Pretty Print SQL',location:'-dataformats/prettify/prettify',icon:'file-text-o',show_what:4},
    {name:'Pretty Print HTML',location:'-dataformats/prettify/prettify',icon:'file-text-o',show_what:5},
]},


{name:'CSS Compilers',location:'',icon:'recycle',type:'css-compilers',links_array:[
    {name:'SCSS Compiler',location:'-css/css-compilers/css-compilers',icon:'recycle',show_what:1},
    {name:'Sass Compiler',location:'-css/css-compilers/css-compilers',icon:'recycle',show_what:2},
    {name:'LESS Compiler',location:'-css/css-compilers/css-compilers',icon:'recycle',show_what:3},
    {name:'Stylus Compiler',location:'-css/css-compilers/css-compilers',icon:'recycle',show_what:4},   
]},


{name:'Fake Data Generator',location:'-dataformats/fake-data-generator/fake-data-generator',icon:'cubes'}, 
{name:'Fake Data Iterator',location:'-dataformats/fake-data-generator/fake-data-itirator',icon:'cubes'}, 
{name:'Data Formats Converter',location:'-dataformats/data-formats-converter/data-formats-converter',icon:'exchange'},
{name:'Excel/Table Converter',location:'-dataformats/tables-converter/tables-converter',icon:'spinner'}

        ]},

        img: {name:'Images & Graphics',in_array:[
{name:'Img To Base64',location:'-img/base64-converter/img-base64-converter',icon:'image',show_what:1},
{name:'Base64 To Img',location:'-img/base64-converter/img-base64-converter',icon:'image',show_what:2},
        ]}, 


        encoders: {name:'Encoders',in_array:[
{name:'URI (En/De)coder',location:'',icon:'hashtag',type:'pretty_print',links_array:[
    {name:'URI Encoder',location:'-security/uri-converter/uri',icon:'hashtag',show_what:1},
    {name:'URI Decoder',location:'-security/uri-converter/uri',icon:'hashtag',show_what:2},
]},

{name:'HTML (En/De)coder',location:'',icon:'html5',type:'pretty_print',links_array:[
    {name:'Escape Html',location:'-security/escape-html/escape-html',icon:'html5',show_what:1}, 
    {name:'UnEscape Html',location:'-security/escape-html/escape-html',icon:'html5',show_what:2}, 
]},


        ]},    

};




designer_links = {
        design: {name:'Design Tools',in_array:[

{name:'FontAwesome Faster',location:'-design/fontawesome-helper/fontawesome-helper',icon:'flag'},
{name:'Emoji Helper',location:'-design/emoji/emoji',icon:'smile-o'},
{name:'Bootstrap Faster',location:server_link+'projects/bootstrap-helper/',icon:'twitter-square',redirect:true},
        ]},

        color: {name:'Color Controller',in_array:[
{name:'Color Picker',location:'-design/color-picker/color-picker',icon:'eyedropper'}, 
{name:'Color Picker 2',location:'-design/color-picker-2/color-picker2',icon:'eyedropper'}, 
{name:'Color Palettes',location:'-design/color-palettes/color-palettes',icon:'paint-brush'}, 
{name:'Color Palettes 2',location:'-design/color-palettes/color-palettes2',icon:'paint-brush'}, 
{name:'Color Picker/Converter',location:'-design/color-converter/color-converter',icon:'eyedropper'}, 
        ]},

        design2: {name:'CSS Generators',in_array:[

    {name:'Gradient',location:'-design/css-generators/gradient',icon:'file-picture-o'},
    {name:'SolidColor Chooser',location:'-design/css-generators/page-color',icon:'trello'},
    {name:'Button Generator',location:'-design/css-generators/button-generator',icon:'minus-square'},
    {name:'Box Shadow',location:'-design/css-generators/box-shadow',icon:'stop'},
    {name:'Border Radius',location:'-design/css-generators/border-radius',icon:'square-o'},
    {name:'Text Shadow',location:'-design/css-generators/text-shadow',icon:'text-width'},
    {name:'Text Effects',location:'-design/css-generators/text-effects',icon:'css3'},
    {name:'Multi Column',location:'-design/css-generators/multi-column',icon:'reorder'},
    {name:'Transforms',location:'-design/css-generators/transforms',icon:'toggle-right'},
    {name:'Transitions',location:'-design/css-generators/transitions',icon:'arrows-alt'},
    {name:'Animations',location:'-design/css-generators/animations',icon:'expand'},
    {name:'FlexBox',location:'-design/css-generators/flexbox',icon:'list'},

        ]},

        preprocessors: {name:'CSS Preprocessors',location:'',icon:'recycle',type:'pretty_print',in_array:[

    {name:'SCSS Compiler',location:'-css/css-compilers/css-compilers',icon:'recycle',show_what:1},
    {name:'Sass Compiler',location:'-css/css-compilers/css-compilers',icon:'recycle',show_what:2},
    {name:'LESS Compiler',location:'-css/css-compilers/css-compilers',icon:'recycle',show_what:3},
    {name:'Stylus Compiler',location:'-css/css-compilers/css-compilers',icon:'recycle',show_what:4},

        ]},


};




utils_links = {

        common: {name:'Common Tools',in_array:[
{name:'B-PasswordKeeper',location:'-general/password-keeper/password-keeper',icon:'user-secret fa-lg'}, 
{name:'B-Markup Notes',location:'-general/b-notes/b-notes',icon:'object-group'},

    {name:'GitHub',location:'',icon:'github',type:'github',links_array:[
      {name:'View Github Repo',location:'https://htmlpreview.github.io/',icon:'github',redirect:true}, 
      {name:'Search Repo Code',location:'https://github.com/search',icon:'github',redirect:true}, 
      {name:'Github Pages',location:'https://pages.github.com',icon:'github',redirect:true}, 
      {name:'Github Gists',location:'https://gist.github.com',icon:'github',redirect:true}, 
    ]},

        ]},  

        converters: {name:'Converters',in_array:[
{name:'Units Converter',location:'-general/units-converter/units-converter',icon:'exchange'}, 
{name:'Number Systems',location:'-general/number-system-converter/number-system-converter',icon:'calculator'}, 
        ]}, 


        hashs: {name:'Hashing & Passwords',in_array:[

    {name:'MD5 Hash',location:'-security/hashes/hash',icon:'hashtag',show_what:1}, 
    {name:'HMAC-MD5 Hash',location:'-security/hashes/hash',icon:'hashtag',show_what:2}, 
    {name:'Random Password',location:'-security/hashes/hash',icon:'hashtag',show_what:7},

    {name:'Hashing & Encoding',location:'',icon:'hashtag',type:'pretty_print',links_array:[
      {name:'MD5 Hash',location:'-security/hashes/hash',icon:'hashtag',show_what:1}, 
      {name:'HMAC-MD5 Hash',location:'-security/hashes/hash',icon:'hashtag',show_what:2}, 
      {name:'Random Password',location:'-security/hashes/hash',icon:'hashtag',show_what:7},

      {name:'SHA-512 Hash',location:'-security/hashes/hash',icon:'hashtag',show_what:3}, 
      {name:'SHA-384 Hash',location:'-security/hashes/hash',icon:'hashtag',show_what:4}, 
      {name:'SHA-256 Hash',location:'-security/hashes/hash',icon:'hashtag',show_what:5}, 
      {name:'SHA-224 Hash',location:'-security/hashes/hash',icon:'hashtag',show_what:6}, 
    ]},
        ]},  



        apis: {name:'API Helpers',in_array:[
{name:'QR Generator',location:'-apis/QR-generator/QR-generator',icon:'qrcode'},
{name:'UPC Barcode Generator',location:'-apis/UPC-code-generator/UPC-code-generator',icon:'barcode'},
{name:'Captcha Generator',location:'-apis/captcha-generator/captcha-generator',icon:'image'},
        ]},  




        time: {name:'Timers',in_array:[
{name:'Stop Watch',location:'-general/timers/timers',icon:'clock-o',show_what:1},
{name:'CountDown Timer',location:'-general/timers/timers',icon:'clock-o',show_what:2},
        ]},

};



all_links = {};
Object.assign( all_links, developer_links , designer_links ,utils_links );
$scope.side_links = all_links;


$scope.view_links = function(what){
  if(what=="all_links") $scope.side_links = all_links;
  if(what=="developer_links") $scope.side_links = developer_links;
  if(what=="designer_links") $scope.side_links = designer_links;
  if(what=="utils_links") $scope.side_links = utils_links;
  $scope.cate = what;
}
$scope.view_links("all_links");


$scope.go_to = function(cate,key,link,inside_key){
  // if(link.redirect) return window.open(link.location,'_blank');
  if(link.redirect) return link.location;
  show_what = link.show_what ? `show_what=${link.show_what}&` : '';
  inside_key = inside_key ? `&inside_key=${inside_key}` : '';
  // window.location = `${$scope.base_url}projects/${link.location}.html?${show_what}cate=${cate}&key=${key}${inside_key}`;
  return `${$scope.base_url}projects/${link.location}.html?${show_what}cate=${cate}&key=${key}${inside_key}`;
}
// $scope.get_target = function(link){
//   return (link.redirect) ? "_blank" : "";
// }


$scope.open_page_compilation = function(){
  show_what = getParameterByName("show_what");
  cate = getParameterByName("cate");
  key = getParameterByName("key");
  inside_key = getParameterByName("inside_key");
  $scope.view_links(cate);
  // $scope.side_links[key].item_selected = true;
  // console.log(show_what,"--",cate,"--",key,"--",inside_key);
}
$scope.open_page_compilation();




});
