const sizeList = document.getElementById('size-list');
const colorList = document.getElementById('color-list');
const sizeInput = document.getElementById('form-size-input');
const colorInput = document.getElementById('form-color-input');
const result = document.getElementById('result');

let sizes = [];
let colors = [];
let variant = [];

// Add Size
document.getElementById('form-size').addEventListener('submit', function (e) {
    e.preventDefault();

    if (sizeInput.value === '') {
        alert(`Please enter Size`);
    } else {
        createElement(sizeInput.value, sizeList);
        sizes.push(sizeInput.value);

        CreateResultElement();

        sizeInput.value = '';
    }

    console.log(sizes);
});

// Add Color
document.getElementById('form-color').addEventListener('submit', function (e) {
    e.preventDefault();

    if (colorInput === '') {
        alert(`Please enter Color`);
    } else {
        createElement(colorInput.value, colorList);
        colors.push(colorInput.value);
        CreateResultElement();
        colorInput.value = '';
    }

    console.log(colors);
});

function createElement(value, container) {
    const li = document.createElement('li');
    li.innerHTML = `<li>${value}</li>`;
    container.appendChild(li);
}

function CreateResultElement() {
    while (result.children.length > 0) {
        result.removeChild(result.children[0]);
    }

    while (variant.length > 0) {
        variant = [];
    }

    sizes.forEach(function (size) {
        if (colors.length > 0) {
            colors.forEach(function (color) {
                const li = document.createElement('li');
                li.innerHTML = `
                <li class="d-flex justify-content-between align-items-center">
                    <p>${size} / ${color}</p>
                    <input type="text" placeholder="PHP 0.00" />
                    <input type="text" placeholder="SKU" />
                    <button>Delete</button>
                </li>
            `;
                result.appendChild(li);
                variant.push(`${size} / ${color}`);
                console.log(variant);
            });
        } else {
            const li = document.createElement('li');
            li.innerHTML = `
                <li class="d-flex justify-content-between align-items-center">
                    <p>${size}</p>
                    <input type="text" placeholder="PHP 0.00" />
                    <input type="text" placeholder="SKU" />
                    <button>Delete</button>
                </li>
            `;
            result.appendChild(li);
            variant.push(size);
            console.log(variant);
        }
    });
}
