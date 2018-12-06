// The DOM can be queried using the.querySelector() method,
// which takes an arbitrary CSS selector as an argument:


const myElement = document.querySelector('#foo > div.bar')

myElement.matches('div.bar') === true

const myElements = document.querySelectorAll('.bar')

const myChildElemet = myElement.querySelector('input[type="submit"]')

const newElement = document.createElement('div')

document.body.appendChild(newElement)

Array.from(myElements).forEach(doSomethingWithEachElement)

myElement.children
myElement.childNodes
myElement.firstChild
myElement.lastChild
myElement.previousSibling
myElement.nextSibling
myElement.parentNode
myElement.parentElement

var b = document.querySelector("button");

b.setAttribute("name", "helloButton");
b.getAttribute("name")


myElement.style.marginLeft = '2em'

// Append element1 as the last child of element2
element1.appendChild(element2)

element1.insertBefore(element2, element3)

// Create a clone
const myElementClone = myElement.cloneNode()
myParentElement.appendChild(myElementClone)

// Replace the inner HTML
myElement.innerHTML = `
  <div>
    <h2>New content</h2>
    <p>beep boop beep boop</p>
  </div>
`

// Remove all child nodes
myElement.innerHTML = null

// Append to the inner HTML
myElement.innerHTML += `
  <a href="foo.html">continue reading...</a>
  <hr/>
`

const link = document.createElement('a')
const text = document.createTextNode('continue reading...')
const hr = document.createElement('hr')

link.href = 'foo.html'
link.appendChild(text)
myElement.appendChild(link)
myElement.appendChild(hr)

textContent
document.all()
getElementsByTagName()
getElementsByClassName()
getElementsByName()
getElementById()

querySelector()
querySelectorAll()
addEventListener()
removeEventListener()
appendChild()
removeChild()
replaceChild(new,old)
cloneNode([deep])
ele.insertBefore(new, before)
el.insertBefore(newEl, el.childNodes[0] || null);


function bringToTop() {
  const elements = document.all;
  const lastElement = elements[elements.length - 1];

  lastElement.remove();

  elements[0].prepend(lastElement);
}



const ul = document.getElementsByTagName('ul')[0];

ul.addEventListener('click', e => e.target.innerHTML = 'I have been clicked.');

function toggleButton() {

  const button = document.getElementsByTagName('button')[0];

  const disableCallback = () => {
    button.removeAttribute('disabled');
    button.innerHTML = 'Click Me!';
    document.removeEventListener('click', disableCallback);
    document.addEventListener('click', enableCallback);
  }

  const enableCallback = () => {
    button.setAttribute('disabled', '');
    button.innerHTML = 'Don\'t Click Me!';

    document.removeEventListener('click', enableCallback);
    document.addEventListener('click', disableCallback);
  }

  document.addEventListener('click', enableCallback);
  button.addEventListener('click', e => e.stopPropagation());
}