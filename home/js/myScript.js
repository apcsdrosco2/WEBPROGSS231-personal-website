function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}

function myFunction2() {
    const element = document.getElementsByTagName("h1")[0];
 
    document.getElementById("demo").innerHTML = 'The text in the first <h1> (index 0) is: ', element[0].innerHTML;
 
 
}
