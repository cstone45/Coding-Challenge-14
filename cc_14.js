//Task 1:
// See Index.html File Setup

//Task 2: Adding Support Tickets Dynamically
const ticketContainer = document.getElementById("ticketContainer");
const ticketCard = document.createElement("div");
ticketCard.setAttribute("id", "ticketCard");
ticketCard.setAttribute("class", "metric-card");
const customerName = document.createElement("h2");
customerName.textContent = "Customer Name:"
const issueDescription = document.createElement("p");
issueDescription.textContent = "Customer Issue:";
const issuePriority = document.createElement("label");
issuePriority.textContent = "High Priority:"
const resolveButton = document.createElement("button");
resolveButton.textContent = "Remove Issue";
resolveButton.addEventListener("click", function() {
    ticketContainer.removeChild(ticketCard);
});
ticketCard.appendChild(customerName);
ticketCard.appendChild(issueDescription);
ticketCard.appendChild(issuePriority);
ticketCard.appendChild(resolveButton);
ticketContainer.appendChild(ticketCard);

//Task 3: Converting NodeLists to Arrays for Bulk Updates
const ticketCardNodeList = document.querySelectorAll(".metric-card");
ticketCard = document.querySelectorAll("High");
const arrayOfTicketCard = Array.from(ticketCardNodeList);
arrayOfTicketCard.forEach(card => {
    card.style.backgroundColor = "red";
});

//Task 4: Implementing Ticket
ticketContainer = document.getElementById("ticketContainer");
ticketContainer.addEventListener('click', (event)=> {
    if (event.target.classList.contains("metric-card")) {
        console.log("Ticket Card Clicked");
    }
});
ticketCard = document.querySelector("#ticketCard");
ticketCard.addEventListener("click", (event)=> {
    event.stopPropagation();
    ticketContainer.removeChild(ticketCard);
});
