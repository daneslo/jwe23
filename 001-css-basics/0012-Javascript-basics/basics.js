console.log("hier wird debugged!");


let myName = "Dani"; //string: Zeichchenkette  string
let myAge = 33; // Zahl (Ganzzahl)        int oder integer
let myWeight = 70.2;   //Zahl (DecimaZahl)   Float
let organicFood = false; //Boolsche Werte (falsch/wahr)  bool

let myList = ["Brot", "Milch", "Ketchup"]; //Liste/Array   array

let dynamischesHTML = '<p style="color:red;">Roter Text</p>';

let dynamischesHTML2= '<p style="color:green;">Grüner Text></p>';

document.body.innerHTML = dynamischesHTML;

let showMyListInConsole = function(){
    console.log(myList);
};
let getTextFromHtmlInput = function (){
    console.log(document.querySelector("input#newItem").value);
};





