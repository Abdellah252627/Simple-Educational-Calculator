# آلة حاسبة تعليمية بسيطة | Simple Educational Calculator

مشروع تعليمي تفاعلي لتعلم أساسيات **دوال JavaScript** (JavaScript Functions) من خلال آلة حاسبة عملية وجميلة.

An interactive educational project to learn **JavaScript Functions** fundamentals through a practical and beautiful calculator.

---

## 🎯 نظرة عامة | Overview

هذا المشروع مصمم كـ **تمارين اليوم الثالث** في تعلم JavaScript، ويغطي:
- تعريف الدوال (Function Declaration)
- دوال السهم (Arrow Functions)
- المعاملات الافتراضية (Default Parameters)
- معالجة الأخطاء (Error Handling)
- الاختبارات التلقائية (Automated Testing)

This project is designed as **Day 3 exercises** in learning JavaScript, covering:
- Function Declarations
- Arrow Functions
- Default Parameters
- Error Handling
- Automated Testing

---

## ✨ المميزات | Features

### العمليات الحسابية الأساسية | Basic Arithmetic
| العملية | الدالة | النوع |
|----------|--------|-------|
| ➕ الجمع | `add(a, b)` | Function Declaration |
| ➖ الطرح | `subtract(a, b)` | Arrow Function |
| ✖️ الضرب | `multiply(a, b)` | Arrow Function (Single Line) |
| ➗ القسمة | `divide(a, b)` | مع التحقق من القسمة على صفر |

### أدوات إضافية | Additional Tools
- 📊 **حساب المعدل** - يدعم رقمين أو ثلاثة أرقام (`calculateAverage`)
- 🔢 **التحقق من رقم زوجي/فردي** - دالة سهم مختصرة (`isEven`)
- 👤 **تصنيف العمر** - طفل، مراهق، بالغ، كبير السن (`checkAge`)

### واجهة تفاعلية | Interactive UI
- تصميم متجاوب (Responsive) يعمل على جميع الأجهزة
- تأثيرات حركية سلسة (Animations)
- ألوان مميزة للنجاح/الخطأ
- كونسول اختبارات مدمج

---

## 🚀 التشغيل | Getting Started

### المتطلبات | Requirements
- متصفح ويب حديث (Chrome, Firefox, Safari, Edge)
- لا حاجة لتثبيت أي حزم أو أدوات بناء

### خطوات التشغيل | Run Steps
```bash
# استنساخ المستودع | Clone repository
git clone <repository-url>
cd simple-calculator

# فتح الملف في المتصفح | Open in browser
# خيار 1: النقر المزدوج على index.html
# خيار 2: استخدام Live Server في VS Code
# خيار 3: Python HTTP Server
python -m http.server 8000
# ثم افتح http://localhost:8000
```

---

## 📁 هيكل المشروع | Project Structure

```
simple-calculator/
├── index.html      # الصفحة الرئيسية + واجهة المستخدم
├── style.css       # التنسيقات والتصميم
├── functions.js    # جميع الدوال والمنطق
└── README.md       # هذا الملف
```

---

## 💻 أمثلة الاستخدام | Usage Examples

### استخدام الدوال مباشرة في Console
```javascript
// العمليات الأساسية
add(5, 3);           // 8
subtract(10, 4);     // 6
multiply(6, 7);      // 42
divide(20, 4);       // 5
divide(10, 0);       // "لا يمكن القسمة على صفر"

// المعدل
calculateAverage(80, 90);        // 85
calculateAverage(80, 90, 100);   // 90

// التحديات
isEven(8);      // true
isEven(7);      // false
checkAge(10);   // "طفل"
checkAge(25);   // "بالغ"
checkAge(65);   // "كبير السن"
```

### تشغيل الاختبارات التلقائية
```javascript
// في Console المتصفح
runAllTests();

// أو اضغط على زر "▶️ تشغيل جميع الاختبارات" في الصفحة
```

---

## 🎓 المفاهيم التعليمية | Learning Concepts

| المفهوم | الدالة | السطر في الكود |
|----------|--------|----------------|
| Function Declaration | `add()`, `divide()`, `checkAge()` | 4, 26, 54 |
| Arrow Function | `subtract`, `multiply`, `isEven` | 12, 20, 48 |
| Default Parameter | `calculateAverage(num3 = 0)` | 37 |
| Error Handling | `divide()` division by zero | 27-29 |
| Ternary Operator | `isEven`, `calculateAverage` | 48, 39 |
| Template Literals | جميع دوال `test*()` | 75, 83, 91, 102 |
| DOM Manipulation | `document.getElementById()` | 72, 79, 88, 96 |
| Event Handling | `onclick` في HTML | index.html:27,36,45... |
| Automated Testing | `runAllTests()` | 157 |

---

## 🧪 الاختبارات | Testing

المشروع يحتوي على **نظام اختبارات مدمج** يختبر:
- ✅ 10 حالات اختبار للعمليات الحسابية
- ✅ 3 حالات اختبار لحساب المعدل
- ✅ 3 حالات اختبار للرقم الزوجي/الفردي
- ✅ 4 حالات اختبار لتصنيف العمر

**إجمالي: 20 اختبار آلي**

---

## 🎨 التقنيات المستخدمة | Tech Stack

- **HTML5** - هيكل الصفحة
- **CSS3** - التصميم المتجاوب + Flexbox/Grid + Animations
- **Vanilla JavaScript (ES6+)** - المنطق والدوال
- لا توجد مكتبات خارجية (Zero Dependencies)

---

## 📱 لقطات الشاشة | Screenshots

> افتح `index.html` في المتصفح لرؤية الواجهة التفاعلية كاملة

---

## 🤝 المساهمة | Contributing

1. Fork المشروع
2. إنشاء فرع جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push للفرع (`git push origin feature/amazing-feature`)
5. فتح Pull Request

---

## 📄 الترخيص | License

هذا المشروع مفتوح المصدر ومتاح تحت رخصة **MIT License**.

---

## 👨‍💻 المؤلف | Author

**مشروع تعليمي** - تم تطويره كجزء من تمارين تعلم JavaScript

---

## 🙏 شكر وتقدير | Acknowledgments

- تمارين الدوال في JavaScript
- مجتمع المطورين العرب
- جميع مصادر التعلم المفتوحة

---

<div align="center">

**⭐ إذا أعجبك المشروع، لا تنسَ إعطاء نجمة!**

**⭐ If you like this project, don't forget to give it a star!**

</div>