document.addEventListener('DOMContentLoaded', function() {

    // switches between light and dark mode
    function onButtonClick() {
        const body = document.getElementById("body");

        if (body.className == "light") {
            body.className = "dark";
            button.innerText = "Light Mode";
        }
        else {
            body.className = "light";
            button.innerText = "Dark Mode";
        }
    }

    const button = document.getElementById("button");

    button.addEventListener("click", onButtonClick);

});
