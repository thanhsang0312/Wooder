// PART 1.1:
// **Exercise 1:
// Nhập vào 1 số bất kỳ, kiểm tra số đó có phải là số chẵn hay không? Kết quả trả về kiểu
// true / false
function ex1() {
    let myNumb = prompt("Please enter number: ");
    return myNumb % 2 === 0
}
// document.write(ex1()); 

// **Exercise 2:
// Viết hàm kiểm tra số đó có chia hết cho 3 hay không?
function ex2() {
    let myNumb = prompt("Please enter number: ");
    if (myNumb % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// document.write(ex2());

// ----------------------------------------------
// **Exercise 3:
// Khai báo 2 số a = 4, b = 12, in kết quả bằng console. Tính tổng 2 số a và b? Lấy b chia a,
// lấy phần dư ? Lấy b chia a, lấy phần nguyên ?

function ex3(a, b) {
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`a + b = ${a + b}`);
    console.log(`a % b = ${a % b}`);
    console.log(`a / b = ${a / b}`);
}
// ex3(4, 12);

// ----------------------------------------------
// **Exercise 4:
// In ra họ và tên của mình bằng cách khai báo 1 biến chứa họ và biến chứa tên, có
// khoảng trắng giữa họ và tên của bạn.

function ex4() {
    let fname = 'Thanh Sang';
    let lname = 'Cao';
    return lname + " " + fname;
}
// document.write(ex4());

// ----------------------------------------------
// **Exercise 5:
// Viết hàm so sánh 2 số nguyên. nếu a > b thì trả về 1, nếu a < b thì trả về -1, nếu a == b thì
// trả về 0.

function ex5(a, b) {
    if (a > b) return 1
    if (a < b) return -1
    return 0
}
// document.write(ex5(5, 10));

// ----------------------------------------------
// **Exercise 6:
// Khai báo một chuỗi ký tự là “happy news year”
// a.In ra tổng số ký tự có trong chuỗi(gợi ý dùng length)
// b.In ra vị trí của chữ “y” từ đầu xuống(gợi ý dùng indexOf)
// c.In ra vị trí của chữ “y” từ dưới lên(gợi ý dùng lastIndexOf)
// d.Dùng replace để thay thế từ “happy” bằng một từ tuỳ ý bạn.

function ex6(myString) {
    // (a)
    var i = 0;
    for (i; i < myString.length; i++) {
    }
    document.write(`Tổng số ký tự có trong chuỗi: ${i}<br>`);
    // (b)
    document.write(`Index ký tự "y" tính từ đầu: ${myString.indexOf("y")}<br>`);
    // (c)
    document.write(`Index ký tự "y" tính từ cuối: ${myString.lastIndexOf("y")}<br>`);
    // (d)
    document.write(`Replace "happy": ${myString.replace("happy", "sad")}<br>`);
}
// ex6("happy new year");

// ----------------------------------------------
// PART 1.2:
// **Exercise 1:
// Viết hàm nhập vào điểm của một học sinh và in ra kết quả tương ứng nếu:
// a.Điểm lớn hơn 8 thì in ra Excellence
// b.Điểm lớn hơn 7 đến 8 thì in ra Good
// c.Điểm từ 4 đến bằng 7 thì in ra Not Good
// d.Nhỏ hơn 4 thì in ra Bad

function exe1() {
    let myPoints = prompt("Enter your points: ");
    if (myPoints > 8) {
        document.write("Excellence!");
    }
    else if (myPoints > 7) {
        document.write("Good!");
    }
    else if (myPoints > 4) {
        document.write("Not Good!");
    }
    else {
        document.write("Bad!!!");
    }
}
// exe1();

// ----------------------------------------------
// **Exercise 2:
// Viết hàm nhập vào 1 chuỗi và chuẩn hóa chuỗi theo định dạng chữ cái đầu tiên của
// chuỗi phải được in hoa.Các chữ còn lại viết thường.Ví dụ: HỌC lập TRình JavAScript thì
// phải chuyển thành: Học Lập Trình Javascript

function exe2() {
    let myString = prompt("Please enter a string: ");
    myString = myString.toLowerCase();
    let myArr = myString.split(" ");
    for (var i = 0; i < myArr.length; i++) {
        myArr[i] = myArr[i].charAt(0).toUpperCase() + myArr[i].substring(1);
    }
    var result = myArr.join(" ");
    return result;
}

// document.write(exe2());

// ----------------------------------------------
// **Exercise 3:
// Viết hàm định dạng số giây luôn có 2 chữ số.Ví dụ: Nếu người dùng nhập vào: 12 kết
// quả là 12. nếu người dùng nhập vào: 5 kết quả là 05

//padstart()
function exe3() {
    let a = prompt("Please enter number: ");
    let result = ("0" + a).slice(-2);
    document.write(result);
}
// exe3();  

// ----------------------------------------------
// **Excersice 4:
// Viết hàm trích xuất domain như sau.Ví dụ: Nếu là cfdcircle @gmail.com kết quả là
// gmail.com, nếu là learning @cfdcircle.vn kết quả là cfdcircle.vn

// val
function exe4() {
    let myString = prompt("Please enter string: ");
    let myArr = myString.split("@");
    document.write(myArr[myArr.length - 1]);
}
// exe4();

// ----------------------------------------------
// **Exercise 5:
// Viết hàm nhập vào 1 chuỗi và chuyển đổi chuỗi thành path URL.Ví dụ: "javascript cho
// nguoi moi bat dau" kết quả là javascript-cho-nguoi-moi-bat-dau
// join

function exe5() {
    let myString = prompt("Please enter a string: ");
    document.write(myString.toLowerCase().replaceAll(" ", "-"));
}
// exe5();

// PART 2.1:

// 1. Chạy vòng lặp với i = 0, i < 10, i++. Tính tổng giá trị mỗi lần i tăng lên 1 (gợi ý dùng vòng lặp for hoặc while)

function sum() {
    let sum = 0;
    let i = 0;
    while (i < 10) {
        sum += i;
        i++;
    }
    return sum;
}
// document.write(sum());

// 2. In ra số chẵn từ 0 - 20. (dùng vòng lặp while)?
function printNumber() {
    let i = 0;
    while (i <= 20) {
        if (i % 2 === 0) {
            document.write(i + " | ");
        }
        i++;
    }
}
// printNumber();

// 3. Tạo 1 mảng bất kỳ với 5 phần tử, thực hiện xoá 2 phần tử cuối, sau đó in ra mảng kết
// quả(gợi ý dùng: splice) ?

function spliceArray(myArray) {
    document.write(myArray.splice(-2));
}

let myArray = [
    'Cao',
    'Thanh',
    'Sang',
    'Dep',
    'Trai'
];
// spliceArray(myArray);
// document.write(`<br>${myArray}`);

// 4. Tạo 1 mảng gồm tên các khoá học của CFD Circle. In ra số lượng các khoá học? In ra
// chỉ số index của mảng ? In ra tên khoá học ở vị trí index thứ 2. In ra chuỗi tên các khoá
// học cách nhau bằng dấu phẩy ? Push thêm 2 phần tử bất kỳ vào mảng đã tạo.

let courseCFD = [
    'Front-end Newbie',
    'Web Responsive',
    'ReactJS Master'
];

function printArray(course) {
    document.write(`Number of courses: ${course.length}<br>`);
    document.write(`Index of FE Newbie: ${course.indexOf("Front-end Newbie")}<br>`);
    document.write(`Index of Web Responsive: ${course.indexOf("Web Responsive")}<br>`);
    document.write(`Index of ReactJS Master: ${course.indexOf("ReactJS Master")}<br>`);
    document.write(`Index 2: ${course[2]}<br>`);
    document.write(`toString: ${course.toString()}<br>`);
    course.push("React Native", "NodeJS") //push 2 element
    document.write(`Push 2 element in the end of array: ${course}<br>`);
}
// printArray(courseCFD);

// 5. Tạo 1 mảng gồm các phần tử là kiểu số nguyên dương, tính tổng các phần tử có
// trong mảng ?

function sumOfInteger(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) return; //Kiểm tra các phần tử là số nguyên dương
        else {
            sum += arr[i];
        }
    }
    return sum;
}
let arrInt = [100, 120, 20, 20, 30];
// document.write(sumOfInteger(arrInt));

