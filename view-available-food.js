window.addEventListener('load', function() {
    const foodList = document.getElementById('food-list');

    // Retrieve the food items from local storage
    const foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];

    // Loop through the food items and display them
    foodItems.forEach(function(item, index) {
        if (!item.isTaken) {
            const listItem = document.createElement('li');

            // Add food details to the list item
            listItem.innerHTML = `
                <div>
                    <strong>Event:</strong> ${item.eventName} <br>
                    <strong>Food:</strong> ${item.foodDetails} <br>
                    <strong>Contact:</strong> ${item.contactInfo}
                </div>
                <button onclick="markAsTaken(${index})">Mark as Taken</button>
            `;

            // Append the list item to the food list
            foodList.appendChild(listItem);
        }
    });
});

// Function to mark a food item as taken
function markAsTaken(index) {
    let foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
    
    // Mark the item as taken
    foodItems[index].isTaken = true;
    
    // Save updated food items back to local storage
    localStorage.setItem('foodItems', JSON.stringify(foodItems));

    // Reload the page to update the list
    location.reload();
}
