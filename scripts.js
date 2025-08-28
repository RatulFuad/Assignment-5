
// love count

//  card 1 love count

document.getElementById("heart-1-btn").addEventListener("click", function(){
   

    const countOn = document.getElementById("love-count");
    let count = parseInt(countOn.innerText) || 0;
    count++;
    countOn.innerText = count; 

    
    
})

// card 2 love count
document.getElementById("heart-2-btn").addEventListener("click", function () {
 
    const countOn = document.getElementById("love-count");
    let count = parseInt(countOn.innerText) || 0;
    count++; 
    countOn.innerText = count; 
});


// card 3 love count
document.getElementById("heart-3-btn").addEventListener("click", function () {
 
    const countOn = document.getElementById("love-count");
    let count = parseInt(countOn.innerText) || 0;
    count++; 
    countOn.innerText = count; 
});



// card 4 love count
document.getElementById("heart-4-btn").addEventListener("click", function () {
 
    const countOn = document.getElementById("love-count");
    let count = parseInt(countOn.innerText) || 0;
    count++; 
    countOn.innerText = count; 
});


// card 5 love count
document.getElementById("heart-5-btn").addEventListener("click", function () {
 
    const countOn = document.getElementById("love-count");
    let count = parseInt(countOn.innerText) || 0;
    count++; 
    countOn.innerText = count; 
});



// card 6 love count
document.getElementById("heart-6-btn").addEventListener("click", function () {
 
    const countOn = document.getElementById("love-count");
    let count = parseInt(countOn.innerText) || 0;
    count++; 
    countOn.innerText = count; 
});



// card 7 love count
document.getElementById("heart-7-btn").addEventListener("click", function () {
 
    const countOn = document.getElementById("love-count");
    let count = parseInt(countOn.innerText) || 0;
    count++; 
    countOn.innerText = count; 
});



// card 8 love count
document.getElementById("heart-8-btn").addEventListener("click", function () {
 
    const countOn = document.getElementById("love-count");
    let count = parseInt(countOn.innerText) || 0;
    count++; 
    countOn.innerText = count; 
});


// card 9 love count
document.getElementById("heart-9-btn").addEventListener("click", function () {
 
    const countOn = document.getElementById("love-count");
    let count = parseInt(countOn.innerText) || 0;
    count++; 
    countOn.innerText = count; 
});


// call item


// card 1 call
document.getElementById("call-btn-1").addEventListener("click", function(){


let coinKoma = parseInt(document.getElementById("coin-kombe").innerText)


console.log(coinKoma)

    let newBalance = coinKoma - 20
    
    if(newBalance < 0){
         newBalance =0;
         alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ টি কয়েন লাগবে")
    
    }
    else{
                    alert("National Emergency Number 999");

    }
    console.log(newBalance)
    document.getElementById("coin-kombe").innerText = newBalance

     if (coinKoma > 0){
        let history1 = document.getElementById("call-history-1") 
    
     const div = document.createElement("div");
     div.innerHTML = `

     <div  class="flex justify-between items-center m-4 bg-[#f5fff6] p-2.5 rounded-2xl">

   <div>
          <h1>national emergency Number</h1>
          <h1>999</h1>
          
</div>

          <div>    <h1>${"today " + (new Date().getHours()%12 || 12) + ":" + String(new Date().getMinutes()).padStart(2,"0") + (new Date().getHours()>=12?" pm":" am")}</h1>
</div>
    </div>
     

     
     `;
     history1.appendChild(div);
     }

    

})


// card 2 call
document.getElementById("call-btn-2").addEventListener("click", function(){


let coinKoma = parseInt(document.getElementById("coin-kombe").innerText)


console.log(coinKoma)

    let newBalance = coinKoma - 20
    
    if(newBalance < 0){
         newBalance =0;
         alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ টি কয়েন লাগবে")
    
    }
    else{
                    alert("Police Helpline Number 999");

    }
    console.log(newBalance)
    document.getElementById("coin-kombe").innerText = newBalance

     if (coinKoma > 0){
        let history1 = document.getElementById("call-history-1") 
    
     const div = document.createElement("div");
     div.innerHTML = `

     <div  class="flex justify-between items-center m-4 bg-[#f5fff6] p-2.5 rounded-2xl">

   <div>
          <h1>Police Helpline Number</h1>
          <h1>999</h1>
          
</div>

          <div>    <h1>${"today " + (new Date().getHours()%12 || 12) + ":" + String(new Date().getMinutes()).padStart(2,"0") + (new Date().getHours()>=12?" pm":" am")}</h1>
</div>
    </div>
     

     
     `;
     history1.appendChild(div);
     }

    

})


