// Global
var arrNum = [];
function getElement(id){
    return document.querySelector(id);
}

// Tạo mảng số nguyên
function arrayMain(){
    // Lấy giá trị từ form
    var num = Number(getElement("#addNumber").value);
    arrNum.push(num);
    // console.log(num);
    getElement("#txtArray").innerHTML = arrNum;
}

// Câu 1
function findSum(){
    // Biến tổng
    var sum = 0;
    for (var i = 0; i < arrNum.length; i++){
        if(arrNum[i] > 0){
            sum += arrNum[i];
        }
    }
    // console.log(sum);
    getElement("#txtSum").innerHTML = "Tổng số dương: " + sum;
}

// Câu 2
function countNum(){
    // Biến đếm
    var count = 0;
    for (var i = 0; i < arrNum.length; i++){
        if (arrNum[i] > 0){
            count++;
        }
    }
    // console.log(count);
    getElement("#txtCount").innerHTML = "Số dương: " + count;
}

// Câu 3
function findMin(){
    // Biến giá trị nhỏ nhất
    var smallest = arrNum[0];
    for (var i = 0; i < arrNum.length; i++){
        if (arrNum[i] < smallest){
            smallest = arrNum[i];
        }
    }
    // console.log(smallest);
    getElement("#txtMin").innerHTML = smallest; 
}

// Câu 4
function findPositiveMin(){
    // Tạo mảng mới chứa số dương
    var newArrNum = [];
    for (var i = 0; i < arrNum.length; i++){
        if (arrNum[i] >= 0){
            newArrNum.push(arrNum[i]);
        }
    }
    // console.log(newArrNum);

    // Tìm số dương nhỏ nhất trong mảng mới
    // Biến giá trị nhỏ nhất
    var min = newArrNum[0];
    for (var i = 0; i < newArrNum.length; i++){
        if (newArrNum[i] < min){
            min = newArrNum[i];
        }
    }
    // console.log(min);
    getElement("#txtPositiveMin").innerHTML = "Số dương nhỏ nhất: " + min; 
}

// Câu 5
function findEven(){
    // Biến giá trị chẵn
    var even = 0;
    for (var i = 0; i <= arrNum.length; i++){
        if (arrNum[i] % 2 == 0){
            even = arrNum[i];
        }
        else{
            even = -1;
        }
    }
    // console.log(even);
    getElement("#txtEven").innerHTML = "Số chẵn cuối cùng: " + even; 
}

// Câu 6
function swap(){
    // Biến vị trí thứ 1
    var firstIndex = getElement("#firstIndex").value;
    // Biến vị trí thứ 2
    var secondIndex = getElement("#secondIndex").value;
    // console.log(firstIndex, secondIndex);
    
    // Biến lưu tạm thời của giá trị tại vị trí 1
    var temp = arrNum[firstIndex];
    arrNum[firstIndex] = arrNum[secondIndex];
    arrNum[secondIndex] = temp;

    // console.log(arrNum[firstIndex], arrNum[secondIndex]);

    getElement("#txtSwap").innerHTML = "Mảng sau khi đổi: " + arrNum; 
}

// Câu 7
function sortIncreasing(){
    // Tạo mảng mới
    var newArr = [];
    for (var i = 0; i < arrNum.length; i++){
        newArr.push(arrNum[i]);
    }
    // console.log(newArr);

    // Sắp xếp tăng dần cho mảng mới
    for (var i = 0; i < newArr.length; i++){
        for (var j = 0; j < newArr.length - 1; j++){
            if (newArr[j] > newArr[j+1]){
                // Biến lưu tạm thời của giá trị tại vị trí j
                var temp = newArr[j];
                newArr[j] = newArr[j+1];
                newArr[j+1] = temp;
            }
        }
    }
    // console.log(newArr);
    getElement("#txtIncreasing").innerHTML = "Sắp xếp: " + newArr;
}

// Câu 8
// Hàm in số nguyên tố
function findPrime(){
    // Biến giá trị nguyên tố
    var prime;
    for (var i = 0; i < arrNum.length; i++){
        if (isPrime(arrNum[i])){
            prime = arrNum[i];
            break;
        }
        else{
            prime = -1;
        }
    }
    // console.log(prime);
    getElement("#txtPrime").innerHTML = prime;
}

// Hàm xác định số n là số nguyên tố
function isPrime(n){
    if (n < 2){
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++){
        if (n % i == 0){
            return false;
        }
        return true;
    }
}

// Câu 9
// Biến lưu mảng số thực
var arrInt = [];
// Hàm tạo mảng số thực
function addIntegerArray(){
    // Biến lấy giá trị từ form
    var number = Number(getElement("#addInteger").value);
    arrInt.push(number);
    // console.log(arrInt);
    getElement("#txtAddInt").innerHTML = arrInt;
}

// Hàm đếm số lượng số nguyên có trong mảng
function countInteger(){
    // Biến đếm
    var count = 0;
    for (var i = 0; i < arrInt.length; i++){
        if (Number.isInteger(arrInt[i])){
            count++;
        }
    }
    getElement("#txtCountInt").innerHTML = "Số nguyên: " + count;
}

// Câu 10
function comparison(){
    // Biến giá trị số dương
    var positive = 0;
    // Biến giá trị số âm
    var negative = 0;

    for (var i = 0; i < arrNum.length; i++){
        if(arrNum[i] > 0){
            positive++;
        }
        if (arrNum[i] < 0){
            negative++;
        }
    }
    if (positive < negative){
        getElement("#txtComparison").innerHTML = "Số dương < Số âm";
    }
    else if (positive > negative){
        getElement("#txtComparison").innerHTML = "Số dương > Số âm";
    }
    else if (positive = negative){
        getElement("#txtComparison").innerHTML = "Số dương = Số âm";
    }
}