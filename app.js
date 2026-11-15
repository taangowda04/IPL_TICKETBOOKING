// REUSABLE TOAST NOTIFICATION FUNCTION

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 3000);

}


// BOOK BUTTON EVENT HANDLING

document.addEventListener("DOMContentLoaded", function () {

    const bookButtons = document.querySelectorAll(".book-btn");

    bookButtons.forEach(button => {

        button.addEventListener("click", function () {

            const matchName = this.dataset.match;

            // SMOOTH SCROLLING TO BOOKING SECTION

            const bookingSection = document.getElementById("booking");

            bookingSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // DISPLAY TOAST NOTIFICATION

            showToast("You are booking tickets for " + matchName + "!");

        });

    });

});