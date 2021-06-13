import hello from './app'

const fullName = hello('Somchai','Deesuk')

alert(`${fullName}, Try to view the console.log`)
console.log('Result: ' , fullName)

// - HTML

document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode(fullName);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("app");
  document.body.insertBefore(newDiv, currentDiv);
}