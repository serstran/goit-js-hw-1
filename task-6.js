let message, messageNum, total;
messageNum = Number(message);
total = 0;

while (message !== null) {
  message = prompt("Введите число:", "");
  messageNum = Number(message);
  total = total + messageNum;
}
alert("Общая сумма чисел равна " + total);
