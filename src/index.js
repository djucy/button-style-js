const button = document.querySelector('.style_button');
const sizesInput = document.querySelectorAll('[data-size]');
const btnSubmit = document.querySelector('.button_load');
const colorsInput = document.querySelectorAll('[data-color]');
const textInput = document.querySelector('[data-text]');

btnSubmit.addEventListener('click', addStyleButton);

function addStyleButton() {
  sizesInput.forEach(inp => {
    let sizeForButton = inp.dataset.size;
    let valueStyle = inp.value;

    button.style[sizeForButton] = valueStyle + 'px';
  });
  // assignedStyle(sizesInput, button, size, 'px');
  colorsInput.forEach(color => {
    let colorForButton = color.dataset.color;

    button.style[colorForButton] = color.value;
  });
  button.textContent = textInput.value;
}

// function assignedStyle(array, element, data, string) {
//   array.forEach(item => {
//     let styleItem = item.dataset.data;
//     console.log(styleItem);
//     let valueItem = item.value;
//     element.style[styleItem] = valueItem + string;
//   });
// }
