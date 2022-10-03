const testDiv = document.querySelector(".test");

const addPara = document.createElement("p");
addPara.classList.add("title")
addPara.innerHTML = "Counter";
testDiv.append(addPara);

