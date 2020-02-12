const btnAdd = document.querySelector('#btn');
const inputText = document.querySelector('#input-text');
const inputNumber = document.querySelector('#input-number');
const select = document.querySelector('#select');
const listIncomes = document.querySelector('.incomes-list');
const listExpenses = document.querySelector('.expenses-list');
const balance = document.querySelector('.amount');
const btnLoadLocStor = document.querySelector('.btn-storage_load');
const btnCleanLocStor = document.querySelector('.btn-storage_clean');
const btnAddToLocStor = document.querySelector('.btn-storage_add');
const arrayIncome = [];
const arrayExpense = [];
let amountIncome = 0;
let amountExpense = 0;
let storage = localStorage;

// function to add items to some list
const addItem = (list, valueText, valueNum) => {
  const item = document.createElement('li');
  item.setAttribute('class', 'item');
  const itemText = document.createElement('div');
  itemText.setAttribute('class', 'item__text');
  const itemNumber = document.createElement('div');
  itemNumber.setAttribute('class', 'item__num');
  const date = document.createElement('div');
  date.setAttribute('class', 'item__date');
  // const btnDelete = document.createElement('button');
  // btnDelete.setAttribute('class', 'btn-delete');

  list.appendChild(item);
  item.appendChild(itemText);
  itemText.textContent = valueText;

  item.appendChild(itemNumber);
  itemNumber.textContent = `${valueNum} €`;

  item.appendChild(date);
  date.textContent = getDate();

  // item.appendChild(btnDelete);
  // btnDelete.textContent = 'Delete';

  // btnDelete.addEventListener('click', () => {
  //
  //   list.removeChild(item);
  // })
};

//click on button to add item to some list
btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  let inputTextValue = inputText.value;
  let inputNumValue = inputNumber.value;
  let selectValue = select.value;

  if (selectValue === 'income') {
    addItem(listIncomes, inputTextValue, inputNumValue);
    getTotalBalance(selectValue, inputNumValue);

  } else if(selectValue === 'expense') {
    addItem(listExpenses, inputTextValue, inputNumValue);
    getTotalBalance(selectValue, inputNumValue);

  } else {
      alert('Select please some option in field: --Select--')
  }
});


// function to get total balance from both list
let getTotalBalance = (valInputSelect, valInputNum) => {

  if (valInputSelect === 'income') {
    arrayIncome.push(Number(valInputNum));
    amountIncome = arrayIncome.reduce((a, b) => a + b);
    balance.textContent = `${amountIncome - amountExpense}`;

  } else if (valInputSelect === 'expense') {
    arrayExpense.push(Number(valInputNum));
    amountExpense = arrayExpense.reduce((a, b) => a + b);
    balance.textContent = `${amountIncome - amountExpense}`;
  }
};




// if (storage.obj ) {
//   let text = JSON.parse(storage.obj).itemText;
//   let num = JSON.parse(storage.obj).itemNumber;
//   addItem(listIncomes, text, num);
// }

btnAddToLocStor.addEventListener('click', (e) => {
  e.preventDefault();
  let selectValue = select.value;
  if (selectValue === 'income') {
    storage.objIncomeToStore = JSON.stringify({
      itemText: inputText.value,
      itemNumber: inputNumber.value
    });

  } else if (selectValue === 'expense') {
      storage.objExpenseToStore = JSON.stringify({
        itemText: inputText.value,
        itemNumber: inputNumber.value
      });
  }

});


btnLoadLocStor.addEventListener('click', (e) => {
  e.preventDefault();

  const objIncomeFromStore = JSON.parse(storage.objIncomeToStore);
  let text = objIncomeFromStore.itemText;
  let num = objIncomeFromStore.itemNumber;

  addItem(listIncomes, text, num);

  arrayIncome.push(Number(num));
  amountIncome = arrayIncome.reduce((a, b) => a + b);
  balance.textContent = `${amountIncome}`;

  const objExpenseFromStore = JSON.parse(storage.objExpenseToStore);
  let text2 = objExpenseFromStore.itemText;
  let num2 = objExpenseFromStore.itemNumber;

  addItem(listExpenses, text2, num2);

  arrayIncome.push(Number(num2));
  amountIncome = arrayIncome.reduce((a, b) => a + b);
  balance.textContent = `${amountExpense}`;


});

btnCleanLocStor.addEventListener('click', (e) => {
  e.preventDefault();
  storage.removeItem('objIncomeToStore');
  storage.removeItem('objExpenseToStore');
});









// localStorage.setItem('objStorage', JSON.stringify(obj));
// console.log(localStorage);
// let objFromLocalStorage = localStorage.getItem('objStorage');
// objFromLocalStorage = JSON.parse(objFromLocalStorage);
// console.log(objFromLocalStorage);


// localStorage.setItem('data', 5);
// let getLocalStorage = localStorage.getItem('data');
// console.log(getLocalStorage);
//
// let array = [2, 3, 4, 5];
// localStorage.setItem('array', JSON.stringify(array));
// let arrayFromStorage = localStorage.getItem('array');
// arrayFromStorage = JSON.parse(arrayFromStorage);
// console.log(arrayFromStorage);