// card 3 call
document.getElementById("call-btn-3").addEventListener("click", function(){


let coinKoma = parseInt(document.getElementById("coin-kombe").innerText)


console.log(coinKoma)

    let newBalance = coinKoma - 20
    
    if(newBalance < 0){
         newBalance =0;
         alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ টি কয়েন লাগবে")
    
    }
    else{
                    alert("Fire Service Number 999");

    }
    console.log(newBalance)
    document.getElementById("coin-kombe").innerText = newBalance

     if (coinKoma > 0){
        let history1 = document.getElementById("call-history-1") 
    
     const div = document.createElement("div");
     div.innerHTML = `

     <div  class="flex justify-between items-center m-4 bg-[#f5fff6] p-2.5 rounded-2xl">

   <div>
          <h1>Fire Service Number</h1>
          <h1>999</h1>
          
</div>

          <div>    <h1>${"today " + (new Date().getHours()%12 || 12) + ":" + String(new Date().getMinutes()).padStart(2,"0") + (new Date().getHours()>=12?" pm":" am")}</h1>
</div>
    </div>
     

     
     `;
     history1.appendChild(div);
     }

    

})


// card 4 call
document.getElementById("call-btn-4").addEventListener("click", function(){


let coinKoma = parseInt(document.getElementById("coin-kombe").innerText)


console.log(coinKoma)

    let newBalance = coinKoma - 20
    
    if(newBalance < 0){
         newBalance =0;
         alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ টি কয়েন লাগবে")
    
    }
    else{
                    alert("Ambulance Service 1994-999999");

    }
    console.log(newBalance)
    document.getElementById("coin-kombe").innerText = newBalance

     if (coinKoma > 0){
        let history1 = document.getElementById("call-history-1") 
    
     const div = document.createElement("div");
     div.innerHTML = `

     <div  class="flex justify-between items-center m-4 bg-[#f5fff6] p-2.5 rounded-2xl">

   <div>
          <h1>Ambulance Service</h1>
          <h1>1994-999999</h1>
          
</div>

          <div>    <h1>${"today " + (new Date().getHours()%12 || 12) + ":" + String(new Date().getMinutes()).padStart(2,"0") + (new Date().getHours()>=12?" pm":" am")}</h1>
</div>
    </div>
     

     
     `;
     history1.appendChild(div);
     }

    

})


// card 5 call
document.getElementById("call-btn-5").addEventListener("click", function(){


let coinKoma = parseInt(document.getElementById("coin-kombe").innerText)


console.log(coinKoma)

    let newBalance = coinKoma - 20
    
    if(newBalance < 0){
         newBalance =0;
         alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ টি কয়েন লাগবে")
    
    }
    else{
                    alert("Women & Child Helpline 109");

    }
    console.log(newBalance)
    document.getElementById("coin-kombe").innerText = newBalance

     if (coinKoma > 0){
        let history1 = document.getElementById("call-history-1") 
    
     const div = document.createElement("div");
     div.innerHTML = `

     <div  class="flex justify-between items-center m-4 bg-[#f5fff6] p-2.5 rounded-2xl">

   <div>
          <h1>Women & Child Helpline</h1>
          <h1>109</h1>
          
</div>

          <div>    <h1>${"today " + (new Date().getHours()%12 || 12) + ":" + String(new Date().getMinutes()).padStart(2,"0") + (new Date().getHours()>=12?" pm":" am")}</h1>
</div>
    </div>
     

     
     `;
     history1.appendChild(div);
     }

    

})


