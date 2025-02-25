const form = document.getElementById('js-container');
const button = document.getElementById('nextbut');
const first = document.getElementById('first');
const second = document.getElementById('second');
const stepOne = document.getElementById('step-one');
const stepTwo = document.getElementById('step-two');
const stepThree = document.getElementById('step-three');
const goBack = document.getElementById('first-gobackb');
const arcade = document.getElementById('arcade');
const advanced = document.getElementById('advanced');
const pro = document.getElementById('pro');
const toggle = document.getElementById('cb1');
const yearly = document.getElementById('year');
const monthly = document.getElementById('month');
const cheap = document.getElementById('cheap');
const notCheap = document.getElementById('notCheap');
const expensive = document.getElementById('expensive');
const firstS = document.getElementById('ninem');
const secondS = document.getElementById('twelvem');
const thirdS = document.getElementById('fifteenm');
const nextbut2 = document.getElementById('second-nstep');
const button3 = document.getElementById('button3');
const third = document.getElementById('third');
const gobackb3 = document.getElementById('gobackb3');
const multiplayer = document.getElementById('$1');
const extra = document.getElementById('$2');
const customize = document.getElementById('$22');
const multiplayer2 = document.getElementById('multiplayer');
const extra2 = document.getElementById('extra');
const customize2 = document.getElementById('customize');
const inpMultiplayer = document.getElementById('inp-multiplayer');
const inpExtra = document.getElementById('inp-extra');
const inpCustomize = document.getElementById('inp-customize');
const Top = document.getElementById('top');
const selectedH3 = document.getElementById('selected-h3');
const selected = document.getElementById('selected');
const h32 = document.getElementById('mon-yer');
const finished = document.getElementById('finished');
const Confirm = document.getElementById('confirm');
const fourth = document.getElementById('fourth');
const price = document.getElementById('price');
const price1 = document.getElementById('price1');
const price2 = document.getElementById('price2');
const stepFour = document.getElementById('step-four');
const online = document.getElementById('online');
const large = document.getElementById('large');
const custom = document.getElementById('custom');
const goback4 = document.getElementById('goback4');
const total = document.getElementById('num');
const label = document.getElementById('total');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const name1 = document.getElementById('name');
const warning2 = document.getElementById('warning2');
const warning = document.getElementById('warning');
const warning1 = document.getElementById('warning1');


let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
let Phone1 = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
let phone2 = /^\d{3}$/g;

//const params = new URLSearchParams(window.location.search);


button.addEventListener('click', (e) => {
    e.preventDefault()

    if(!name1.value == '' && phone.value.match(Phone1) && email.value.match(regex) ){   
        first.style.display = ('none');
        second.style.display = ('block'); 
        stepOne.style.setProperty('--afterBack', 'var(--Purplish-blue)');
        stepOne.style.setProperty('--nigro', 'white');
        stepTwo.style.setProperty('--beforeBack',  'var(--White)');
        stepTwo.style.setProperty('--nigra','var(--Purplish-blue)');  
    
        
        
        
        
    }

    if(name1.value === ''){
        warning.innerHTML = ('This field is required');
        name1.style.border = ('solid 1px var(--Strawberry-red)');
        first.style.display = ('block');
        second.style.display = ('none'); 
    }else{
        name1.style.border = ('1px solid var(--Cool-gray)');
        warning.innerHTML = ('');
    }

    if(!email.value.match(regex) || !email.value === ''){
        first.style.display = ('block');
        second.style.display = ('none'); 
        email.style.border = ('1px solid var(--Strawberry-red)')
        first.style.display = ('block');
        second.style.display = ('none'); 
        warning2.innerHTML = ('Invalid email adress');
    }else{
        email.style.border = ('1px solid var(--Cool-gray)');
        warning2.innerHTML = ('');
    }

    if(phone.value === ''){
        first.style.display = ('block');
        second.style.display = ('none'); 
        warning1.innerHTML = ('This field is required');
    }else{
    }

    if(!phone.value.match(Phone1) || !phone.value === ''){
        first.style.display = ('block');
        second.style.display = ('none'); 
        warning1.innerHTML = ('Invalid character in phone number');
        phone.style.border = ('1px solid var(--Strawberry-red)');
    }else{
        warning1.innerHTML = ('');
        phone.style.border = ('1px solid var(--Cool-gray)');
    }

    if(phone.value === ''){
        first.style.display = ('block');
        second.style.display = ('none'); 
        warning1.innerHTML = ('This field is required');
        phone.style.border = ('1px solid var(--Strawberry-red)');
    }else{
    }


    if(email.value === ''){
        first.style.display = ('block');
        second.style.display = ('none'); 
        warning2.innerHTML = 'This field is required';
    }else{
    }
});

