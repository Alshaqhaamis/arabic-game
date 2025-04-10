document.addEventListener('DOMContentLoaded', function () {
    const levels = {
        beginner: [
            {
                question: 'حيوان بحرف ( خ )؟ 🐑',
                correctAnswer: 'خروف',
                options: ['خروف', 'فيل', 'كلب']
            },
            {
                question: 'اختر الكلمة التي تبدأ بحرف (ب): 🚪',
                correctAnswer: 'باب',
                options: ['باب', 'شمس', 'قمر']
            },
            {
                question: 'كم عدد الحروف في كلمة (ماما)؟ ✍️',
                correctAnswer: '٤',
                options: ['٢', '٣', '٤']
            },
            {
                question: 'ما الحرف الأخير في كلمة (ولد)؟ 👦',
                correctAnswer: 'د',
                options: ['و', 'ل', 'د']
            }
        ],
        intermediate: [
            {
                question: 'اختر الكلمة التي فيها مد بالألف: 📖',
                correctAnswer: 'كتاب',
                options: ['كِتابة', 'كتاب', 'كَتب']
            },
            {
                question: 'ما نوع الجملة: “ذهب سامي إلى السوق”؟ 🛍️',
                correctAnswer: 'جملة فعلية',
                options: ['جملة اسمية', 'جملة فعلية', 'جملة استفهامية']
            },
            {
                question: 'ما الكلمة التي تدل على المكان؟ 🏞️',
                correctAnswer: 'حديقة',
                options: ['حديقة', 'يلعب', 'طفل']
            },
            {
                question: 'أي الكلمات تبدأ بحرف الشين؟ 🌳',
                correctAnswer: 'شجرة',
                options: ['شجرة', 'قمر', 'ولد']
            }
        ],
        advanced: [
            {
                question: 'اختر الجملة التي تحتوي على فعل مضارع مرفوع: 📘',
                correctAnswer: 'يقرأُ الطالب الكتاب',
                options: ['يقرأُ الطالب الكتاب', 'قرأَ الطالب الكتاب', 'قرأَ الطالب الكتاب في الصباح']
            },
            {
                question: 'أي من الكلمات التالية تحتوي على حرف مشدد؟ 🔤',
                correctAnswer: 'صَحَّة',
                options: ['كتاب', 'فِكر', 'صَحَّة']
            },
            {
                question: 'ما نوع الجملة: “كان الولدُ سعيدًا لأنَّه حصل على جائزة.”؟ 🎁',
                correctAnswer: 'جملة اسمية',
                options: ['جملة فعلية', 'جملة اسمية', 'جملة شرطية']
            },
            {
                question: 'ما إعراب كلمة “الكتب” في الجملة: “قرأتُ الكتبَ في المكتبة”؟ 📚',
                correctAnswer: 'مفعول به منصوب بالفتحة',
                options: ['مفعول به منصوب بالفتحة', 'فاعل مرفوع بالضمة', 'مفعول فيه مجرور بالكسرة']
            }
        ]
    };

    let currentLevel = 'beginner';
    let currentQuestionIndex = 0;

    window.startGame = function (level) {
        currentLevel = level;
        currentQuestionIndex = 0;
        document.getElementById('game-area').innerHTML = '';
        displayQuestion();
    };

    function displayQuestion() {
        const levelData = levels[currentLevel];
        if (currentQuestionIndex < levelData.length) {
            const question = levelData[currentQuestionIndex];
            document.getElementById('game-area').innerHTML = `
                <h2>${question.question}</h2>
                <button onclick="checkAnswer('${question.options[0]}')">${question.options[0]}</button>
                <button onclick="checkAnswer('${question.options[1]}')">${question.options[1]}</button>
                <button onclick="checkAnswer('${question.options[2]}')">${question.options[2]}</button>
            `;
        } else {
            document.getElementById('game-area').innerHTML = `
                <h2>لقد انتهت اللعبة! مبروك 🎉</h2>
                <button onclick="showAboutUs()">إنهاء 🏁</button>
            `;
        }
    }

    window.checkAnswer = function (selectedAnswer) {
        const levelData = levels[currentLevel];
        const correctAnswer = levelData[currentQuestionIndex].correctAnswer;

        if (selectedAnswer === correctAnswer) {
            alert(`إجابة صحيحة! ✅`);
        } else {
            alert("إجابة خاطئة. حاول مجددًا! ❌");
        }currentQuestionIndex++;
        displayQuestion();
    };

    window.showAboutUs = function () {
        document.getElementById('game-area').innerHTML = `
            <div id="about-us">
                <h2>من نحن 💖</h2>
                <p>نحن طالبات الثانوية الثامنة عشر 💕 صممنا هذه اللعبة لتسهيل التعليم والمعرفة 📚.</p>
                <p>نأمل أن تساعد اللعبة في تعزيز تعلم اللغة العربية بطريقة ممتعة وشيقة 🎉.</p>
                <p>نرجو منكم إعطاءنا آراءكم من خلال هذا <a href="https://forms.gle/ERVLxVppTmvh1io37" target="_blank">الاستبيان</a>.</p>
            </div>
        `;
    };
});