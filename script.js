document.addEventListener('DOMContentLoaded', function () {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 87,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});

function personalizarVentana(contenido, imagenSrc = null) {
  const ventana = document.getElementById("window-content");
  ventana.classList.add("window-withContent");
  ventana.innerHTML = contenido;


  if (imagenSrc) {
    const image = document.createElement("img");
    image.src = imagenSrc;
    image.style.height = "90%"
    ventana.appendChild(image);
  }
}

let menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function(){
  let list = document.getElementById("listMenu");
  list.classList.toggle("dFlex");
})

const opciones = document.querySelectorAll("[id^='option-']");

opciones.forEach(opcion => {
  opcion.addEventListener("click", function () {
    const opcionId = opcion.id.replace('option-', '');
    switch (opcionId) {
      case 'sobreMi':
        personalizarVentana(`
          <div class="grid grid-cols-2">
            <h2 class="text-7xl font-bold justify-between ">📌 Sobre mí:</h2>
            <p><span class="font-bold">Nombre:</span> Bryan Joya</p>
            <p><span class="font-bold">Ubicación:</span> Barcelona</p>
            <p><span class="font-bold">Profesión:</span> Desarrollador de páginas web</p>
            <p><span class="font-bold">Intereses:</span> Informática y tecnología</p>
            <p><span class="font-bold">Formación:</span> Desarrollador de Aplicaciones Web (DAW)</p>
            <p><span class="font-bold">Experiencia:</span> Creación y gestión de páginas web</p>
          </div>
        `, './img/foto.jpg');
        break;
      case 'softSkills':
        personalizarVentana(`
          <div>
            <p>Durante mi formación, he adquirido conocimientos en desarrollo FrontEnd utilizando las siguientes tecnologías:</p>
            <div class="flex text-center justify-center gap-6">
              <p class="bg-yellow-200 rounded-xl p-1.5"><i class="fa-brands fa-angular text-red-700"></i> Angular</p>
              <p class="bg-yellow-200 rounded-xl p-1.5"><i class="fa-brands fa-bootstrap text-purple-700"></i> Boostrap</p>
              <p class="bg-blue-200 rounded-xl p-1.5"><i class="fa-brands fa-css3-alt text-blue-700"></i> TailwindCSS</p>
            </div>
            <br>
            <p>Además, en el área de BackEnd, he trabajado con las siguientes tecnologías:</p>
            <div class="flex text-center justify-center gap-6">
              <p class="bg-blue-200 rounded-xl p-1.5"><i class="fa-brands fa-symfony text-blue-800"></i> Symfony</p>
              <p class="bg-gray-200 rounded-xl p-1.5"><i class="fa-brands fa-laravel text-red-600"></i> Laravel</p>
              <p class="bg-gray-100 rounded-xl p-1.5"><i class="fa-brands fa-java text-orange-700"></i> Java</p>
            </div>
              <br>
            <p>En cuanto a bases de datos, he utilizado las siguientes herramientas:</p>
            <div class="flex text-center justify-center gap-6">
              <p class="bg-cyan-200 rounded-xl p-1.5"><i class="fa-solid fa-database text-blue-900"></i> MySQL</p>
              <p class="bg-green-200 rounded-xl p-1.5"><i class="fa-solid fa-database text-green-900"></i> MongoDB</p>
              <p class="bg-gray-300 rounded-xl p-1.5"><i class="fa-solid fa-database text-gray-800"></i> HeidiSQL</p>
            </div>
          </div>
        `);
        break;
      case 'hobbies':
        personalizarVentana(`
          <div class="text-start m-auto p-4">
            <h2 class="text-xl font-bold mb-2">📌 En mi tiempo libre:</h2>
            <div class="flex text-center justify-center gap-6">
              <p class="bg-orange-200 rounded-xl p-1.5"><i class="fa-solid fa-users text-orange-500"></i> Amigos</p>
              <p class="bg-green-200 rounded-xl p-1.5"><i class="fa-solid fa-dumbbell text-green-700"></i> Gimnasio</p>
              <p class="bg-blue-200 rounded-xl p-1.5"><i class="fa-solid fa-book text-blue-700"></i> Lectura (Autoayuda)</p>
                  <p class="bg-purple-200 rounded-xl p-1.5"><i class="fa-solid fa-book text-blue-700"></i> VideoJuegos</p>`
        );
        break;
    }
  })
});



async function cargarEstudios() {
  let respuesta = await fetch('./estudios.json');
  return respuesta.json();
}

async function cargarExperiencia() {
  let respuesta = await fetch('./experiencia.json');
  return respuesta.json();
}


const tarjetas = [
  {
    triggerId: "mInfo1",
    cardId: "card",
    principalContentId: "principalContent",
    returnButtonId: "returnButton",
    backId: "back",
    allContentId: "allContent",
    bigContentClass: "bigContent",
    secondaryContent: "content",
    img: "imgProject1"
  },
  {
    triggerId: "mInfo2",
    cardId: "card2",
    principalContentId: "principalContent2",
    returnButtonId: "returnButton2",
    backId: "back2",
    allContentId: "allContent2",
    bigContentClass: "bigContent",
    secondaryContent: "content2",
    img: "imgProject2"
  },
  {
    triggerId: "mInfo3",
    cardId: "card3",
    principalContentId: "principalContent3",
    returnButtonId: "returnButton3",
    backId: "back3",
    allContentId: "allContent3",
    bigContentClass: "bigContent",
    secondaryContent: "content3",
    img: "imgProject3"
  },
  {
    triggerId: "mInfo4",
    cardId: "card4",
    principalContentId: "principalContent4",
    returnButtonId: "returnButton4",
    backId: "back4",
    allContentId: "allContent4",
    bigContentClass: "bigContent",
    secondaryContent: "content4",
    img: "imgProject4"
  },

];

tarjetas.forEach(tarjeta => {
  console.log(tarjeta)
  const trigger = document.getElementById(tarjeta.triggerId);
  const card = document.getElementById(tarjeta.cardId);
  const principalContent = document.getElementById(tarjeta.principalContentId);
  const returnButton = document.getElementById(tarjeta.returnButtonId);
  const back = document.getElementById(tarjeta.backId);
  const allContent = document.getElementById(tarjeta.allContentId);
  const content = document.getElementById(tarjeta.secondaryContent);
  let imgProject = document.getElementById(tarjeta.img);

  trigger.addEventListener("click", function (e) {
    e.preventDefault();
    card.classList.add("transformed");
    imgProject.style.display = "none";
    allContent.classList.add(tarjeta.bigContentClass);
    card.classList.remove("absoluteContent")


    setTimeout(function () {
      content.classList.toggle("textoTransformed");
      content.style.display = "block";
      returnButton.classList.add("textoTransformed");
      returnButton.style.display = "block";
      principalContent.style.display = "none";

    }, 500);
  });

  back.addEventListener("click", function (e) {
    e.preventDefault();
    card.classList.add("absoluteContent");
    card.classList.remove("transformed");
    principalContent.style.display = "block";
    content.style.display = "none";
    returnButton.style.display = "none";
    allContent.classList.remove(tarjeta.bigContentClass);
    imgProject.style.display = "flex";

  });
});




