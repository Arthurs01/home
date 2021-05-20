let animation3 = document.querySelectorAll(".animation3");

function MostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i < animation3.length; i++ ) {
    let alturaAnimado = animation3[i].offsetTop;
    if(alturaAnimado - 500 < scrollTop) {
      animation3[i].style.opacity = 1;
      animation3[i].classList.add("mostrar-derecha");
      
    }
  }

}
 window.addEventListener('scroll', MostrarScroll);