goBack.addEventListener('click', (e) =>{
    e.preventDefault()
    first.style.display = ('block');
    second.style.display = ('none');
    stepOne.style.setProperty('--afterBack', 'var(--White)');
    stepOne.style.setProperty('--nigro', 'var(--Purplish-blue)');
    stepTwo.style.setProperty('--beforeBack', 'var(--Purplish-blue)');
    stepTwo.style.setProperty('--nigra', 'var(--White)' );
});

arcade.addEventListener('click', (e) =>{
    e.preventDefault()
    arcade.classList.add('rizz');
    arcade.classList.remove('arcade');
    advanced.classList.remove('rizz');
    pro.classList.remove('rizz');
    Top.innerHTML = 'Arcade';
    selectedPlan = 0; 
    
});

advanced.addEventListener('click', (e) =>{
    e.preventDefault()
    arcade.classList.remove('rizz');
    arcade.classList.add('arcade');
    advanced.classList.add('rizz');
    // advanced.classList.remove('advance');
    pro.classList.remove('rizz');
    Top.innerHTML = ('Advanced')
    selected.style.gap = ('100px');
    selectedPlan = 1;

});

pro.addEventListener('click', () =>{
    advanced.classList.remove('rizz');
    // advanced.classList.remove('arcade');
    arcade.classList.remove('rizz');
    arcade.classList.add('arcade');
    pro.classList.add('rizz');
    pro.classList.remove('advance');
    Top.innerHTML = ('Pro');
    selected.style.gap = ('200px')
    selectedPlan = 2;
    
}); 


toggle.addEventListener('click', () => {
    if (toggle.checked) {
        yearly.style.color = ('var(--Marine-blue');
        monthly.style.color = ('var(--Cool-gray');
        cheap.innerHTML = ('2 months free');
        cheap.style.color = ('var(--Marine-blue)');
        notCheap.innerHTML = ('2 months free');
        notCheap.style.color = ('var(--Marine-blue)');
        expensive.style.color = ('var(--Marine-blue)'); 
        expensive.innerHTML = ('2 months free');
        firstS.innerHTML = ('$90/yr');
        secondS.innerHTML = ('$120/yr');
        thirdS.innerHTML = ('$150/yr');
        multiplayer.innerHTML = ('+$10/yr');
        extra.innerHTML = ('+$20/yr');
        customize.innerHTML = ('+$20/yr');
        selected.style.gap = ('200px')
        selectedH3.innerHTML = ('(Yearly)');
        finished.style.width = ('500px');
        planScope = 'yearly';
        label.innerHTML = ('Total (per year)');
        // serviceM = [10, 20, 20];
        // serviceY = ('/yr');

      } else {
        monthly.style.color = ('var(--Marine-blue');
        yearly.style.color = ('var(--Cool-gray');
        cheap.innerHTML = ('');
        notCheap.innerHTML = ('');
        expensive.innerHTML = ('');
        firstS.innerHTML = ('$9/mo');
        secondS.innerHTML = ('$12/mo');
        thirdS.innerHTML = ('$15/mo');
        multiplayer.innerHTML = ('+$1/mo');
        extra.innerHTML = ('+$2/mo');
        customize.innerHTML = ('+$2/mo');
        selected.style.gap = ('200px')
        finished.style.width = ('500px')
        selectedH3.innerHTML =  ('(monthly)');
        planScope = 'monthly';
        label.innerHTML = ('Total (per month)');
        // serviceM = [1, 2, 2];
        // serviceY = ('/mo');
      }
    
});


   

nextbut2.addEventListener('click', (e) =>{
    e.preventDefault()
    stepThree.style.setProperty('--nigras', 'var(--Purplish-blue)');
    stepThree.style.setProperty('--afterFront', 'var(--White)'); 
    stepTwo.style.setProperty('--nigra', 'var(--White)' );
    stepTwo.style.setProperty('--beforeBack', 'var(--Purplish-blue)'); 
    second.style.display = ('none');
    third.style.display = ('block');

    // if(arcade.onclick || toggle.checked){
    //     h32.innerHTML = ('$90/yr');
    // }

    // if(arcade.onclick && toggle.checked == false){
    //     h32.innerHTML = ('$9/mo');
    // }
    
    // if(advanced.onclick || toggle.checked){
    //     h32.innerHTML = ('$120/yr');
    // }

    // if(advanced.onclick && toggle.checked == false){
    //     h32.innerHTML = ('$12/mo');
    // 
    
    

    

    
});

