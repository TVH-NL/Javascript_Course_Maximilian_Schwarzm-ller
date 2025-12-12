const task3Element = document.getElementById("task-3");

// Assignment 1 Functie die een standaard begroeting laat zien
function greet() {
    alert("Hello There!");
}

// Assignment 1 Functie die iemand persoonlijk begroet
function greetUser(name) {
    alert(`Hi ${name}`);
}

// Assignment 2 Functie aanroepen
greetUser("Tim");

// Assignment 3 Voert greet uit wanneer op het element wordt geklikt
task3Element.addEventListener("click", greet);

// Assignment 4 Combineert drie strings tot één zin
function combine(str1, str2, str3) {
    const combineText = `${str1} ${str2} ${str3}`;

    return combineText;
}

// Assignment 5 Aanroepen van de strings door alert te gebruiken
const combinedString = combine("hello", "there", "!");

alert(combinedString);
