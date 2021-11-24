function calculate(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);
    let d = parseInt(document.getElementById("d").value);


    let total = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d);
    document.getElementById("final").innerHTML = "Your total number is: " +total;

    const per = (total/400)*100;
    document.getElementById("percentage").innerHTML = "Your percentage number is: " +per+"%";

    if(per>=80 && per<=100){
        document.getElementById("grade").innerHTML = "Your grade is A";
    }
    else if(per>=70 && per<=80){
        document.getElementById("grade").innerHTML = "Your grade is B+";
    }
    else if(per>=60 && per<=70){
        document.getElementById("grade").innerHTML = "Your grade is B";
    }
    else if(per>=50 && per<=60){
        document.getElementById("grade").innerHTML = "Your grade is C";
    }
    else if(per>=40 && per<=50){
        document.getElementById("grade").innerHTML = "Your grade is D";
    }
    else{
        document.getElementById("grade").innerHTML="Your grade is F";
    }

}
