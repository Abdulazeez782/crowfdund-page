// const open = document.getElementById("button-one");
// const close = document.getElementById("button-two");
// const modal = document.getElementById("modal-container");

// open.addEventListener("click", () => {
//     modal.classList.add("show");
// })

// close.addEventListener("click", () => {
//     modal.classList.remove("show");
// })

const openMenu = document.getElementById("img-hamburger");
const closeMenu = document.getElementById("img-close");
const mobileModal = document.getElementById("modal-mobile-menu");

openMenu.addEventListener("click", () => {
    mobileModal.classList.add("show");
    closeMenu.classList.add("show");
    openMenu.classList.remove("show");
})
 
closeMenu.addEventListener("click", () => {
    mobileModal.classList.remove("show");
    openMenu.classList.add("show");
    closeMenu.classList.remove("show");
})

 const thanksModal = document.getElementById("thanks");
 const selectReward = document.querySelectorAll(".select");
 const closeReward = document.getElementById("close-reward");

 
selectReward.forEach(select => {
    select.addEventListener("click", () => {
        thanksModal.classList.add("show");
        overlay.classList.add("show");
    })

})

 
closeReward.addEventListener("click", () => {
    thanksModal.classList.remove("show");
    overlay.classList.remove("show");
})

const backProject = document.getElementById("back-project");
const closeModal = document.getElementById("close-modal");
const showModal = document.getElementById("back-modal");
const overlay = document.getElementById("overlay");


backProject.addEventListener("click", () => {
    showModal.classList.add("show");
    overlay.classList.add("show");
})

closeModal.addEventListener("click", () => {
    showModal.classList.remove("show");
    overlay.classList.remove("show");
})


const radioBtn = document.querySelectorAll(".radio");
const enterPledge = document.querySelectorAll(".enter-pledge");
const modalBorder = document.querySelectorAll(".modal-border");

for (let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener("click", (e) => {
        clearPledge();
        modalBorder[i].style.border = "2px solid hsl(176, 50%, 47%)";
        enterPledge[i].style.display = "block";
    });    
};

function clearPledge() {
    for (let i = 0; i < radioBtn.length; i++) {        
        enterPledge[i].style.display = "none";
        modalBorder[i].style.border = "1px solid black";
        
    }
}

// function showThanks() {
//     thanksModal.classList.add("show");
//     overlay.classList.add("show");
//     showModal.classList.remove("show");
//     clearPledge()
// }


const bookmark = document.getElementById("bookmark");
let bookmarks = false;

document.getElementsByClassName("flex-bookmark")[0].addEventListener("click", function () {
    (this.classList.contains("active-bookmark")) ? this.classList.remove("active-bookmark"): this.classList.add("active-bookmark");

     bookmarks = !bookmarks

     bookmarks 
      ? (bookmark.innerHTML = "Bookmarked") 
      : (bookmark.innerHTML = "Bookmark");
});


const noReward = document.getElementById("no-reward");
noReward.addEventListener("click", () => {
    thanksModal.classList.add("show");
    overlay.classList.add("show");
    showModal.classList.remove("show");
    clearPledge();
    addBackers();
})


const validateBamboo = document.getElementById("bamboo");

validateBamboo.addEventListener("click", checkInput)

function checkInput() {
const inputValue = document.getElementById("bamboo-input");
const inputValueNumber = parseInt(inputValue.value);


     if(inputValueNumber >= 25){
        thanksModal.classList.add("show");
        overlay.classList.add("show");
        showModal.classList.remove("show");
        clearPledge();
        addAmountBamboo();
        addBackers();
    }else {
        console.log("error");
    }
}
function addAmountBamboo() {
    let amountBacked = document.getElementById("amount-backed");
    let inputValue = document.getElementById("bamboo-input").value;

    let amountPledged = parseInt(inputValue);
    let currentAmount = parseInt(document.getElementById("amount-backed").innerHTML.replace(",", ""));
    let newAmount = currentAmount + amountPledged;
    document.getElementById("amount-backed").innerHTML = newAmount.toLocaleString();
}

function addAmount() {
    let amountBacked = document.getElementById("amount-backed");
    let inputValue1 = document.getElementById("black-edition-input").value;

    let amountPledged = parseInt(inputValue1);
    let currentAmount = parseInt(document.getElementById("amount-backed").innerHTML.replace(",", ""));
    let newAmount = currentAmount + amountPledged;
    document.getElementById("amount-backed").innerHTML = newAmount.toLocaleString();

    // let amount =  parseInt(amountBacked.innerHTML.slice(1, 6));
    // let total =  totalBacked.innerHTML;

    // console.log(inputValueNumber1);

    // let amountTotal = amount + inputValueNumber1;

    // document.getElementById("amount-backed").innerHTML = amountTotal.toLocaleString();

}


const validateBlack = document.getElementById("black-edition");

validateBlack.addEventListener("click", checkInputBlack)

function checkInputBlack() {
    const inputValue1 = document.getElementById("black-edition-input");
    const inputValueNumber1 = parseInt(inputValue1.value);

     if(inputValueNumber1 >= 75){
        thanksModal.classList.add("show");
        overlay.classList.add("show");
        showModal.classList.remove("show");
        clearPledge();
        addAmount();
        addBackers();
    }else {
        console.log("error");
    }
}

let percent = 80;
document.getElementById("progress").style.width = percent + "%";
let progressBar = document.getElementById("progress").style.width = percent + "%";
function addBackers() {
    let target = 100000;
    let currentBackers = parseInt(document.getElementById("total-backed").innerHTML.replace(",", ""));
    let newBackers = ++currentBackers;
    document.getElementById("total-backed").innerHTML = newBackers.toLocaleString();
    let amountBaccked = parseInt(document.getElementById("amount-backed").innerHTML.replace(",", ""));

    
    percent = percent >= 100 ? 100: amountBaccked/target * 100;
    document.getElementById("progress").style.width = percent + "%";
}









// const continueBtn = document.getElementsByClassName("continue-btn");


// for (let i = 0; i < continueBtn.length; i++) {
//     continueBtn[i].addEventListener("click", () => {        
//         thanksModal.classList.add("show");
//         overlay.classList.add("show");
//         clearPledge();
//     })
    
// }


// const radioBtn = document.getElementsByClassName(".radio");
// const stands = document.getElementsByClassName("stands");
// const enterPledge = document.getElementsByClassName(".enter-pledge");

// for (let i = 0; i < radioBtn.length; i++) {
//     radioBtn[i].addEventListener("click", () => {
//         for (let i = 0; i < enterPledge.length; i++) {
//             enterPledge[i].classList.add("show");
            
//         }
//     })
    
// }






 
 


 


