var link = document.querySelector(".write-to-us");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector(".name-feedback");
var email = popup.querySelector(".mail-feedback");

var isStorageSupport = true;
var storage = "";


try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }

    login.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("feedback-error");
});

form.addEventListener("submit", function (evt) {
    if (!email.value) {
        evt.preventDefault();
        popup.classList.remove("feedback-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("feedback-error");
        console.log("Нужно ввести емаил");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login,value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("feedback-error");
        }
    }
});


var mapLink = document.querySelector(".map-button");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");


mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});


var delivery = document.querySelector(".text-delivery");
var warranty = document.querySelector(".text-warranty");
var credit = document.querySelector(".text-credit");

var buttonDelivery = document.querySelector(".button-delivery");
var buttonWarranty = document.querySelector(".button-warranty");
var buttonCredit = document.querySelector(".button-credit");

buttonDelivery.addEventListener("click", function (evt) {
    evt.preventDefault();
    delivery.classList.add("text-show");
    buttonDelivery.classList.add("button-helper-current");
    warranty.classList.remove("text-show");
    credit.classList.remove("text-show");
    buttonWarranty.classList.remove("button-helper-current");
    buttonCredit.classList.remove("button-helper-current");
});

buttonWarranty.addEventListener("click", function (evt) {
    evt.preventDefault();
    warranty.classList.add("text-show");
    buttonWarranty.classList.add("button-helper-current");
    delivery.classList.remove("text-show");
    credit.classList.remove("text-show");
    buttonDelivery.classList.remove("button-helper-current");
    buttonCredit.classList.remove("button-helper-current");
});

buttonCredit.addEventListener("click", function (evt) {
    evt.preventDefault();
    credit.classList.add("text-show");
    buttonCredit.classList.add("button-helper-current");
    delivery.classList.remove("text-show");
    warranty.classList.remove("text-show");
    buttonDelivery.classList.remove("button-helper-current");
    buttonWarranty.classList.remove("button-helper-current");
});
