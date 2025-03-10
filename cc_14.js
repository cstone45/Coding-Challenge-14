//Task 1:
// See Index.html File Setup

//Task 2: Adding Support Tickets Dynamically
const ticketContainer = document.getElementById("ticketContainer"); //Selects the ticketContainer element
const ticketCard = document.createElement("div"); //Creates the ticketCard div element
ticketCard.setAttribute("id", "ticketCard"); //Establishes the ID attribute as ticketCard
ticketCard.setAttribute("class", "metric-card"); //Sets the class as a metric card
const customerName = document.createElement("h2"); //Establishes a header in the metric card to contain the customer name
customerName.textContent = "Customer Name:" //Creates the customer name portion of the metric card
const issueDescription = document.createElement("p"); //Establishes the paragrapgh to contain the customer issue section of the metric card
issueDescription.textContent = "Customer Issue:"; //Creates the customer issue section of the metric card
const issuePriority = document.createElement("label"); //Creates the label element for priority
issuePriority.textContent = "High Priority:" //Establishes the metric card as a high priority card
const resolveButton = document.createElement("button"); //Creates the remove button
resolveButton.textContent = "Remove Issue"; //Creates the text for the remove button
resolveButton.addEventListener("click", function() {
    ticketContainer.removeChild(ticketCard);
});//Establishes the click event for the remove button

ticketCard.appendChild(customerName); //Appends the customerName section of the card to the card
ticketCard.appendChild(issueDescription); //Appends the issueDescription section of the card to the card
ticketCard.appendChild(issuePriority); //Appendds the issuePriority section of the card to the card
ticketCard.appendChild(resolveButton); //Appends the resolve button
ticketContainer.appendChild(ticketCard); //Appends the ticketCard to the ticketContainer

//Task 3: Converting NodeLists to Arrays for Bulk Updates
const ticketCardNodeList = document.querySelectorAll(".metric-card"); //Selects metric cards
ticketCard = document.querySelectorAll("High"); //Selects High priority cards
const arrayOfTicketCard = Array.from(ticketCardNodeList); //Converts the information from a Node to an Array
arrayOfTicketCard.forEach(card => { //Establishes a for each function to apply a new background color for all high priority cards
    card.style.backgroundColor = "red"; //Sets a new background color for the card
});

//Task 4: Implementing Ticket
ticketContainer = document.getElementById("ticketContainer");//Selects the ticketContainer
ticketContainer.addEventListener('click', (event)=> { //Establishes the event listener for the ticketContainer
    if (event.target.classList.contains("metric-card")) { //Establishes the if function for the metric card to display text
        console.log("Ticket Card Clicked"); //Establishes what the console will display when the ticket card is clicked
    }
});
ticketCard = document.querySelector("#ticketCard");//Selects the ticket card 
ticketCard.addEventListener("click", (event)=> {//Creates the event listener
    event.stopPropagation();//Prevents bubbling
    ticketContainer.removeChild(ticketCard); //Establishes the command for the click event to remove the ticket card from the ticket container
});

//Task 5: Additional Challenge - Inline Editing of Support Tickets
ticketCard.forEach.addEventListener("dblclick", (event)=> { //Creates the double click event for the metric card to allow editing
    ticketCard.forEach(createInputField("Customer Name:", "Customer Issue:", "Priority:"));//Creates the input data template in the metric-card to be edited
})