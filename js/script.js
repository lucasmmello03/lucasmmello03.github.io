// Animação de fade-in para os elementos
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function (element, index) {
      setTimeout(function () {
        element.classList.add('fade-in');
      }, index * 200); // Delay para cada elemento
    });
  });
  
  // Efeito de clique no link GitHub
  const githubLink = document.getElementById("github-link");
  
  githubLink.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o clique imediato
    githubLink.style.transform = "scale(0.9)"; // Diminui o tamanho do link
    githubLink.style.transition = "transform 0.2s"; // Define a duração da animação
  
    // Após 200ms, redireciona para o link
    setTimeout(function () {
      window.location.href = githubLink.href;
    }, 200);
  });
  
  // Efeito de scroll suave
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Previne o comportamento padrão do link
  
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
  