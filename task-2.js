let total;
let ordered;

total = 25;
ordered = -1;

if (ordered >= 1) {
  if (total >= ordered) {
    console.log("Заказ оформлен, с вами свяжется менеджер");
  } else {
    console.log("На складе недостаточно твоаров!");
  }
} else {
  console.log("Неверно введенное значение ordered");
}
