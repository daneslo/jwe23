let temperature = 24;
let display = document.querySelector("#display");

console.log(temperature);
//Temperatur gleich in HTML AUSGEBEN (BEIM LADEN)
document.querySelector('#display').innerHTML = temperature;

let changeTemperature = function (direction) {
    if (direction == "up") {
        temperature++;
    }
    if (direction == "down") {
        temperature--;
    }
    console.log(temperature);
//Aktuelle Temperature in HTML AUSGEBEN
    document.querySelector('#display').innerHTML = temperature;
};
