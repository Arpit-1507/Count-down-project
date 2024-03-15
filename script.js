const endDate = " 10 February 2024 06:50 PM" ;
document.getElementById("end-Date").innerText = endDate;

const inputs = document.querySelectorAll("input")
function clock()


{
    const end = new Date(endDate)
    const now = new Date();
    console.log(end);
    console.log(now);
    const diff = (end-now);
    console.log(diff);

    if(diff<0) return;
  
    inputs[0].value=Math.floor(diff/1000/3600/24);
    inputs[1].value=Math.floor((diff/1000/3600)%24);
    inputs[2].value=Math.floor((diff/1000/60)%60);
    inputs[3].value=Math.floor((diff/1000)%60)

}

clock();

 setInterval(
    ()=> {
        clock()
    },
    1000
 )


