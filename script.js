
// Adds 'active' class to current nav link based on pathname
(function(){
  const links = document.querySelectorAll('.nav a');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    const target = href.split('/').pop();
    if (target === path) a.classList.add('active');
  });

  // Simple reveal-on-scroll
  const revealEls = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); });
  }, { threshold:.12 });
  revealEls.forEach(el=>io.observe(el));
})();
