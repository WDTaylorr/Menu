// Get Buttons
let buttons = document.querySelectorAll(".food-button")

// Loop through buttons and add a click listener to each
buttons.forEach(function(button){
  button.addEventListener("click", function(btn){
    // Grab ID of button clicked (eg: breakfast, lunch)
    id = button.id
    // Select all menu items
    menu = document.getElementById("menu")
    menuItems = menu.children

    // loop through each menu item to check if they match the button clicked, hide ones which dont
    Array.from(menuItems).forEach(function(item){
      if (item.classList.contains(id)){
        item.style.display = "flex"
      }else{
        item.style.display = "none"
      }
    })

  })
})