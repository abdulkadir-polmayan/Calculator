

// *all variable
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var nums = document.querySelectorAll(".num");
var operator = document.querySelectorAll(".operator");
var eq = document.querySelector(".eq")
var clean = document.querySelector(".clean")
var dlt = document.querySelector(".delete")




//here for dark mode 
document.querySelector("#chk").addEventListener("change",()=>{
    document.body.classList.toggle('dark');
    clean.classList.toggle('dark')

    h2.classList.toggle('darkText')
    h1.classList.toggle('darkText')
    

})


// here for number displaying and live calculating
for(var i=0;i<nums.length;i++){
    nums[i].addEventListener("click",function(){

        this.classList

        h2.innerHTML += this.value;
        
        h1.innerHTML = eval(h2.innerHTML.toString())
    })
};



//here for operator , but ı have some issue
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(){
        
        // here ı can2t solve this problem that double operator issue .
        //this just solve for same operator 

        if(h2.innerHTML.slice(h2.innerHTML.length-1,h2.innerHTML.length)== this.innerHTML){
            
        }else {
            
            h2.innerHTML += this.innerHTML;
        }
        
    })
}


//here for eq , 
eq.addEventListener("click", function(){
    
    //this solved undefined issue just some part
    if (h1.innerText == '') {
       
    } else {
        
        var result = eval(h2.innerHTML.toString())
        h2.innerHTML += this.value;
        h1.innerHTML = result;
    }

})



clean.addEventListener("click",function(){
    h1.innerHTML = '';
    h2.innerHTML = '';
    
    
})

//contact me area and after 4 - 5 hour ı couldnt make working this 

// document.querySelector("#schk").addEventListener("change",function(){
//     document.querySelector(".socialMain").classList.toggle('openScMenu');
//     document.querySelector(".socialBg").classList.toggle('opa');


// })
