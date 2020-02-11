const btnAdd = document.querySelector('#btn');
const inputText = document.querySelector('#input-text');
const inputNumber = document.querySelector('#input-number');
const select = document.querySelector('#select');
const listIncomes = document.querySelector('.incomes-list');
const listExpenses = document.querySelector('.expenses-list');
const balance = document.querySelector('.amount');
const arrayIncome = [];
const arrayExpense = [];
let amountIncome = 0;
let amountExpense = 0;

// function to add items to some list
const addItem = (list) => {
  let inputTextValue = inputText.value;
  let inputNumValue = inputNumber.value;

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
  itemText.textContent = inputTextValue;

  item.appendChild(itemNumber);
  itemNumber.textContent = `${inputNumValue}`;

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
  let selectValue = select.value;

  if (selectValue === 'income') {
    addItem(listIncomes);
    getTotalBalance();
    // cleanInput();
  } else if(selectValue === 'expense') {
    addItem(listExpenses );
    getTotalBalance();
    // cleanInput()
  } else {
      alert('Select please some option in field: --Select--')
  }
});
// function to get total balance from both list
let getTotalBalance = () => {
  let selectValue = select.value;
  let inputNumValue = inputNumber.value;

  if (selectValue === 'income') {
    arrayIncome.push(Number(inputNumValue));
    amountIncome = arrayIncome.reduce((a, b) => a + b);
    balance.textContent = `${amountIncome - amountExpense}`;


  } else if (selectValue === 'expense') {
    arrayExpense.push(Number(inputNumValue));
    amountExpense = arrayExpense.reduce((a, b) => a + b);
    balance.textContent = `${amountIncome - amountExpense}`;
  }
};

