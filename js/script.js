// Elementi in pagina
const ulGroceryList = document.querySelector("ul");

// Lista della spesa
const groceryList = ["pane", "latte", "pasta", "uova", "carne", "pesce", "verdura", "frutta", "gelati", "snacks"];
console.log(groceryList);

// * ciclo For con manipolazione del DOM
// for (let i = 0; i < groceryList.length; i++) {
//     const liGroceryList = document.createElement("li");
//     liGroceryList.append(groceryList[i]);
//     ulGroceryList.appendChild(liGroceryList);
// }

// * ciclo For con template literal
// let liGroceryList = "";

// for (let i = 0; i < groceryList.length; i++) {
//     liGroceryList += `<li>${(groceryList[i])}</li>`;
// }

// ulGroceryList.innerHTML = liGroceryList;

// * ciclo While con manipolazione del DOM
let i = 0;

while (i < groceryList.length - 1) {
    const liGroceryList = document.createElement("li");
    liGroceryList.append(groceryList[i]);
    ulGroceryList.appendChild(liGroceryList);

    i++;
}

// * ciclo While con template literal
// let liGroceryList = "";

// while (i < groceryList.length - 1) {
//     liGroceryList += `<li>${(groceryList[i])}</li>`;

//     i++;
// }

// ulGroceryList.innerHTML = liGroceryList;
