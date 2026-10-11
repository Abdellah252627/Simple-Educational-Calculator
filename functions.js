// ========================================
// 1. دالة الجمع (Function Declaration)
// ========================================
function add(a, b) {
    return a + b;
}


// ========================================
// 2. دالة الطرح (Arrow Function)
// ========================================
const subtract = (a, b) => {
    return a - b;
};


// ========================================
// 3. دالة الضرب (Arrow Function - سطر واحد)
// ========================================
const multiply = (a, b) => a * b;


// ========================================
// 4. دالة القسمة (مع التحقق من القسمة على صفر)
// ========================================
function divide(a, b) {
    if (b === 0) {
        return "لا يمكن القسمة على صفر";
    }
    return a / b;
}


// ========================================
// 5. دالة حساب المعدل (مع default parameter)
// ========================================
function calculateAverage(num1, num2, num3 = 0) {
    const sum = num1 + num2 + num3;
    const count = num3 === 0 ? 2 : 3;
    const average = sum / count;
    return Math.round(average * 100) / 100; // تقريب لرقمين عشريين
}


// ========================================
// 🎁 التحدي 1: التحقق من رقم زوجي
// ========================================
const isEven = num => num % 2 === 0;


// ========================================
// 🎁 التحدي 2: التحقق من العمر
// ========================================
function checkAge(age) {
    if (age < 13) {
        return "طفل";
    } else if (age >= 13 && age <= 17) {
        return "مراهق";
    } else if (age >= 18 && age <= 59) {
        return "بالغ";
    } else {
        return "كبير السن";
    }
}


// ========================================
// دوال الاختبار التفاعلية
// ========================================

function testAdd() {
    const a = parseFloat(document.getElementById('add1').value);
    const b = parseFloat(document.getElementById('add2').value);
    const result = add(a, b);
    document.getElementById('addResult').innerHTML = `✅ النتيجة: ${a} + ${b} = ${result}`;
    document.getElementById('addResult').className = 'result success';
}

function testSubtract() {
    const a = parseFloat(document.getElementById('sub1').value);
    const b = parseFloat(document.getElementById('sub2').value);
    const result = subtract(a, b);
    document.getElementById('subResult').innerHTML = `✅ النتيجة: ${a} - ${b} = ${result}`;
    document.getElementById('subResult').className = 'result success';
}

function testMultiply() {
    const a = parseFloat(document.getElementById('mul1').value);
    const b = parseFloat(document.getElementById('mul2').value);
    const result = multiply(a, b);
    document.getElementById('mulResult').innerHTML = `✅ النتيجة: ${a} × ${b} = ${result}`;
    document.getElementById('mulResult').className = 'result success';
}

function testDivide() {
    const a = parseFloat(document.getElementById('div1').value);
    const b = parseFloat(document.getElementById('div2').value);
    const result = divide(a, b);
    const resultDiv = document.getElementById('divResult');
    
    if (result === "لا يمكن القسمة على صفر") {
        resultDiv.innerHTML = `❌ ${result}`;
        resultDiv.className = 'result error';
    } else {
        resultDiv.innerHTML = `✅ النتيجة: ${a} ÷ ${b} = ${result}`;
        resultDiv.className = 'result success';
    }
}

function testAverage() {
    const num1 = parseFloat(document.getElementById('avg1').value);
    const num2 = parseFloat(document.getElementById('avg2').value);
    const num3Input = document.getElementById('avg3').value;
    
    let result;
    if (num3Input === '') {
        result = calculateAverage(num1, num2);
        document.getElementById('avgResult').innerHTML = 
            `✅ المعدل: (${num1} + ${num2}) ÷ 2 = ${result}`;
    } else {
        const num3 = parseFloat(num3Input);
        result = calculateAverage(num1, num2, num3);
        document.getElementById('avgResult').innerHTML = 
            `✅ المعدل: (${num1} + ${num2} + ${num3}) ÷ 3 = ${result}`;
    }
    document.getElementById('avgResult').className = 'result success';
}

function testIsEven() {
    const num = parseInt(document.getElementById('evenNum').value);
    const result = isEven(num);
    const resultDiv = document.getElementById('evenResult');
    
    if (result) {
        resultDiv.innerHTML = `✅ ${num} هو رقم زوجي`;
        resultDiv.className = 'result success';
    } else {
        resultDiv.innerHTML = `❌ ${num} هو رقم فردي`;
        resultDiv.className = 'result error';
    }
}

function testCheckAge() {
    const age = parseInt(document.getElementById('ageNum').value);
    const result = checkAge(age);
    const resultDiv = document.getElementById('ageResult');
    
    resultDiv.innerHTML = `✅ العمر ${age} → التصنيف: ${result}`;
    resultDiv.className = 'result success';
}


// ========================================
// اختبارات تلقائية في الكونسول
// ========================================

