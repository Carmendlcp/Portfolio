let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("node");
    habilidades[3].classList.add("wordpress");
    habilidades[4].classList.add("angular");
    habilidades[5].classList.add("react");
    habilidades[6].classList.add("laravel");
    habilidades[7].classList.add("mongo");
    habilidades[8].classList.add("atc");
    habilidades[9].classList.add("comunicacion");
    habilidades[10].classList.add("trabajo");
    habilidades[11].classList.add("creatividad");
    habilidades[12].classList.add("dedicacion");
    habilidades[13].classList.add("resolutiva");
    habilidades[14].classList.add("adaptabilidad");
    habilidades[15].classList.add("cliente");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

//para envio de email en contacto
(function () {
  emailjs.init("E3YBvvgxEJ1_F199P");
})();

function sendEmail(event) {
  event.preventDefault();

  emailjs.sendForm("service_7exznzj", "template_hlcgco8", event.target).then(
    function (response) {
      alert("Mensaje enviado exitosamente!");
    },
    function (error) {
      alert("Error al enviar el mensaje. Inténtalo de nuevo más tarde.");
    }
  );
}
