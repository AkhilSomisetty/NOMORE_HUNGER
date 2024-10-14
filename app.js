document.getElementById('food-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const foodDetails = document.getElementById('food-details').value;
    const contactInfo = document.getElementById('contact-info').value;

    // Get existing food items from local storage or create a new array if none exist
    let foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];

    // Create a new food object
    const newFoodItem = {
        eventName,
        foodDetails,
        contactInfo,
        isTaken: false
    };

    // Add new food item to the array
    foodItems.push(newFoodItem);

    // Save updated food items array to local storage
    localStorage.setItem('foodItems', JSON.stringify(foodItems));

    // Clear the form fields
    document.getElementById('event-name').value = '';
    document.getElementById('food-details').value = '';
    document.getElementById('contact-info').value = '';

    alert("Food item submitted successfully!");
});