// card 6 call
document.getElementById("call-btn-6").addEventListener("click", function(){


let coinKoma = parseInt(document.getElementById("coin-kombe").innerText)


console.log(coinKoma)

    let newBalance = coinKoma - 20
    
    if(newBalance < 0){
         newBalance =0;
         alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ টি কয়েন লাগবে")
    
    }
    else{
                    alert("Anti-Corruption Helpline 106");

    }
    console.log(newBalance)
    document.getElementById("coin-kombe").innerText = newBalance

     if (coinKoma > 0){
        let history1 = document.getElementById("call-history-1") 
    
     const div = document.createElement("div");
     div.innerHTML = `

     <div  class="flex justify-between items-center m-4 bg-[#f5fff6] p-2.5 rounded-2xl">

   <div>
          <h1>Anti-Corruption Helpline</h1>
          <h1>106</h1>
          
</div>

          <div>    <h1>${"today " + (new Date().getHours()%12 || 12) + ":" + String(new Date().getMinutes()).padStart(2,"0") + (new Date().getHours()>=12?" pm":" am")}</h1>
</div>
    </div>
     

     
     `;
     history1.appendChild(div);
     }

    

})


// card 7 call
document.getElementById("call-btn-7").addEventListener("click", function(){


let coinKoma = parseInt(document.getElementById("coin-kombe").innerText)


console.log(coinKoma)

    let newBalance = coinKoma - 20
    
    if(newBalance < 0){
         newBalance =0;
         alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ টি কয়েন লাগবে")
    
    }
    else{
                    alert("Electricity Helpline 16216");

    }
    console.log(newBalance)
    document.getElementById("coin-kombe").innerText = newBalance

     if (coinKoma > 0){
        let history1 = document.getElementById("call-history-1") 
    
     const div = document.createElement("div");
     div.innerHTML = `

     <div  class="flex justify-between items-center m-4 bg-[#f5fff6] p-2.5 rounded-2xl">

   <div>
          <h1>Electricity Helpline</h1>
          <h1>16216</h1>
          
</div>

          <div>    <h1>${"today " + (new Date().getHours()%12 || 12) + ":" + String(new Date().getMinutes()).padStart(2,"0") + (new Date().getHours()>=12?" pm":" am")}</h1>
</div>
    </div>
     

     
     `;
     history1.appendChild(div);
     }

    

})


// card 8 call
document.getElementById("call-btn-8").addEventListener("click", function(){


let coinKoma = parseInt(document.getElementById("coin-kombe").innerText)


console.log(coinKoma)

    let newBalance = coinKoma - 20
    
    if(newBalance < 0){
         newBalance =0;
         alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ টি কয়েন লাগবে")
    
    }
    else{
                    alert("Brac Helpline 16445");

    }
    console.log(newBalance)
    document.getElementById("coin-kombe").innerText = newBalance

     if (coinKoma > 0){
        let history1 = document.getElementById("call-history-1") 
    
     const div = document.createElement("div");
     div.innerHTML = `

     <div  class="flex justify-between items-center m-4 bg-[#f5fff6] p-2.5 rounded-2xl">

   <div>
          <h1>Brac Helpline</h1>
          <h1>16445</h1>
          
</div>

          <div>    <h1>${"today " + (new Date().getHours()%12 || 12) + ":" + String(new Date().getMinutes()).padStart(2,"0") + (new Date().getHours()>=12?" pm":" am")}</h1>
</div>
    </div>
     

     
     `;
     history1.appendChild(div);
     }

    

})



// card 9 call
document.getElementById("call-btn-9").addEventListener("click", function(){


let coinKoma = parseInt(document.getElementById("coin-kombe").innerText)


console.log(coinKoma)

    let newBalance = coinKoma - 20
    
    if(newBalance < 0){
         newBalance =0;
         alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ টি কয়েন লাগবে")
    
    }
    else{
                    alert("Bangladesh Railway Helpline 163");

    }
    console.log(newBalance)
    document.getElementById("coin-kombe").innerText = newBalance

     if (coinKoma > 0){
        let history1 = document.getElementById("call-history-1") 
    
     const div = document.createElement("div");
     div.innerHTML = `

     <div  class="flex justify-between items-center m-4 bg-[#f5fff6] p-2.5 rounded-2xl">

   <div>
          <h1>Bangladesh Railway Helpline</h1>
          <h1>163</h1>
          
</div>

          <div>    <h1>${"today " + (new Date().getHours()%12 || 12) + ":" + String(new Date().getMinutes()).padStart(2,"0") + (new Date().getHours()>=12?" pm":" am")}</h1>
</div>
    </div>
     

     
     `;
     history1.appendChild(div);
     }

    

})



