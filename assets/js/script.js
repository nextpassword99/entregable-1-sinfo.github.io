// Ocultar la barra de navegación
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener(
  'scroll',
  () => {
    // console.log('scroll');
    var { scrollY } = window;
    if (scrollY > lastScrollTop) {
      navbar.classList.remove('visible');
    } else if (scrollY < lastScrollTop) {
      navbar.classList.add('visible');
    }
    lastScrollTop = scrollY <= 0 ? 0 : scrollY;
  },
  { passive: true },
);


// Alternativa al option en Población
const optionValues = document.querySelectorAll('.form__value');
const inputPopulation = document.getElementById('population');
const selectorText = document.querySelector('.selection');
const contentOptions = document.querySelector('.population__options');

selectorText.addEventListener('click', function () {
  contentOptions.classList.remove('hidden-element');
});

window.addEventListener('mouseup', function () {
  if (event.target != contentOptions) {
    contentOptions.classList.add('hidden-element');
  }
});

optionValues.forEach((option) => {
  option.addEventListener('click', function () {
    updateUI(inputPopulation, selectorText, this);
    changeState(this);
  });
});

function updateUI(input, selectorText, elementThis) {
  inputPopulation.value = elementThis.textContent.trim();
  selectorText.textContent = elementThis.textContent.trim();
  contentOptions.classList.add('hidden-element');
}
function changeState(elementThis) {
  if (elementThis.textContent.trim() != 'Seleccionar') {
    selectorText.classList.add('select_option');
  }
}

// Para obtener los datos
function getForm() {
  event.preventDefault();
  const result = document.querySelector('#result');
  try {
    const name = document.querySelector('#name').value;
    const firstName = document.querySelector('#first-name').value;
    const correo = document.querySelector('#correo').value;
    const population = document.querySelector('#population').value;
    const radio = document.querySelector('input[type="radio"]:checked').value;
    const textArea = document.querySelector('textarea').value;
    const novedades = document.querySelector('#novedades').value;
    const termino = document.querySelector('#termino').value;

    const values = [
      name,
      firstName,
      correo,
      population,
      radio,
      textArea,
      novedades,
      termino,
    ];
    const keys = [
      'Nombres',
      'Apellidos',
      'Correo',
      'Población',
      'Sexo',
      'Descripción',
      'Novedades',
      'Términos',
    ];

    let contentShow = '';

    for (let i = 0; i < values.length; i++) {
      contentShow += `<li><b>${keys[i]}: </b><i>${values[i]}</i></li>`;
    }
    result.innerHTML = `<ul>${contentShow}</ul>`;

    const selectResultLi = document.querySelector('#result>ul>li');
    result.classList.add('show_result');
    selectResultLi.addEventListener('mouseup', () => {
      if (event.target == selectResultLi) {
        result.innerHTML = '';
        result.classList.remove('show_result');
      }
    });
  } catch (e) {
    if (typeof ReferenceError) {
      console.error(e);
      result.innerHTML =
        '<h1 class="error">¡Ingrese todos los datos del formulario!</h1>';
      result.classList.add('show_result');
      // console.error(e)
      const selectResultH1 = document.querySelector('#result>h1');
      selectResultH1.addEventListener('mouseup', () => {
        if (event.target == selectResultH1) {
          result.innerHTML = '';
          result.classList.remove('show_result');
        }
      });
    }
  }
}

// Cambiar activities
const activityValues = [
  'Programador',
  'Diseñador',
  'Editor video',
  'Fotógrafo',
  'Frontend',
];
const activity = document.querySelector('.activity');
setInterval(() => {
  activity.textContent = (() => {
    let tempIndex = Math.floor(Math.random() * activityValues.length);
    let tempValue;
    activity.style.opacity = '0';
    function value() {}
    tempValue = activityValues[tempIndex];
    activity.style.opacity = '1';
    console.log(tempValue);
    return tempValue;
  })();
}, 8000);



// Hacer el opacity en el portafolio
const portfolioItems = document.querySelectorAll('.container_images>ul>li');

portfolioItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    portfolioItems.forEach((item) => {
      item.classList.add('hovered');
      console.log('añade')
    });
    item.classList.remove('hovered');
    console.log('elimina')
  });

  item.addEventListener('mouseout', () => {
    portfolioItems.forEach((item) => {
      item.classList.remove('hovered');
      console.log('eliminaOut')
    })
  });
});