// PART 2.2
// 1. Viết hàm random một số ngẫu nhiên từ 1 đến n (n là tham số bất kỳ được truyền vào)?

function randNumber(n) {
    return Math.trunc(Math.random() * n + 1);
}
// document.write(randNumber(5));

// 2. Hiển thị một alert thông báo với nội dung bất kỳ sau khi vào trang web sau 4 giây?

// setTimeout(function () {
//     alert('Helloo I\'m BiggEggss');
// }, 4000);

// 3. Lấy thời gian hệ thống để tạo đồng hồ bằng javascript, in ra giao diện người dùng t
// trong thẻ H1(gợi ý sử dụng setInterval và đối tượng Date, in ra giao diện thì dùng
// document.write()).

setInterval(function clock() {
    const d = new Date();
    document.getElementById("heading").innerHTML = d.toLocaleTimeString();
}, 1000);

// 4. Tạo một mảng, bên trong gồm 4 đối tượng là các khoá học của CFD Circle, mỗi đối
// tượng gồm các key(thuộc tính) name(tên khoá học), price(giá), date(ngày khai giảng).
// In ra các đối tượng có trong mảng ? In ra price(giá khoá học) của từng đối tượng ?

function printObj() {
    let courseCfdCircle = [
        {
            name: "Front-end Newbie",
            price: "$4500",
            date: "07/11/2023"
        },
        {
            name: "Web Responsive",
            price: "$5800",
            date: "19/12/2023"
        },
        {
            name: "ReactJS Master",
            price: "$7600",
            date: "04/02/2024"
        },
        {
            name: "Front-end Master",
            price: "$15000",
            date: "07/11/2023"
        },
    ];
    console.log(courseCfdCircle);
    let coursePrice = courseCfdCircle.forEach(function (course) {
        console.log(course.price);
    });
    console.log(coursePrice);
}

