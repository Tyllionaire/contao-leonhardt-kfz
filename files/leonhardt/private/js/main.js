// Init Global Vars
var initialWindowWidth  = window.innerWidth;
var initialWindowHeight = window.innerHeight;

/////////////////////////////////////////////////////////////////////////////////
// SET VIEWPORT HEIGHT //
/////////////////////////////////////////////////////////////////////////////////
function setFullHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
} setFullHeight();

var setHeight = debounce(function() {
    
    // Get height and width of the inner window
    var newWindowWidth      = window.innerWidth;
    var newWindowHeight     = window.innerHeight;
    
    // Calculate the difference after resizing
    var diffWindowWidth     = (initialWindowWidth > newWindowWidth ? initialWindowWidth: newWindowWidth) - (initialWindowWidth < newWindowWidth ? initialWindowWidth: newWindowWidth);
    var diffWindowHeight    = (initialWindowHeight > newWindowHeight ? initialWindowHeight: newWindowHeight) - (initialWindowHeight < newWindowHeight ? initialWindowHeight: newWindowHeight);
    
        /** Repaint the hero image after specific difference size and set
        new window width and height for the next calculation **/
    
    if(diffWindowWidth > 100 || diffWindowHeight > 100) {
        
        initialWindowWidth  = newWindowWidth;   // Set new width
        initialWindowHeight = newWindowHeight;  // Set new height
        
        setFullHeight(); // Recalculate Hero Image
        
    } else {
        
        initialWindowWidth  = newWindowWidth;   // Set new width
        initialWindowHeight = newWindowHeight;  // Set new height
        
    }
    
    
}, 200);

window.addEventListener('resize', setHeight);

const swiper = new Swiper('.swiper-history', {
    // Optional parameters
    loop: false,
  
    slidesPerView: 1.5,
    spaceBetween: 20,
    // Responsive breakpoints
    breakpoints: {
        480: {
        slidesPerView: 2.5,
        spaceBetween: 20
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 20
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 40
        }
    },

    // If we need pagination
    pagination: {
      el: '.pag-history',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.btn-next-history',
      prevEl: '.btn-prev-history',
    },
  
    on:{
        init: function() {
            const el = this.$el[0];

            if (this.isBeginning) {
                el.classList.add('firstSlideActive')
            }
            else if (this.isEnd) {
                el.classList.add('lastSlideActive')
            }
            else {
                el.classList.remove('firstSlideActive')
                el.classList.remove('lastSlideActive')
            }
        }
    }
  });

swiper.on('slideChange', function () {
    const el = this.$el[0];

    if (this.isBeginning) {
        el.classList.add('firstSlideActive')
    }
    else if (this.isEnd) {
        el.classList.add('lastSlideActive')
    }
    else {
        el.classList.remove('firstSlideActive')
        el.classList.remove('lastSlideActive')
    }
});

const swiperTeam = new Swiper('.swiper-team', {
    // Optional parameters
    loop: false,
  
    slidesPerView: 1.25,
    spaceBetween: 20,
    // Responsive breakpoints
    breakpoints: {
        480: {
        slidesPerView: 2.5,
        spaceBetween: 20
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 20
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 20
        }
    },

    // If we need pagination
    pagination: {
      el: '.pag-team',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.btn-next-team',
      prevEl: '.btn-prev-team',
    },
  
    on:{
        init: function() {
            const el = this.$el[0];

            if (this.isBeginning) {
                el.classList.add('firstSlideActive')
            }
            else if (this.isEnd) {
                el.classList.add('lastSlideActive')
            }
            else {
                el.classList.remove('firstSlideActive')
                el.classList.remove('lastSlideActive')
            }
        }
    }
  });

  swiperTeam.on('slideChange', function () {
    const el = this.$el[0];

    if (this.isBeginning) {
        el.classList.add('firstSlideActive')
    }
    else if (this.isEnd) {
        el.classList.add('lastSlideActive')
    }
    else {
        el.classList.remove('firstSlideActive')
        el.classList.remove('lastSlideActive')
    }
});

const swiperLogos = new Swiper('.swiper-logos', {
    // Optional parameters
    loop: false,
  
    slidesPerView: 1.5,
    spaceBetween: 0,
    // Responsive breakpoints
    breakpoints: {
        480: {
        slidesPerView: 2.5,
        spaceBetween: 0
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 0
        },
        1024: {
        slidesPerView: 4,
        spaceBetween: 0
        }
    },

    // If we need pagination
    pagination: {
      el: '.pag-logos',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.btn-next-logos',
      prevEl: '.btn-prev-logos',
    },
  
    on:{
        init: function() {
            const el = this.$el[0];

            if (this.isBeginning) {
                el.classList.add('firstSlideActive')
            }
            else if (this.isEnd) {
                el.classList.add('lastSlideActive')
            }
            else {
                el.classList.remove('firstSlideActive')
                el.classList.remove('lastSlideActive')
            }
        }
    }
  });

  swiperLogos.on('slideChange', function () {
    const el = this.$el[0];

    if (this.isBeginning) {
        el.classList.add('firstSlideActive')
    }
    else if (this.isEnd) {
        el.classList.add('lastSlideActive')
    }
    else {
        el.classList.remove('firstSlideActive')
        el.classList.remove('lastSlideActive')
    }
});

/** Returns a function, that, as long as it continues to be invoked, will not
    be triggered. The function will be called after it stops being called for
    N milliseconds. If `immediate` is passed, trigger the function on the
    leading edge, instead of the trailing. **/
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };