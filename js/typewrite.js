
// ============  typewriting effect  ============ 

const text = ['имиджмейкер'];
let index = 0;
let currentText = '';
let letter = '';

// это IIFE
(function type(){

   currentText = text[0];
   letter = currentText.slice(0, ++index);

   document.querySelector('.typing').textContent = letter;
   if (letter.length === currentText.length) {
      index = -1;
   }
   setTimeout(type, 300);
}());