// clear all history


document.getElementById("clear-btn").addEventListener("click", function() {
    const historyContainer = document.getElementById("call-history-1");
    historyContainer.innerHTML = "";
});




// copy item

// copy card 1

document.getElementById("copy-btn-1").addEventListener("click", function(){
   

    const countOn = document.getElementById("copy-item");
    let count = parseInt(countOn.innerText) || 0;
    count++;
    countOn.innerText = count; 

    const textCopy = "999"
    navigator.clipboard.writeText(textCopy)
    .then(() => {
        alert("999 কপি করা হয়েছে")
    })

    
    
})


// copy card 2

document.getElementById("copy-btn-2").addEventListener("click", function(){
   

    const countOn = document.getElementById("copy-item");
    let count = parseInt(countOn.innerText) || 0;
    count++;
    countOn.innerText = count; 

    const textCopy = "999"
    navigator.clipboard.writeText(textCopy)
    .then(() => {
        alert("999 কপি করা হয়েছে")
    })

    
    
})


// copy card 3

document.getElementById("copy-btn-3").addEventListener("click", function(){
   

    const countOn = document.getElementById("copy-item");
    let count = parseInt(countOn.innerText) || 0;
    count++;
    countOn.innerText = count; 

    const textCopy = "999"
    navigator.clipboard.writeText(textCopy)
    .then(() => {
        alert("999 কপি করা হয়েছে")
    })

    
    
})


// copy card 4

document.getElementById("copy-btn-4").addEventListener("click", function(){
   

    const countOn = document.getElementById("copy-item");
    let count = parseInt(countOn.innerText) || 0;
    count++;
    countOn.innerText = count; 

    const textCopy = "1994-999999"
    navigator.clipboard.writeText(textCopy)
    .then(() => {
        alert("1994-999999 কপি করা হয়েছে")
    })

    
    
})


// copy card 5

document.getElementById("copy-btn-5").addEventListener("click", function(){
   

    const countOn = document.getElementById("copy-item");
    let count = parseInt(countOn.innerText) || 0;
    count++;
    countOn.innerText = count; 

    const textCopy = "109"
    navigator.clipboard.writeText(textCopy)
    .then(() => {
        alert("109 কপি করা হয়েছে")
    })

    
    
})


// copy card 6

document.getElementById("copy-btn-6").addEventListener("click", function(){
   

    const countOn = document.getElementById("copy-item");
    let count = parseInt(countOn.innerText) || 0;
    count++;
    countOn.innerText = count; 

    const textCopy = "106"
    navigator.clipboard.writeText(textCopy)
    .then(() => {
        alert("106 কপি করা হয়েছে")
    })

    
    
})


// copy card 7

document.getElementById("copy-btn-7").addEventListener("click", function(){
   

    const countOn = document.getElementById("copy-item");
    let count = parseInt(countOn.innerText) || 0;
    count++;
    countOn.innerText = count; 

    const textCopy = "16216"
    navigator.clipboard.writeText(textCopy)
    .then(() => {
        alert("16216 কপি করা হয়েছে")
    })

    
    
})

// copy card 8

document.getElementById("copy-btn-8").addEventListener("click", function(){
   

    const countOn = document.getElementById("copy-item");
    let count = parseInt(countOn.innerText) || 0;
    count++;
    countOn.innerText = count; 

    const textCopy = "16445"
    navigator.clipboard.writeText(textCopy)
    .then(() => {
        alert("16445 কপি করা হয়েছে")
    })

    
    
})


// copy card 9

document.getElementById("copy-btn-9").addEventListener("click", function(){
   

    const countOn = document.getElementById("copy-item");
    let count = parseInt(countOn.innerText) || 0;
    count++;
    countOn.innerText = count; 

    const textCopy = "163"
    navigator.clipboard.writeText(textCopy)
    .then(() => {
        alert("163 কপি করা হয়েছে")
    })

    
    
})