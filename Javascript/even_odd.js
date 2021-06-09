function check(){
    var num=document.querySelector("input").value;
    if(num%2===0){
        // alert("the" +num+ "is even");
        document.querySelector("h1").innerHTML=" It is even";
    }
    else {
        // alert("the" +num+ "is odd");
        document.querySelector("h1").innerHTML="It is odd";

    }

}