function runAllTests() {
    const output = document.getElementById('consoleOutput');
    output.innerHTML = '';
    
    addLog('═══════════════════════════════════', 'info');
    addLog('🧪 بدء الاختبارات التلقائية...', 'info');
    addLog('═══════════════════════════════════', 'info');
    
    // اختبار دالة الجمع
    addLog('\n📝 اختبار دالة add():', 'info');
    addLog(`add(5, 3) = ${add(5, 3)}`, add(5, 3) === 8 ? 'success' : 'error');
    addLog(`add(10, 20) = ${add(10, 20)}`, add(10, 20) === 30 ? 'success' : 'error');
    
    // اختبار دالة الطرح
    addLog('\n📝 اختبار دالة subtract():', 'info');
    addLog(`subtract(10, 4) = ${subtract(10, 4)}`, subtract(10, 4) === 6 ? 'success' : 'error');
    addLog(`subtract(100, 50) = ${subtract(100, 50)}`, subtract(100, 50) === 50 ? 'success' : 'error');
    
    // اختبار دالة الضرب
    addLog('\n📝 اختبار دالة multiply():', 'info');
    addLog(`multiply(6, 7) = ${multiply(6, 7)}`, multiply(6, 7) === 42 ? 'success' : 'error');
    addLog(`multiply(5, 5) = ${multiply(5, 5)}`, multiply(5, 5) === 25 ? 'success' : 'error');
    
    // اختبار دالة القسمة
    addLog('\n📝 اختبار دالة divide():', 'info');
    addLog(`divide(20, 4) = ${divide(20, 4)}`, divide(20, 4) === 5 ? 'success' : 'error');
    addLog(`divide(10, 0) = ${divide(10, 0)}`, divide(10, 0) === "لا يمكن القسمة على صفر" ? 'success' : 'error');
    addLog(`divide(15, 3) = ${divide(15, 3)}`, divide(15, 3) === 5 ? 'success' : 'error');
    
    // اختبار دالة المعدل
    addLog('\n📝 اختبار دالة calculateAverage():', 'info');
    addLog(`calculateAverage(80, 90, 100) = ${calculateAverage(80, 90, 100)}`, calculateAverage(80, 90, 100) === 90 ? 'success' : 'error');
    addLog(`calculateAverage(80, 90) = ${calculateAverage(80, 90)}`, calculateAverage(80, 90) === 85 ? 'success' : 'error');
    addLog(`calculateAverage(100, 100, 100) = ${calculateAverage(100, 100, 100)}`, 'success');
    
    // اختبار isEven
    addLog('\n📝 اختبار دالة isEven():', 'info');
    addLog(`isEven(8) = ${isEven(8)}`, isEven(8) === true ? 'success' : 'error');
    addLog(`isEven(7) = ${isEven(7)}`, isEven(7) === false ? 'success' : 'error');
    addLog(`isEven(0) = ${isEven(0)}`, isEven(0) === true ? 'success' : 'error');
    
    // اختبار checkAge
    addLog('\n📝 اختبار دالة checkAge():', 'info');
    addLog(`checkAge(10) = ${checkAge(10)}`, checkAge(10) === "طفل" ? 'success' : 'error');
    addLog(`checkAge(15) = ${checkAge(15)}`, checkAge(15) === "مراهق" ? 'success' : 'error');
    addLog(`checkAge(25) = ${checkAge(25)}`, checkAge(25) === "بالغ" ? 'success' : 'error');
    addLog(`checkAge(65) = ${checkAge(65)}`, checkAge(65) === "كبير السن" ? 'success' : 'error');
    
    addLog('\n═══════════════════════════════════', 'info');
    addLog('✅ انتهت جميع الاختبارات!', 'success');
    addLog('═══════════════════════════════════', 'info');
}

function addLog(message, type) {
    const output = document.getElementById('consoleOutput');
    const line = document.createElement('div');
    line.className = `console-line ${type}`;
    line.textContent = message;
    output.appendChild(line);
}


// ========================================
// تشغيل الاختبارات عند تحميل الصفحة
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 مرحباً بك في تمارين الدوال!');
    console.log('\n📝 اختبار الدوال في Console:');
    console.log('───────────────────────────────');
    console.log('add(5, 3) =', add(5, 3));
    console.log('subtract(10, 4) =', subtract(10, 4));
    console.log('multiply(6, 7) =', multiply(6, 7));
    console.log('divide(20, 4) =', divide(20, 4));
    console.log('divide(10, 0) =', divide(10, 0));
    console.log('calculateAverage(80, 90, 100) =', calculateAverage(80, 90, 100));
    console.log('calculateAverage(80, 90) =', calculateAverage(80, 90));
    console.log('isEven(8) =', isEven(8));
    console.log('isEven(7) =', isEven(7));
    console.log('checkAge(10) =', checkAge(10));
    console.log('checkAge(15) =', checkAge(15));
    console.log('checkAge(25) =', checkAge(25));
    console.log('checkAge(65) =', checkAge(65));
    console.log('───────────────────────────────');
});