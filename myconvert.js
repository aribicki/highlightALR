<script type="text/javascript" src="myconvert.js"></script>
<script type="text/javascript" src="js/highlightCode.js"></script>  
/

<script type="text/javascript"> // sets script type
var languages = { // creates var languages
  javascript: /\b(function|return|var|new|public)\b/g /* ... etc */ //looking for the following
};

function highlightAllCode() { // creates function highlightAllCode()
  var pres = document.body.getElementsByTagName("pre"); //sets var pres = document.body etc
  for (var i = 0; i < pres.length; i++) { // keeps track of lenth of pres
    var pre = pres[i]; // sets index
    var lang = pre.getAttribute("data-language"); // gets the language that is set with 
    if (languages.hasOwnProperty(lang)) // if language is set to other use that 
      highlightCode(pre, languages[lang]); 
  }
}
</script> // ends script
</head> // ends header
<body> // creates body 
<p>Here it is, the identity function:</p> // word text
<pre data-language="javascript"> // word text
function id(x) { return x; } // returns the function id
</pre> // end

<script>highlightAllCode();</script> // ends highlighall script