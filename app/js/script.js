document.querySelector(".email__submit").addEventListener("click", (e) => {
    const emailInput = document.querySelector(".email__input").value;
    const re = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/);
    if (!re.exec(emailInput)) {
        e.preventDefault();
        if (document.querySelector(".email__error--disabled") && document.querySelector(".email__msg--disabled")) {
            document.querySelector(".email__error--disabled").classList = "email__error email__error--animated";
            document.querySelector(".email__msg--disabled").classList = "email__msg";
            const inputElem = document.querySelector(".email__input");
            inputElem.style.borderColor = "var(--soft-red)";
            inputElem.style.borderWidth = "2px";
        } else {
            document.querySelector(".email__error").classList.remove("email__error--animated");
            setTimeout(() => document.querySelector(".email__error").classList.add("email__error--animated"), 10);
        }
    }
});