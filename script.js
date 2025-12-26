// تغيير لون الهيدر عند النزول
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// تأثير ظهور العناصر عند التمرير (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
        }
    });
}, observerOptions);

// مراقبة العناصر المخفية
const hiddenElements = document.querySelectorAll('.skill-card, .project-card, .contact-item, .contact-form');
hiddenElements.forEach((el) => observer.observe(el));

// التعامل مع نموذج التواصل
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // إظهار التنبيه
        const alert = document.getElementById('successAlert');
        alert.classList.add('show');
        alert.classList.add('success');
        
        // إعادة تعيين النموذج
        this.reset();
        
        // إخفاء التنبيه بعد 3 ثواني
        setTimeout(() => {
            alert.classList.remove('show');
        }, 3000);
    });
}
