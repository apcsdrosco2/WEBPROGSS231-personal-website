function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}

function myFunction2() {
    const element = document.getElementsByTagName("h3")[0];
 
    document.getElementById("demo").innerHTML = 'The text in the first h3 (index 0) is: ', element[0].innerHTML;
 
 
}
