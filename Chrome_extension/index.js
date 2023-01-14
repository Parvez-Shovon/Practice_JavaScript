let myLead = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
// localStorage.setItem("myLeads", "www.google.com");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLead = leadsFromLocalStorage;
  console.log(localStorage.getItem("myLeads"));
  render(myLead);
}

function render(leads) {
  let listItems = "";

  for (i = 0; i < leads.length; i++) {
    // listItems += `"<li><a target ='_blank' href ='" +myLead[i] +"'>" + myLead[i] +"</a></li>"`;
    listItems += `
      <li>
        <a target='_blank' href=' ${leads[i]}'>
          ${leads[i]}
        </a>
      </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
  myLead.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLead));
  inputEl.value = "";
  render(myLead);
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLead.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLead));
    render(myLead);
  });
});

deleteBtn.addEventListener("dblclick", function () {
  console.log("double click");
  localStorage.clear();
  myLead = [];
  render(myLead);
});

render();
