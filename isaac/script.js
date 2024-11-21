// Ensure DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Navigation links functionality
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            const targetPage = e.target.getAttribute("href");
            if (targetPage) {
                window.location.href = targetPage; // Navigate to the target page
            }
        });
    });

    // Product image upload functionality
    const uploadForm = document.querySelector("form");
    if (uploadForm) {
        uploadForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent form submission

            // Get form input values
            const productName = document.getElementById("product-name").value;
            const productImage = document.getElementById("product-image").files[0];

            // Validate inputs
            if (!productName || !productImage) {
                alert("Please fill in all fields!");
                return;
            }

            // Use FileReader to display uploaded image
            const reader = new FileReader();
            reader.onload = () => {
                // Create and display uploaded product details
                const uploadedImagesContainer = document.getElementById("uploaded-images");
                if (uploadedImagesContainer) {
                    const imageDiv = document.createElement("div");
                    imageDiv.className = "uploaded-image";
                    imageDiv.innerHTML = `
                        <img src="${reader.result}" alt="${productName}" style="max-width: 100px; display: block; margin: 10px auto;">
                        <p>${productName}</p>
                    `;
                    uploadedImagesContainer.appendChild(imageDiv);
                }
                alert("Product uploaded successfully!");
            };
            reader.readAsDataURL(productImage);
        });
    }
});