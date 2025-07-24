/*
   <nav>
        <ul>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <li><a href="#section3">Section 3</a></li>
            <li><a href="#section4">Section 4</a></li>
            <li><a href="#section5">Section 5</a></li>
            <li><a href="#section6">Section 6</a></li>

        </ul>
    </nav>
*/

/*

for (let i = 1; i < 7; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#section${i}`;
  a.innerText = `section ${i}`;
  li.appendChild(a);
  ul.appendChild(li);
}
*/


const ul = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

sections.forEach(sec => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${sec.id}`;
  a.textContent = sec.getAttribute("data-nav").trim();
  li.appendChild(a);
  ul.appendChild(li);
});

