let age = document.querySelector(".age").value;
let emotion = document.querySelector(".emotion").value;
let answerbutton = document.querySelector(".answerbutton");
let result = document.querySelector(".result");

answerbutton.addEventListener("click", function(){
    result.style.display="block";
    age = document.querySelector(".age").value;
    emotion = document.querySelector(".emotion").value;

    if(age <= 17 && emotion === "scared"){
        result.innerHTML="You would be Will! Will is a young kid who is scared of being attacked again."
    }else if(age <= 17 && emotion === "brave"){
        result.innerHTML="You would be Eleven! She's used to the issues in Hawkins, and will go against it to save her friends."
    }else if(age >= 18 && emotion === "brave"){
        result.innerHTML="You would be Hopper! He is the sherrif of Hawkins, and will fight anything that'll go against him."
    }else if(age >= 18 && emotion === "scared"){
        result.innerHTML="You would be Karen! She is an adult who is scared of everything that happens"
    }else{
        result.innerHTML="Hey! you must've answered incorrectly. Type correct and refresh to try again."
    }
});