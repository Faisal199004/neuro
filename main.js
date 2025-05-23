// JavaScript الأساسي لتطبيق NeuroLearn Hub
// هذا الملف سيتعامل مع:
// - استدعاءات AJAX لإرسال النماذج (تسجيل الدخول، الاشتراك، التعليقات، نشر المقالات)
// - تحميل المحتوى الديناميكي
// - التحقق من صحة البيانات على جانب العميل (مع أهمية التحقق على جانب الخادم)
// - تفاعلات واجهة المستخدم (مثل تبديل القوائم، تعديل حجم النص، حفظ المقالات)
// - التفاعل مع إطار عمل الواجهة الأمامية مثل React/Vue إذا تم دمجه

document.addEventListener('DOMContentLoaded', function() {
    console.log('تم تحميل JavaScript الخاص بـ NeuroLearn Hub');

    // مثال: التمرير السلس لروابط المرساة (إن وجدت)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // مثال: تفاعل أساسي مع زر الحفظ (بصري فقط، بدون خلفية حتى الآن)
    const bookmarkButtons = document.querySelectorAll('.bookmark-button');
    bookmarkButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('bookmarked');
            if (this.classList.contains('bookmarked')) {
                this.textContent = '🔖 تم الحفظ';
                this.setAttribute('aria-label', 'إلغاء حفظ هذه المقالة');
            } else {
                this.textContent = '🔖';
                this.setAttribute('aria-label', 'حفظ هذه المقالة');
            }
            // هنا ستضيف استدعاء AJAX إلى الخلفية لحفظ حالة الحفظ
        });
    });

    // تعديل حجم النص (مثال أساسي لصفحة تفاصيل المقالة)
    const articleBody = document.getElementById('article-body');
    const increaseTextBtn = document.getElementById('text-size-increase');
    const decreaseTextBtn = document.getElementById('text-size-decrease');

    if (articleBody && increaseTextBtn && decreaseTextBtn) {
        let currentFontSize = 1; // em

        increaseTextBtn.addEventListener('click', () => {
            if (currentFontSize < 2) { // الحجم الأقصى
                currentFontSize += 0.1;
                articleBody.style.fontSize = currentFontSize + 'em';
            }
        });

        decreaseTextBtn.addEventListener('click', () => {
            if (currentFontSize > 0.7) { // الحجم الأدنى
                currentFontSize -= 0.1;
                articleBody.style.fontSize = currentFontSize + 'em';
            }
        });
    }

    // معالجة إرسال النماذج (مكان مؤقت - سيحتاج إلى AJAX مناسب)
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // منع إرسال النموذج HTML الافتراضي
            console.log('تم إرسال نموذج تسجيل الدخول. قم بتنفيذ استدعاء AJAX هنا.');
            // مثال: جمع البيانات
            const formData = new FormData(this);
            const email = formData.get('email');
            const password = formData.get('password');
            // استدعاء نقطة نهاية API الخلفية هنا
            alert('وظيفة تسجيل الدخول غير منفذة بعد. تحقق من وحدة التحكم.');
        });
    }

    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('تم إرسال نموذج التسجيل. قم بتنفيذ استدعاء AJAX هنا.');
            alert('وظيفة التسجيل غير منفذة بعد. تحقق من وحدة التحكم.');
        });
    }

    // تفعيل نموذج التعليقات
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('تم إرسال تعليق. قم بتنفيذ استدعاء AJAX هنا.');
            alert('وظيفة التعليق غير منفذة بعد. تحقق من وحدة التحكم.');
        });
    }

    // تفعيل نموذج البحث
    const searchForm = document.getElementById('search-form-main');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            // لا نمنع الإرسال الافتراضي هنا لأننا نريد الانتقال إلى صفحة النتائج
            console.log('تم إرسال نموذج البحث.');
        });
    }

    // تفعيل نموذج تصفية المقالات
    const filterForm = document.getElementById('filter-form');
    if (filterForm) {
        filterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('تم إرسال نموذج التصفية. قم بتنفيذ استدعاء AJAX هنا.');
            alert('وظيفة تصفية المقالات غير منفذة بعد. تحقق من وحدة التحكم.');
        });
    }

    // وظائف لوحة المشرف
    const addCategoryForm = document.getElementById('add-category-form');
    if (addCategoryForm) {
        addCategoryForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('تم إرسال نموذج إضافة تخصص. قم بتنفيذ استدعاء AJAX هنا.');
            alert('وظيفة إضافة تخصص غير منفذة بعد. تحقق من وحدة التحكم.');
        });
    }
});
