const btnAdd = document.querySelector('#btn');
const inputText = document.querySelector('#input-text');
const inputNumber = document.querySelector('#input-number');
const select = document.querySelector('#select');
const listIncomes = document.querySelector('.incomes-list');
const listExpenses = document.querySelector('.expenses-list');
const balance = document.querySelector('.amount');

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

  list.appendChild(item);
  item.appendChild(itemText);
  itemText.textContent = valueText;

  item.appendChild(itemNumber);
  itemNumber.textContent = `${valueNum} €`;

  item.appendChild(date);
  date.textContent = getDate();
};

//click on button to add item to some list
btnAdd.addEventListener('click', (e) => {
  e.preventDefault();

  let inputTextValue = inputText.value;
  let inputNumValue = inputNumber.value;
  let selectValue = select.value;

  // let total = arrayValue.reduce((sum, current) => sum + current, 0);
  // console.log(total);

  let arrayValue = [];
  let count = 0;
  if (selectValue === 'income') {
    addItem(listIncomes, inputTextValue, inputNumValue);

    arrayValue.push(Number(inputNumValue));
    for (let i = 0; i < arrayValue.length; i++) {
      count += arrayValue[i];
      console.log(count);
    }


  } else if(selectValue === 'expense') {
    addItem(listExpenses, inputTextValue, inputNumValue);
  } else {
    alert('Select please some option in field: --Select--')
  }
});

