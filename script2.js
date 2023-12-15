// Image upload

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

// Color picker

function changeColor(input, blockId) {
    const color = input.value;
    const block = document.getElementById(blockId);
    block.style.backgroundColor = color;
}

function openColorPicker(colorInputId) {
    const colorInput = document.getElementById(colorInputId);
    colorInput.click();
}

// BG gradient

document.addEventListener('DOMContentLoaded', function () {
    const gradientContainer = document.querySelector('.gradient-container');
    const colorInput = document.getElementById('colorInputbg');
    const colorInput2 = document.getElementById('colorInputbg2');
    const changeColorButton = document.getElementById('changeColorButton');

    function changeGradientColors() {
        const selectedColor = colorInput.value;
        const selectedColor2 = colorInput2.value;
        gradientContainer.style.background = `linear-gradient(to bottom right, ${selectedColor}, ${selectedColor2})`;
    }

    changeColorButton.addEventListener('click', changeGradientColors);
});

// Border 

document.addEventListener('DOMContentLoaded', function () {
    const borderColorInput = document.getElementById('borderColorInput');
    const changeBorderColorButton = document.getElementById('changeBorderColorButton');
    const boxes = document.querySelectorAll('.border-box');

    function changeBorderColors() {
        const selectedColor = borderColorInput.value;
        boxes.forEach(box => {
            box.style.borderColor = selectedColor;
        });
    }

    changeBorderColorButton.addEventListener('click', changeBorderColors);
});

// Text

document.addEventListener('DOMContentLoaded', function () {
    const textColorInput = document.getElementById('textColorInput');
    const changeTextColorButton = document.getElementById('changeTextColorButton');
    const coloredTexts = document.querySelectorAll('.colored-text');

    function changeTextColors() {
        const selectedColor = textColorInput.value;
        coloredTexts.forEach(text => {
            text.style.color = selectedColor;
        });
    }

    changeTextColorButton.addEventListener('click', changeTextColors);
});


// HTML2CANVA

const coloringDiv = document.getElementById('coloringDiv');
const saveButton = document.getElementById('saveButton');

saveButton.addEventListener('click', function() {
    // Use HTML2Canvas to capture the content of the div
    html2canvas(coloringDiv).then(function(canvas) {
        // Get the image data from the canvas
        const imageData = canvas.toDataURL('image/png');

        // Create a temporary link element
        const downloadLink = document.createElement('a');
        downloadLink.href = imageData;
        downloadLink.download = 'shipmeme.png';

        // Append the link to the body and trigger the click event
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Remove the link from the body
        document.body.removeChild(downloadLink);
    });
});



