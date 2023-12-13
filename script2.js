function previewImage(input, blockId) {
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imagePreviewId = "imagePreview" + blockId.slice(-1);
            const imagePreview = document.getElementById(imagePreviewId);
            const placeholderId = "placeholder" + blockId.slice(-1);
            const placeholder = document.getElementById(placeholderId);

            // Replace the placeholder div with the uploaded image
            imagePreview.src = e.target.result;
            placeholder.style.display = 'none'; // Hide the placeholder
            imagePreview.style.display = 'block'; // Show the uploaded image
        };

        reader.readAsDataURL(file);
    }
}

function changeColor(input, blockId) {
    const color = input.value;
    const block = document.getElementById(blockId);
    block.style.backgroundColor = color;
}

function openColorPicker(colorInputId) {
    const colorInput = document.getElementById(colorInputId);
    colorInput.click();
}


