function main() {
  // BT1: Tính tổng tiền lương nhân viên

  var salaryBtn = document.querySelector(".btn-salary");

  function totalSalary() {
    var salary = document.getElementById("salary").value;
    var day = document.getElementById("day").value;
    var result = document.querySelector(".result");

    var total = salary * day;
    result.textContent = "Tổng tiền: " + total;
  }

  salaryBtn.addEventListener("click", totalSalary);

  // BT2: Tính giá trị trung bình

  var avgBtn = document.querySelector(".btn-avg");
  function avgNumber() {
    var firstNum = Number(document.querySelector("#number1").value);
    var secondNum = Number(document.querySelector("#number2").value);
    var thirdNum = Number(document.querySelector("#number3").value);
    var fourthNum = Number(document.querySelector("#number4").value);
    var fifthNum = Number(document.querySelector("#number5").value);

    var total = (firstNum + secondNum + thirdNum + fourthNum + fifthNum) / 5;

    var result = document.querySelector(".result-avg");

    result.textContent = "Số trung bình: " + total;
  }

  avgBtn.addEventListener("click", avgNumber);

  // BT3: Quy đổi tiền
  var moneyBtn = document.querySelector(".btn-money");
  function currency() {
    var USD_TO_VND = 23500;
    var money = document.querySelector("#money").value;
    var result = document.querySelector(".result-money");

    result.textContent = "Số tiền: " + (money * USD_TO_VND).toLocaleString();
  }

  moneyBtn.addEventListener("click", currency);

  // BT4: Tính chu vi và diện tích hình chữ nhật
  var rectangleBtn = document.querySelector(".btn-rectangle");

  function calculateRectangle() {
    var height = Number(document.querySelector("#height").value);
    var width = Number(document.querySelector("#width").value);
    var result = document.querySelector(".result-rectangle");

    var areaRectangle = height * width;
    var perimeterRectangle = (height + width) * 2;
    result.textContent =
      "Diện tích: " + areaRectangle + ", Chu vi: " + perimeterRectangle;
  }

  rectangleBtn.addEventListener("click", calculateRectangle);

  // BT5: Tính tổng 2 chữ số
  var totalBtn = document.querySelector(".btn-total");
  function totalNum() {
    var number = Number(document.querySelector("#num").value);
    var result = document.querySelector(".result-total");

    var digitNumber = number % 10;
    var dozenNumber = Math.floor((number % 100) / 10);
    var total = digitNumber + dozenNumber;

    result.textContent = "Tổng : " + total;
  }

  totalBtn.addEventListener("click", totalNum);
}

main();
