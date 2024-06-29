function insertValue(content){
    var orginalContent=document.getElementById('displayResult').value;
    var lastCharacter=orginalContent.slice(orginalContent.length-1,orginalContent.length);
    if(orginalContent=='Error'){
        document.getElementById('displayResult').value='0';
    }
    /* Test Case 1: If the value is Zero, then  0 will be replaced by New Content*/
    if(document.getElementById('displayResult').value=='0' && content=='.'){
        document.getElementById('displayResult').value += content;
    }
    else if(document.getElementById('displayResult').value=='0'){
        document.getElementById('displayResult').value = content;
    }
/* Test Case 2: If We add same operator multiple times then it will not be updated*/
    else if(lastCharacter=='+' && content=='+'){
        document.getElementById('displayResult').value +='';
    }
    else if(lastCharacter=='-' && content=='-'){
        document.getElementById('displayResult').value +='';
    }
    else if(lastCharacter=='*' && content=='*'){
        document.getElementById('displayResult').value +='';
    }
    else if(lastCharacter=='/' && content=='/'){
        document.getElementById('displayResult').value +='';
    }
    else if(lastCharacter=='%' && content=='%'){
        document.getElementById('displayResult').value +='';
    }
    else if(lastCharacter=='.' && content=='.'){
        document.getElementById('displayResult').value +='';
    }
      /*
             Example: 
             748+- => 748-
             1. Remove Last Character       (+)
             2. Add New Character (Content) (-)
        */
    else if(lastCharacter=='+' && (content=='-'||content=='*'||content=='/'||content=='%')){
        /* Replace LastCharacter by Content */
        orginalContent=orginalContent.slice(0,orginalContent.length-1)+content;
        document.getElementById('displayResult').value=orginalContent;
    }
    else if(lastCharacter=='-' && (content=='+'||content=='*'||content=='/'||content=='%')){
        /* Replace LastCharacter by Content */
        orginalContent=orginalContent.slice(0,orginalContent.length-1)+content;
        document.getElementById('displayResult').value=orginalContent;
    }
    else if(lastCharacter=='*' && (content=='-'||content=='+'||content=='/'||content=='%')){
        /* Replace LastCharacter by Content */
        orginalContent=orginalContent.slice(0,orginalContent.length-1)+content;
        document.getElementById('displayResult').value=orginalContent;
    }
    else if(lastCharacter=='/' && (content=='-'||content=='*'||content=='+'||content=='%')){
        /* Replace LastCharacter by Content */
        orginalContent=orginalContent.slice(0,orginalContent.length-1)+content;
        document.getElementById('displayResult').value=orginalContent;
    }
    else if(lastCharacter=='%' && (content=='-'||content=='*'||content=='/'||content=='+')){
        /* Replace LastCharacter by Content */
        orginalContent=orginalContent.slice(0,orginalContent.length-1)+content;
        document.getElementById('displayResult').value=orginalContent;
    }
    else{
        document.getElementById('displayResult').value += content;
    }
}
function backspace(){
    /*
    pick the original content
    */
    var orginalContent=document.getElementById('displayResult').value;
    // remove last character
    orginalContent=orginalContent.slice(0,orginalContent.length-1);
    // place at original position
    document.getElementById('displayResult').value=orginalContent;
    if(document.getElementById('displayResult').value.length==0){
        document.getElementById('displayResult').value=0;
    }
}

function allClear(){
    document.getElementById('displayResult').value='0';

}
function calculate(){
    /*
    pick the original content
    */
    var orginalContent=document.getElementById('displayResult').value;
    try {
        document.getElementById('displayResult').value=eval(orginalContent);
    } catch (error) {
        document.getElementById('displayResult').value='Error';
    }
}