let country, uppCountry;

country = prompt("В какую страну необходима доставка:", "");

switch (country.toUpperCase()) {
  case "КИТАЙ":
    alert("Доставка в Китай будет стоить 100 кредитов");
    break;
  case "ЧИЛИ":
    alert("Доставка в Чили будет стоить 250 кредитов");
    break;
  case "АВСТРАЛИЯ":
    alert("Доставка в Австралию будет стоить 170 кредитов");
    break;
  case "ИНДИЯ":
    alert("Доставка в Индию будет стоить 80 кредитов");
    break;
  case "ЯМАЙКА":
    alert("Доставка в Ямайку будет стоить 120 кредитов");
    break;
  default:
    alert("В вашей стране доставка не доступна");
    break;
}
