// =====================================
// REUSABLE TOAST NOTIFICATION FUNCTION
// =====================================

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


// =====================================
// ACTIVITY 5 - BOOK BUTTON INTERACTION
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const bookButtons = document.querySelectorAll(".book-btn");

    bookButtons.forEach(button => {

        button.addEventListener("click", function () {

            const matchName = this.dataset.match;

            const bookingSection = document.getElementById("booking");

            bookingSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            showToast("You are booking tickets for " + matchName + "!");

        });

    });


    // =====================================
    // ACTIVITY 7 - LIVE BOOKING SUMMARY
    // =====================================

    // Selecting form elements using DOM selectors

    const matchSelect = document.getElementById("match");
    const standSelect = document.getElementById("stand");
    const ticketInput = document.getElementById("tickets");


    // Selecting Booking Summary elements

    const summaryMatch = document.getElementById("summary-match");
    const summaryStand = document.getElementById("summary-stand");
    const summaryPrice = document.getElementById("summary-price");
    const summaryQuantity = document.getElementById("summary-quantity");
    const summaryTotal = document.getElementById("summary-total");


    // Ticket prices for each match

    const ticketPrices = {

        "01": {
            "General": 1200,
            "Premium": 2500,
            "VIP": 5000
        },

        "02": {
            "General": 1500,
            "Premium": 3000,
            "VIP": 6000
        },

        "03": {
            "General": 1400,
            "Premium": 3200,
            "VIP": 6500
        },

        "04": {
            "General": 1800,
            "Premium": 3500,
            "VIP": 7000
        }

    };


    // Match names

    const matchNames = {
        "01": "CSK vs MI",
        "02": "RCB vs MI",
        "03": "DC vs CSK",
        "04": "RR vs RCB"
    };


    // Function to update Booking Summary

    function updateBookingSummary() {

        const selectedMatch = matchSelect.value;
        const selectedStand = standSelect.value;
        const quantity = Number(ticketInput.value);


        // Check whether a match is selected

        if (!selectedMatch) {

            summaryMatch.textContent = "Not Selected";
            summaryStand.textContent = selectedStand;
            summaryPrice.textContent = "0";
            summaryQuantity.textContent = "0";
            summaryTotal.textContent = "0";

            return;
        }


        // Check ticket quantity

        if (!Number.isInteger(quantity) || quantity < 1) {

            summaryMatch.textContent = matchNames[selectedMatch];
            summaryStand.textContent = selectedStand;
            summaryPrice.textContent = "0";
            summaryQuantity.textContent = "0";
            summaryTotal.textContent = "0";

            return;
        }


        // Calculate ticket price and total amount

        const price = ticketPrices[selectedMatch][selectedStand];

        const total = price * quantity;


        // Update Booking Summary Card

        summaryMatch.textContent = matchNames[selectedMatch];

        summaryStand.textContent = selectedStand;

        summaryPrice.textContent = price.toLocaleString("en-IN");

        summaryQuantity.textContent = quantity;

        summaryTotal.textContent = total.toLocaleString("en-IN");


        // Display confirmation toast

        showToast("Booking Summary Updated Successfully!");

    }


    // Add change event listeners

    matchSelect.addEventListener("change", updateBookingSummary);

    standSelect.addEventListener("change", updateBookingSummary);

    ticketInput.addEventListener("change", updateBookingSummary);

});