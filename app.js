'use strict';

<<<<<<< HEAD
const hours = ['6am: ','7am: ','8am: ','9am: ','10am: ', '11am: ', '12pm: ',
    '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8am: ', 'Total: '];

//Stores
const airport = {
    id: 'airport',
    minCust: 23,
    maxCust: 65,
    cookiesAvg: 6.3,
    cookiesHour: [],

    custCount : function () {
        const randCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1));
        return randCust;
    }
};

const pioneer = {
    id: 'pioneer',
    minCust: 3,
    maxCust: 24,
    cookiesAvg: 1.2,
    cookiesHour: [],

    custCount : function () {
        const randCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1));
        return randCust;
    }
};

const powells = {
    id: 'powells',
    minCust: 11,
    maxCust: 38,
    cookiesAvg: 3.7,
    cookiesHour: [],

    custCount : function () {
        const randCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1));
        return randCust;
    }
};

const stJohns = {
    id: 'stJohns',
    minCust: 20,
    maxCust: 38,
    cookiesAvg: 2.3,
    cookiesHour: [],

    custCount : function () {
        const randCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1));
        return randCust;
    }
};

const waterfront = {
    id: 'waterfront',
    minCust: 2,
    maxCust: 16,
    cookiesAvg: 4.6,
    cookiesHour: [],

    custCount : function () {
        const randCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1));
        return randCust;
    }
};

//Calculate Day Sales
daySales(airport);
daySales(pioneer);
daySales(powells);
daySales(stJohns);
daySales(waterfront);

printList(airport);
printList(pioneer);
printList(powells);
printList(stJohns);
printList(waterfront);


function daySales(store){
    for (let i = 0; i < 15; i++){
        const cookiesSale = Math.floor(store.cookiesAvg * store.custCount());
        store.cookiesHour.push(cookiesSale);
    }
    store.cookiesHour.push(total(store));
    console.log(store.id + store.cookiesHour);
}

function printList(store){
    for (let i = 0; i < store.cookiesHour.length; i++){
        const printHour = document.createElement('li');
        printHour.textContent = hours[i] + store.cookiesHour[i] + ' cookies';
        const storeList = document.getElementById(store.id);
        storeList.appendChild(printHour);
    }
}

function total(store){
    const total = store.cookiesHour.reduce(function (a,b){
        return a + b;
    }, 0);
    return total;
};
=======
//construct store object
function Stand (id,title,min,max,avg){
    this.id = id;
    this.title = title;
    this.minCust = min;
    this.maxCust = max;
    this.cookiesAvg = avg;
    this.daySales = [];
    this.totalSales = 0;
};

Stand.prototype.custCount = function () {
    for (let i = 0; i < 15; i++){
        const randCust = Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
        const cookiesHour = Math.round(this.cookiesAvg * randCust);
        this.daySales.push(cookiesHour);
        this.totalSales += cookiesHour;
    }
    console.log(this.daySales);
    console.log(`Hourly sales for ${this.id}: ${this.totalSales}`);
    this.daySales.push(this.totalSales);
};

Stand.prototype.render = function () {
    this.custCount();
    const newRow = document.createElement('tr');

    const rowHead = document.createElement('th');
    rowHead.textContent = `${this.title}`;
    newRow.appendChild(rowHead);

    for (let i = 0; i < this.daySales.length; i++){
        const newTd = document.createElement('td');
        newTd.textContent = this.daySales[i];
        newRow.appendChild(newTd);

        hourlyTotals[i + 1] += this.daySales[i];
    }
    return newRow;
};

Stand.prototype.submit = function (){
    const tBody = document.querySelector('#sales');
    tBody.appendChild(this.render());

    const tFoot = document.querySelectorAll('#footer tr td');
    for (let i = 0; i < tFoot.length; i++){
        tFoot[i].textContent = hourlyTotals[i + 1];
    }
};

// make each instance
const airport = new Stand('airport', 'PDX Airport', 23, 65, 6.3);
const pioneer = new Stand('pioneer', 'Pioneer Place', 3, 24, 1.2);
const powells = new Stand('powells', 'Powell\'s', 11, 38, 3.7);
const stJohns = new Stand('stJohns', 'St. John\'s', 20, 38, 2.3);
const waterfront = new Stand('waterfront', 'The Waterfront', 2, 16, 4.6);

const stands = [airport, pioneer, powells, stJohns, waterfront];
const hourlyTotals = ['Hourly Totals:',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const hours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am', '11:00 am', '12:00 pm',
    '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', 'Daily Location Total:'];

//print current stands
buildTable();

//event
const form = document.querySelector('form');

form.addEventListener('submit', function (){
    event.preventDefault();

    const minCust = parseInt(this.minCust.value);
    const maxCust = parseInt(this.maxCust.value);

    if (maxCust > minCust){
        const title = this.title.value;
        const cookiesAvg = this.cookiesAvg.value;
        const id = normalize(this.title.value);

        const newStand = new Stand (id,title,minCust,maxCust,cookiesAvg);
        stands.push(newStand);
        newStand.submit();
    } else {
        alert('Please enter a higher Max Customers than Min Customers!');
        return false;
    }
});

//functions
function tableHead() {
    (document.querySelector('#header')).appendChild(document.createElement('tr'));
    const tableId = document.querySelector('#header tr');
    const newTh = document.createElement('th');
    tableId.appendChild(newTh);
    for (let i = 0; i < hours.length; i++){
        const newTh = document.createElement('th');
        newTh.textContent = hours[i];
        tableId.appendChild(newTh);
    }
};

function tableFoot() {
    (document.querySelector('#footer')).appendChild(document.createElement('tr'));
    const tFoot = document.querySelector('#footer tr');

    const rowHead = document.createElement('th');
    rowHead.textContent = hourlyTotals[0];
    tFoot.appendChild(rowHead);    // const rowHead = document.createElement('th');
    rowHead.textContent = hourlyTotals[0];
    tFoot.appendChild(rowHead);

    for (let i = 1; i < hourlyTotals.length; i++){
        const newTd = document.createElement('td');
        newTd.textContent = hourlyTotals[i];
        tFoot.appendChild(newTd);
    }
};

function buildTable() {
    tableHead();
    const tBody = document.querySelector('#sales');

    for (let i = 0; i < stands.length; i++){
        tBody.appendChild(stands[i].render());
    };

    tableFoot();
};

function normalize(string) {
    for(let i = 0; i <= string.length; i++) {
        string = string.replace(' ', '');
        string = string.replace('.', '');
        string = string.replace('\'', '');
        string = string.replace('"', '');
        string = string.toLowerCase();
    }
    return string;
};
>>>>>>> 3573839cda1360afa6357fe6aa0b5af8eb26bd60