// printObj();

// 5. Tạo 1 một đối tượng Car gồm các thuộc tính (key): name, color, price. Kiểm tra xem thuộc
// tính(key) là speed có tồn tại trong đối tượng Car hay không, trả về kiểu boolean. (gợi ý
// dùng hasOwnProperty) ?

function carObj() {
    let car = {
        name: "Lexus",
        color: "Light-Green",
        price: "$17.000"
    }
    let isExist = car.hasOwnProperty("speed");
    return isExist;
}
// document.write(carObj());

// PART 3.1

// 1. Tạo 1 mảng gồm tên các khoá học của CFD Circle. In ra số lượng các khoá học? In ra chỉ số
// index của mảng ? In ra tên khoá học ở vị trí index thứ 2. In ra chuỗi tên các khoá học cách
// nhau bằng dấu phẩy ? Tính tổng giá các khoá học ? (bắt buộc dùng 1 trong những Phương
// thức xử lý mảng nâng cao đã học)

function arrMethod() {
    let courses = [
        {
            name: "Front-end Newbie",
            price: 4500,
            date: "07/11/2023"
        },
        {
            name: "Web Responsive",
            price: 5800,
            date: "19/12/2023"
        },
        {
            name: "ReactJS Master",
            price: 7600,
            date: "04/02/2024"
        },
        {
            name: "Front-end Master",
            price: 15000,
            date: "07/11/2023"
        },
    ]


    console.log(`So luong khoa hoc: ${courses.length}`);

    courses.forEach(function (course, index) {
        console.log(index, course);
    }) // In ra chi so index cua mang 



    let idx = courses.find(function (val, index) {
        return index === 1;
    })
    console.log(idx);

    let names = courses.map(function (course) {
        return course['name'];
    })
    console.log(names.toString());

    let prices = courses.map(function (course) {
        return course['price']
    })
    let sumOfPrice = 0;
    prices.forEach(num => {
        sumOfPrice += num;
    })
    console.log(sumOfPrice);
}

