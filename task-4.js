let credits;
let pricePerDroid;
let numMessage;
let totPrice;
let balCred;

credits = 23580;
pricePerDroid = 3000;
message = prompt("Введи количество дроидов:", "1");
numMessage = Number(message);

if (message === null) {
  alert("Отменено пользователем!");
} else {
  totPrice = numMessage * pricePerDroid;
  balCred = credits - totPrice;
  if (totPrice <= credits) {
    alert(
      "Вы купили " +
        numMessage +
        " дроидов, на счету осталось " +
        balCred +
        " кредитов."
    );
  } else {
    alert("Недостаточно средств на счету!");
  }
}
