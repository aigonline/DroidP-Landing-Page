// Handle dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (event.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        });
        
        // Mobile menu functionality
        const menuButton = document.getElementById('menu-button');
        const closeMenu = document.getElementById('close-menu');
        const mobileNav = document.getElementById('mobile-nav');
        
        menuButton.addEventListener('click', () => {
            mobileNav.classList.add('open');
        });
        
        closeMenu.addEventListener('click', () => {
            mobileNav.classList.remove('open');
        });
        
        // Cookie consent
        const cookieConsent = document.getElementById('cookie-consent');
        const acceptCookies = document.getElementById('accept-cookies');
        
        acceptCookies.addEventListener('click', () => {
            cookieConsent.style.display = 'none';
            // In a real implementation, you would set a cookie here
        });
        
        // Scroll animations
        function handleScrollAnimations() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                const delay = element.getAttribute('data-delay') || 0;
                
                if (elementTop < windowHeight * 0.85) {
                    setTimeout(() => {
                        element.classList.add('animated');
                    }, delay);
                }
            });
        }
        
        // Run once on load
        handleScrollAnimations();
        
        // Add scroll event listener
        window.addEventListener('scroll', handleScrollAnimations);
	document.addEventListener('DOMContentLoaded', () => {
  tns({
    container: '.tns-carousel',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    controls: false,
    nav: false,
    gutter: 16,
    swipeAngle: false,
    mouseDrag: true,
  });
});

gsap.registerPlugin(ScrollTrigger);

  // target the row of slides
  gsap.to("#scroll-slider > div", {
    xPercent: -80,               // move left by 4 slides (5 slides → 80%)
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-slider",
      start: "top top",          // when slider top hits viewport top
      end: "bottom+=200% top",   // lengthen scroll to suit (200% extra)
      scrub: true,               // tie animation to scroll
      pin: true,                 // pin slider in place
      anticipatePin: 1,
    }
  });
