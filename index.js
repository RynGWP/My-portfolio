
    // CV Download handler
    function handleCVDownload() {

    
      const link = document.createElement('a');
      link.href = './Assets/CV.pdf';
      link.download = 'REGINO_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // Character animation
    function animateCharacters() {
      const textElement = document.getElementById('charText');
      const text = 'Software Engineer';
      
      textElement.innerHTML = '';
      
      [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.className = 'char';
        textElement.appendChild(span);
        
        setTimeout(() => {
          span.classList.add('animate');
        }, index * 100);
      });
    }

    function startCharacterLoop() {
      animateCharacters();
      setInterval(() => {
        const chars = document.querySelectorAll('#charText .char');
        chars.forEach(char => {
          char.classList.remove('animate');
        });
        
        setTimeout(animateCharacters, 500);
      }, 3000);
    }
  
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar-custom');
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
      } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
      }
    });

    // Initialize animations
    window.addEventListener('load', () => {
      setTimeout(startCharacterLoop, 1500);
    });

    // Smooth scroll for anchor links (fallback for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