gobackb3.addEventListener('click', (e) =>{
    e.preventDefault()
    stepThree.style.setProperty('--nigras', 'var(--White)');
    stepThree.style.setProperty('--afterFront', 'var(--Purplish-blue)'); 
    stepTwo.style.setProperty('--nigra', 'var(--Purplish-blue)' );
    stepTwo.style.setProperty('--beforeBack', 'var(--White)'); 
    second.style.display = ('block')
    third.style.display = ('none')
});

function myFunction(){
    if (inpMultiplayer.checked == true){
        Plan = 1;
        multiplayer2.style.backgroundColor = ('var(--Magnolia)');
        multiplayer2.style.border = ('1px var(--Purplish-blue) solid');
        document.getElementById('service').style.display = ("flex");
        

    }
    else {
        Plan = 0;
        multiplayer2.style.backgroundColor = ('var(--White)');
        multiplayer2.style.border = ('1px var(--Light-gray) solid');
        document.getElementById('service').style.display = ("none");
    }
    
};

 function myotherFunction(){
    if(inpExtra.checked == true){
        extra2.style.backgroundColor = ('var(--Magnolia)');
        extra2.style.border = ('1px var(--Purplish-blue) solid');
        document.getElementById('storage').style.display = ("flex");
        Plan1 = 2;
    }else{
        extra2.style.backgroundColor = ('var(--White)');
        extra2.style.border = ('1px var(--Light-gray) solid');
        document.getElementById('storage').style.display = ("none");
        Plan1 = 0;

    }
}

function my2Function(){
    if(inpCustomize.checked == true){
        customize2.style.backgroundColor = ('var(--Magnolia)')
        customize2.style.border = ('1px var(--Purplish-blue) solid');
        document.getElementById('profile').style.display = ("flex");
        Plan2 = 3;
    }else{
       customize2.style.backgroundColor = ('var(--White)')
       customize2.style.border = ('1px var(--Light-gray) solid');
       document.getElementById('profile').style.display = ("none");
       Plan2 = 0
    }
    
}

var Plan = 0;
var Plan1 = 0;
var Plan2 = 0;

let planScope = 'monthly';
let selectedPlan = 0;
var month = [9, 12 , 15];
var year = [90, 120, 150];
let serviceY = [0, 10, 20, 20];
let serviceM = [0, 1, 2, 2];




button3.addEventListener('click', (e)=>{
    e.preventDefault()
    third.style.display = ('none');
    fourth.style.display = ('block');

    stepFour.style.setProperty('--nigroa', 'var(--Purplish-blue)');
    stepFour.style.setProperty('--beforeAfter', 'var(--White)');
    stepThree.style.setProperty('--afterFront', 'var(--Purplish-blue)');
    stepThree.style.setProperty('--nigras', 'var(--White)'); 

    let v1 =  serviceM[Plan];
    let v2 =  serviceM[Plan1];
    let v3 =  serviceM[Plan2];

    let v4 =  serviceY[Plan];
    let v5 =  serviceY[Plan1];
    let v6 =  serviceY[Plan2];

    let v7 = month[selectedPlan];
    let v8 = year[selectedPlan];
        let sum1 = v1 + v2 + v7 + v3;
    let sum2 = v4 + v5 + v6 + v8;

    if (planScope === 'monthly') {
        h32.textContent = "$" + month[selectedPlan] + "/mo";
        price.innerHTML = "+$" + serviceM[Plan] + "/mo";
        price1.innerHTML = "+$" + serviceM[Plan1] + "/mo";
        price2.innerHTML = "+$" + serviceM[Plan2] + "/mo";
        total.textContent = "+$" + sum1 + "/mo";
    }
    else {
        h32.textContent = "$" + year[selectedPlan] + "/yr";
        price.innerHTML = "+$" + serviceY[Plan] + "/yr";
        price1.innerHTML = "+$" + serviceY[Plan1] + "/yr";
        price2.innerHTML = "+$" + serviceY[Plan2] + "/yr";
        total.textContent = "+$" + sum2 + "/yr";
    }
    if(advanced.onclick && planScope === 'yearly'){
        selected.style.gap = ('0px');
    }
})


goback4.addEventListener('click', (e)=>{
    e.preventDefault()
    third.style.display = ('block');
    fourth.style.display = ('none');
    stepFour.style.setProperty('--nigroa', 'var(--White)');
    stepFour.style.setProperty('--beforeAfter', 'var(--Purplish-blue)');
    stepThree.style.setProperty('--afterFront', 'var(--White)');
    stepThree.style.setProperty('--nigras', 'var(--Purplish-blue)'); 
})

Confirm.addEventListener('click', (e)=>{
    e.preventDefault()
    document.getElementById('container-5').style.display = ('flex');
    fourth.style.display = ('none')
})

