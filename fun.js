const TextBox = document.querySelector('.textSpace');
const SHBtn = document.querySelector('.SHBtn');
const Clr = document.querySelector('.Clr');
const CStrength = document.querySelector('.strengthBtn');



CStrength.addEventListener('click',()=>{
    let text = TextBox.value;
    console.log(text);
    count = 0 ;
    var SC = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/;
    var NC = /\d/;
    var LC = /[a-z]/;
    var UC = /[A-Z]/;
    var minLength = 8;
    var minUpperCase = 1;
    var minLowerCase = 1;
    var minNumbers = 1;
    var minSpecialChars = 1;

    if (text.length >= minLength) {
        count++;
    }

    if (UC.test(text)){
        count++;
    }
    if (LC.test(text)){
        count++;
    }
    if (NC.test(text)){
        count++;
    }
    if (SC.test(text)){
        count++;
    }

    console.log(count);

    if (count == 0){
        document.querySelector('.para').innerHTML='enter a password';
        document.querySelector('.para').style.display='block';
    }
    else if (text.length < minLength){
        document.querySelector('.para').innerHTML='Enter more than 8 characters';
        document.querySelector('.para').style.display='block';
    }
    else if (count == 1){
        document.querySelector('.para').innerHTML='weak';
        document.querySelector('.para').style.display='block';
    }
    else if (count == 2){
        document.querySelector('.para').innerHTML='moderate';
        document.querySelector('.para').style.display='block';
    }
    else if (count == 3){
        document.querySelector('.para').innerHTML='fair';
        document.querySelector('.para').style.display='block';
    }
    else if (count == 4){
        document.querySelector('.para').innerHTML='strong';
        document.querySelector('.para').style.display='block';
    }
    else if (count == 5){
        document.querySelector('.para').innerHTML='very strong';
        document.querySelector('.para').style.display='block';
    }
    else{
        document.querySelector('.para').innerHTML='invalid';
        document.querySelector('.para').style.display='block';
    }
    
    
})


SHBtn.addEventListener('click',()=>{
    if (document.querySelector('.textSpace').type=='password'){
        document.querySelector('.textSpace').type='text'
        document.querySelector('.SHBtn').innerHTML='Hide'

    }
    else if (document.querySelector('.textSpace').type=='text'){
        document.querySelector('.textSpace').type='password'
        document.querySelector('.SHBtn').innerHTML='Show'
    }
    
})


Clr.addEventListener('click',()=>{
    document.querySelector('.textSpace').value=''
})