// arrMethod();

// 2. Viết 1 hàm nhận vào 1 mảng số và trả về tổng giá trị các phần tử của mảng?
function inputArr(arr) {
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    })
    return sum;
}

let myArr = [1, 3, 4, 5];
// document.write(inputArr(myArr));

// 3. Viết 1 hàm nhận vào 2 tham số là array và character. Hàm trả về 1 chuỗi là kết quả của việc
// nối các phần tử của array với character ? (lưu ý: array là mảng nhận vào, character là ký tự để nối các phần tử của mảng).
function concatArray(myArr, myChar) {
    let result = myArr.join(myChar);
    return result;
}

myArr = [
    "Cao Thanh Sang",
    "BiggEggss"
];
myChar = " is ";

// console.log(concatArray(myArr, myChar));

// 4.Tạo 1 object User gồm: tên, tuổi, địa chỉ và 1 mảng chứa tên bạn bè. In ra array bạn bè? In .ra tên của người bạn cuối cùng ? In ra địa chỉ của user ? Thêm 1 người bạn vào mảng bạn bè ? in ra độ dài mảng bạn bè ?
function objUser() {
    let user = {
        name: "BiggEggss",
        age: 23,
        address: "HCMC",
        friend: [
            "Nguyen Van A",
            "Nguyen Thi B",
            "Tran Ngoc C",
        ]
    };

    document.write(`<p style="font-weight:bold;">Friend: ${user.friend}</p>`);
    document.write(`<p style="font-weight:bold;color:red;">Last friend: ${user.friend[user.friend.length - 1]}</p>`);
    document.write(`<p style="font-weight:bold;color:blue;">Địa chỉ của user: ${user.address}</p>`);

    user.friend.push("Le Ngoc D");
    document.write(`<p style="font-weight:bold;color:green;">Độ dài của mảng: ${user.friend.length}</p>`);
}
// objUser();

// 5. Cho mảng gồm các phần tử 2,4,5,7,32,67,30,100. Trả về và in ra mảng mới gồm các phần tử có
// giá trị gấp đôi giá trị của từng phần tử mảng đã khởi tạo ? Gợi ý dùng hàm map().

function doubleArray(array) {
    let result = array.map(num => {
        return num * 2;
    });
    return result;
}
let array = [2, 4, 5, 7, 32, 76, 30, 100];
// document.write(doubleArray(array));

// PART 3.2

// 1. Viết 1 hàm nhận vào 1 tham số là mảng và trả về ngẫu nhiên 1 phần tử của mảng?

function randomElement(array) {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
}
let randomArray = [1, 2, 3, 4, 5, 6, 7];
// document.write(randomElement(randomArray));

// 2. Tạo 1 đối tượng student trống: Thêm thuộc tính name với giá trị là tên student? Thêm thuộc tính age với giá trị là tuổi ? Thay đổi giá trị name của student thành tên bất kỳ ? Xóa thuộc tính age ra khỏi đối tượng ?
function studentObj() {
    let student = {};
    student.name = "BiggEggss";
    student.age = "23";
    console.log(student);
    student.name = "Thanh Sang";
    console.log(student);
    delete student.age;
    console.log(student);
}
// studentObj();

// 3. Tạo 1 mảng gồm các object là các student gồm tên và điểm trung bình. Viết 1 hàm nhận vào 1
// tham số là mảng vừa tạo và trả về các object có điểm trung bình lớn hơn 5 ?

function student() {
    let arrayPoint = [
        {
            name: "Sang",
            point: 8
        },
        {
            name: "Biggegss",
            point: 7.5,
        },
        {
            name: "Huyen",
            point: 2
        }
    ];
    // use filter
    let resultArr = arrayPoint.filter(function (el) {
        return el.point > 5;
    })
    console.log(resultArr);
}


// student();

