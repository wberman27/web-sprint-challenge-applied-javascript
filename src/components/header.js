const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerDiv = document.createElement("div"); //create elements to the dom
  const dateSpan = document.createElement("span");
  const titleHeader = document.createElement("h1");
  const tempSpan = document.createElement("span");

  headerDiv.classList.add("header"); //add class names
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  titleHeader.textContent = `${title}`; //give text content
  dateSpan.textContent = `${date}`;
  tempSpan.textContent = `${temp}`;

  headerDiv.appendChild(dateSpan); //structure elements on dom
  headerDiv.appendChild(titleHeader);
  headerDiv.appendChild(tempSpan);

  return headerDiv;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const charDegree = String.fromCharCode(176);

  const header = document.querySelector(selector)
  header.appendChild(Header("Lambda Times", "Feb. 12th 2021", `16 ${charDegree}`)) //append header with Header function

}

//headerAppender(".header-container")

export { Header, headerAppender }
