let myLead = ["fsdsdf", "fsdfasfa", "fadsff"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLead.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
  let listItems = "";
  for (i = 0; i < myLead.length; i++) {
    // listItems += `"<li><a target ='_blank' href ='" +myLead[i] +"'>" + myLead[i] +"</a></li>"`;
    listItems += `
      <li>
        <a target='_blank' href=' ${myLead[i]}'>
          ${myLead[i]}
        </a>
      </li>
    `;
    console.log(myLead);
  }
  ulEl.innerHTML = listItems;
}
renderLeads();
