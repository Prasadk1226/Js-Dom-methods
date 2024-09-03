let x = document.getElementById("h");
x.innerText = "Hello";

// getElementById call the element with particular Id

let y = document.getElementsByClassName("c");
y[0].innerHTML = "This is paragraph 1";
y[1].innerText = "This is paragraph 2";
y[2].innerText = "This is paragraph 3";
y[3].innerHTML = "This is paragraph 4";

// getElementsByClassName we can call the elements with all the class names using index values.

let z = document.getElementsByTagName("h4");
z[0].innerText = "This is by calling Tag Name.";

// getElementByTagName we call the elements using tag names we call the elements using tags

let xy = document.querySelector("p");
xy.innerText = "Hello";

let xyz = document.querySelectorAll(".emp");
xyz[1].innerHTML = "Hello1244";

// querySelector selects the first element that it meets
// querySelectorAll selects all the elements with the given class name.

let divCon = document.createElement("div");
divCon.style.height = "500px";
divCon.style.width = "300px";
divCon.style.border = "2px solid red";
divCon.style.borderRadius = "20px 60px";
divCon.style.backgroundColor = "rgb(252,126,70)";
document.body.appendChild(divCon);


let divCon1 = document.createElement("img");
divCon1.setAttribute("src", "pic.png");
divCon1.style.height = "150px";
divCon1.style.width = "150px";
divCon1.style.Se
// divCon1.style.backgroundColor = "lightGreen"
// divCon1.style.borderRadius = "250px"
divCon1.style.padding = "30px 23%";
// divCon1.style.border = "2px solid red"
document.body.appendChild(divCon1);
divCon.appendChild(divCon1);

let name1 = document.createElement("h3");
name1.innerText = "Name : Kancheti Prasad";
name1.style.padding = "2px 40px";
name1.style.marginTop = "-10px"

divCon.appendChild(name1);
let com = document.createElement("h3");
com.innerText = "Company : 10K Coders";
com.style.padding = "2px 40px";
divCon.appendChild(com);

let mobil = document.createElement("h3");
mobil.innerText = "Mobile : +91 7660940155";
mobil.style.padding = "2px 40px";
divCon.appendChild(mobil);

let batch = document.createElement("h3");
batch.innerText = "Batch : 14r";
batch.style.padding = "2px 40px";
divCon.appendChild(batch);




let add = document.createElement("div")
add.style.height= "100px"
add.style.width= "300px"
add.style.backgroundColor = "orange"
add.style.borderRadius = " 0px 0px 0px 30px"
add.style.marginTop = "-5px"
divCon.appendChild(add);

let address = document.createElement("p");
address.innerText =
  "Address : metro station, mig 214, Rd Number 1, behind kphb, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072";
address.style.padding = "15px 20px";
add.appendChild(address);



// ---------------------------------------------------------------------
// _______________________Vinayaka Chavithi_____________________________
// ---------------------------------------------------------------------
let ganeshCon = document.createElement("div")
// ganeshCon.setAttribute("height","200px")
// ganeshCon.setAttribute("width","500px")
ganeshCon.style.border = "3px solid rgb(229,203,106)"
ganeshCon.style.backgroundColor = "rgb(107,181,48)"
ganeshCon.style.height = "400px"
ganeshCon.style.width = "600px"
ganeshCon.style.boxShadow = "0px 0px 20px rgb(234,136,168)"





document.body.appendChild(ganeshCon)


let ganesh = document.createElement("img")
ganesh.setAttribute("src","ganesh.png")
ganesh.setAttribute("height","300")
ganesh.setAttribute("width","300")
ganesh.style.padding = "20px 150px"

ganeshCon.appendChild(ganesh)

let wish = document.createElement("h4")
wish.innerText = "వినాయక చవితి శుభాకాంక్షలు"
wish.style.color = "white"
wish.style.textAlign = "center"
wish.style.boxShadow = "0px 0px 20px rgb(234,156,16)"
wish.style.textShadow = "0px 0px 10px red"

ganeshCon.appendChild(wish)






