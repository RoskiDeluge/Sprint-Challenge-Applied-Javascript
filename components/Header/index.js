// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const header = document.createElement('div');
  const headerDate = document.createElement('span');
  const headerMast = document.createElement('h1');
  const headerTemp = document.createElement('span');
  
  header.appendChild(headerDate);
  header.appendChild(headerMast);
  header.appendChild(headerTemp);

  header.classList.add('header');
  headerDate.classList.add('date');
  headerTemp.classList.add('temp');

  headerDate.textContent = "MARCH 28, 2019";
  headerMast.textContent = "Lambda Times";
  headerTemp.textContent = "98°";

  return header
}

const parent = document.querySelector('.header-container');

parent.appendChild(Header());
