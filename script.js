"use strict";

//elements
const moviesEl = document.getElementById("movies");
const screencontainerEl = document.querySelector(".screen-container");
const countEl = document.getElementById("count");
const totalEl = document.getElementById("total");




//gobal variables
let ticketprice = Number(moviesEl.value);
let seatcount = 0 ;
let totalprice = 0;



const populateUI = function () {
   countEl.innerText = seatcount;
    totalEl.innerText = seatcount*ticketprice;

}


moviesEl.addEventListener("change", function(){
    ticketprice = Number(moviesEl.value);
    populateUI();

}
);
screencontainerEl.addEventListener("click", function(e){
    if (e.target.classList.contains("seat")){
        if (!e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected");
          const seatselectedEl = document.querySelectorAll('.row .seat.selected');      
         seatcount = seatselectedEl.length;
            populateUI();
                
        } 

  } } );
