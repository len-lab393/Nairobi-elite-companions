window.onload = function() {

if(localStorage.getItem("ageVerified") === "true"){
return;
}

let verify = confirm(
"You must be 18 years or older to enter this website.\n\nClick OK if you are 18+."
);

if(verify){
localStorage.setItem("ageVerified", "true");
}
else{
window.location.href = "https://google.com";
}

};
