function newItem() {
  let input = document.getElementById("input");
  let ul = document.getElementById("ul");
  let li = document.createElement("li");


  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  // document.getElementById("input").value =  "";
  input.value = "";
  li.onclick = removeItem;
}

document.body.onkeyup = function(event) {
  if (event.keyCode === 13) {
    newItem();
  }
};

let syncBtn = document.getElementById("syncBtn");
syncBtn.addEventListener("click", function(){

  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);  
  let values = ul.appendChild(li)
  let allValues = {}
  allValues[values]
  console.log(allValues);
  axios.post('https://jsonplaceholder.typicode.com/users', {
    allValues
  }).then(response => {
    console.log(response);
  });
})

function removeItem(event){
  event.target.parentElement.removeChild(event.target);
}