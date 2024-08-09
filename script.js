// Sayfaları döndürme butonlarına tıklama işlemi
const pageTurnBtns = document.querySelectorAll('.nextprev-btn');

pageTurnBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const pageTurnId = btn.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = ''; // Eski zIndex değerini kaldır
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = '20'; // Örnek olarak, tüm sayfalar için aynı zIndex
            }, 500);
        }
    });
});

// İletişim butonuna tıklama işlemi
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.addEventListener('click', () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = (20 + index).toString();
            }, 500);

        }, (index + 1) * 200 + 100);
    });
});

// Sayfa numaralarını geri döndürme fonksiyonu
let totalPages = pages.length;
let currentPageIndex = 0;

function reverseIndex() {
    currentPageIndex--;
    if (currentPageIndex < 0) {
        currentPageIndex = totalPages - 1;
    }
}

// Profil geri dönme butonuna tıklama işlemi
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.addEventListener('click', () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[currentPageIndex].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[currentPageIndex].style.zIndex = (10 + index).toString();
            }, 500);

        }, (index + 1) * 200 + 100);
    });
});

// Açılış animasyonu
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// Sağ kapak animasyonu
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = '-1';
}, 2800);

// Sol sayfa animasyonu
setTimeout(() => {
    pageLeft.style.zIndex = '20';
}, 3200);

// Sağ sayfaların animasyonu
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[currentPageIndex].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[currentPageIndex].style.zIndex = (10 + index).toString();
        }, 500);

    }, (index + 1) * 200 + 2100);
});
