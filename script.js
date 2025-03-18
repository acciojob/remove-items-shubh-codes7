//your JS code here. If required.
 document.getElementById("removeBtn").addEventListener("click", function() {
        let select = document.getElementById("colorSelect");
        let selectedIndex = select.selectedIndex; // Get selected option index
        
        if (selectedIndex !== -1) { // Ensure an option is selected
            select.remove(selectedIndex); // Remove selected option
        }
    });