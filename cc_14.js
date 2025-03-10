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
issuePriority.textContent = "Issue Priority:"
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