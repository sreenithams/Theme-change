const btn = document.querySelector("#btn");
btn.addEventListener("click",() => {
    if (btn.innerHTML === "Dark") {
        btn.innerHTML="white"
         document.body.style.backgroundColor="black"
       
    }else{
        btn.innerHTML="Dark";
        document.body.style.backgroundColor="white";
    }
});