// // 4. Tạo 1 mảng chứa các object có thuộc tính là tên các nhân viên và giá trị là tiền lương. Viết hàm
// trả về tổng tất cả lương của các nhân viên trong object ?

function employeesObj(obj) {
    let salary = obj.map(function (slr) {
        return slr['salary'];
    })
    let sumOfSalary = 0;
    salary.forEach(num => {
        sumOfSalary += num;
    })
    console.log(`$${sumOfSalary}`);
}


let employees = [
    {
        name: "BiggEggs",
        salary: 2500,
    },
    {
        name: "Thanh Sang",
        salary: 3000,
    },
    {
        name: "Sang",
        salary: 4000,
    }
]
// employeesObj(employees);

// 5. Cho mảng gồm các phần tử 2,4,5,7,32,67,30,100. Tìm và in ra phần tử đầu tiên thoả điều kiện phần
// tử đó > 20 ? 

function findEl() {
    let arrNum = [2, 4, 5, 7, 32, 67, 30, 100];
    let result = arrNum.find(function (num) {
        return num > 20;
    })
    console.log(result);
}
// findEl();

// 6. Cho mảng diemso gồm các phần tử 5, 7, 8, 9, 3. Sử dụng hàm every để kiểm tra điểm số của học
// sinh được lưu dưới dạng mảng có đủ để đỗ kỳ thì không.Điều kiện tất cả điểm số >= 5. Nếu đủ
// điều kiện thì in ra “Đủ điểm đỗ” ngược lại thì “Không đủ điểm đỗ”?

function diemSo() {
    let diemSo = [5, 7, 8, 9, 3];
    let isEnought = diemSo.every(function (diem) {
        return diem >= 5;
    })
    if (isEnought == true) {
        document.write("Đủ điểm đỗ!");
    }
    else document.write("Không đủ điểm đỗ!");
}

// diemSo();

// JavaScript ES6

// 1. Viết 1 function nhận vào số lượng tham số không giới hạn. Hàm trả về độ dài của tất cả tham số. Gợi ý: dùng rest parameter.Ví dụ: getLength(1, 3, 5, 7, 9) => 5

function getLength(...rest) {
    let i = 0
    for (i; i < rest.length; i++) {
    }
    return i;
}
// document.write(getLength(1, 3, 5, 7, 9));

// 2. Cho mảng gồm số chẵn và lẻ. Viết hàm nhận vào mảng đó và trả về mảng mới gồm những số lẻ được
// nhân đôi.Áp dụng các phương thức mảng đã học và arrow function để viết càng ngắn gọn càng tốt.
// Ví dụ: getNum([1, 3, 6, 9]) => [6, 18]

let num = [1, 3, 6, 9];

let newNum = num.filter(num => num % 2 !== 0)

let result = newNum.map(val => val *= 2)

// console.log(result);

// 3. Cho 1 mảng gồm 5 object có tên và giá khóa học, viết hàm trả về tổng giá tiền 3 khóa học cuối cùng. Áp dụng kiến thức ES6 đã học như destructuring, rest parameter và arrow function.


let coursesName = [
    {
        name: "Front-end Newbie",
        price: 4500,
    },
    {
        name: "Web Responsive",
        price: 5800,
    },
    {
        name: "ReactJS Master",
        price: 7600,
    },
    {
        name: "Front-end Master",
        price: 15000,
    },
    {
        name: "NodeJS",
        price: 10000,
    }
];

let [, , c3, c4, c5] = coursesName; //Destructoring

function sumOfPrices(...param) { //Rest parameter
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum += param[i];
    }
    return sum;
}

// document.write((sumOfPrices(c3.price, c4.price, c5.price)));

// 4. Viết hàm có thể nhận vào tham số là các số nguyên dương. Hàm trả về tổng các đối số nhận vào. Áp dụng kiến thức ES6.Ví dụ: calcSum(1, 3, 5) => 9
function calcSum(...param) {
    let i = 0, sum = 0;
    for (i; i < param.length; i++) {
        sum += param[i];
    }
    return sum;
}

// document.write(calcSum(1, 3, 5));

// 5. Cho 1 đối tượng User có address là 1 object. Trong object address lại chứa home là 1 mảng. Trong mảng home đó chứa 2 object có name là tên chủ nhà, district là tên đường, number là số nhà.Áp dụng destructuring để in ra district của object thứ 2.

let userObj = {
    address: {
        home: [
            {
                name: "Sang",
                street: "Pham Van Dong",
                number: 47
            },
            {
                name: "BiggEggss",
                street: "Phan Van Tri",
                number: 10
            }
        ]
    }
};



let [, a] = userObj.address.home;

// document.write(`So ${a.number} duong ${a.street}`);

// 6. Viết hàm nhận vào tham số là các số nguyên dương. Hàm trả về object có key là chuỗi bất kỳ (tự định nghĩa) + với index tương ứng mỗi lần lặp, value là 1 số(của param truyền vào) tương ứng với mỗi lần lặp nhân 2. Ví dụ: generateNum(1, 2, 3, 4) => { string1: 2, string2: 2, string3: 6, string4: 8 }

function generateNum(...param) {
    let objNums = {};
    for (let i = 0; i < param.length; i++) {
        objNums[`string${i}`] = param[i] * 2;
    }
    return objNums;
}

// console.log(generateNum(1, 2, 3, 4));



function addTwoNumbers(l1, l2) {
    let sum = toNumber(l1) + toNumber(l2);
    let res = [];
    res[0] = Math.trunc(sum / Math.pow(10, 0)) - (Math.trunc(sum / Math.pow(10, 1)) * 10);
    res[1] = Math.trunc(sum / Math.pow(10, 1)) - (Math.trunc(sum / Math.pow(10, 2)) * 10);
    res[2] = Math.trunc(sum / Math.pow(10, 2)) - (Math.trunc(sum / Math.pow(10, 3)) * 10);
    return res;
};

let toNumber = function (nums) {
    let res = 0;
    for (let i = (nums.length) - 1; i >= 0; i--) {
        res += nums[i] * (Math.pow(10, i));
    }
    return res;
}

let l1 = [2, 4, 3];

let l2 = [5, 6, 4];

// console.log(addTwoNumbers(l1, l2));

function romanToInt(s) {
    let val = 0, sum = 0;
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "I":
                val = 1;
                break;
            case "V":
                val = 5;
                break;
            case "X":
                val = 10;
                break;
            case "L":
                val = 50;
                break;
            case "C":
                val = 100;
                break;
            case "D":
                val = 500;
                break;
            case "M":
                val = 1000;
                break;
        }
        sum += val;
    }
    return sum;
}

// console.log(romanToInt("MCMXCIV"));

let s = "   fly me   to   the moon  ";
function lengthOfLastWord(s) {
    let newString = s.trim();

    let count = 0;
    for (let i = newString.length - 1; i >= 0; i--) {
        if (newString[i] === " ") break;
        else count++;
    }
    return count;
};

// console.log(lengthOfLastWord(s));

function plusOne(digits) {
    if (digits[digits.length - 1] === 9) {
        digits[digits.length - 1] = 1;
        digits[digits.length] = 0
    }
    else {
        digits[digits.length - 1]++;
    }
    return digits;
}

digits = [1, 2, 3];

// console.log(plusOne(digits));

function mySqrt(x) {
    return Math.floor(Math.sqrt(x));
}

// console.log(mySqrt(8));

function climbStairs(n) {
    let arr = [1, 1];
    for (let i = 2; i <= n; i++) {
        console.log(arr.push(arr[i - 1] + arr[i - 2]));
    }
    return arr[n];
};

// console.log(climbStairs(4));

function deleteDuplicates(head) {
    for (let i = 0; i < head.length; i++) {
        for (let j = i + 1; j < head.length; j++) {
            if (head[i] === head[j]) {
                head.splice(j, 1);
            }
        }
    }
    return head;
}

let head = [1, 1, 2, 3, 3];

// console.log(deleteDuplicates(head));

