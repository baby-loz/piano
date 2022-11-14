
/* Nota: a la persona que esté viendo este código espero que tenga en mente 
que tenía que salir temprano de todas las clases de la semana del 31 de octubre 
hasta el 3 de noviembre por que tenía ensayos y que no asistí a la clase del 4 de 
noviembre por que tenía un evento que era obligatorio que asistiera. Como falté a esa
clase (el 4 de noviembre) y no estaba 100% al corriente con las actividades, quisiera que 
usted supiera que intenté lo que pude sin estar súper segura de qué es lo que tenía que hacer. 
Hice lo mejor que pude bajo las circunstancias que tenía. Gracias! :) */

function playNote(key) {
    // Obtener la nota
    const noteAudio = document.getElementById(key.dataset.note);
    // Resetear la ejecución de la nota
    noteAudio.currentTime = 0;
    // Utilizar método play() de la nota
    noteAudio.play();
  
    // Añadimos clase active
    key.classList.add('active');
    // Agregamos un event listener al estado ended del evento keydown
    noteAudio.addEventListener('ended', () => {
      // Cuando termine de reproducirse el sonido, removemos clase active
      key.classList.remove('active');
    });
  }
  
  const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
  const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
  
  const keys = document.querySelectorAll('.key');
  const whiteKeys = document.querySelectorAll('.key.white');
  const blackKeys = document.querySelectorAll('.key.black');
  
  keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);
    console.log(whiteKeys[whiteKeyIndex]);
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
  });




// #name #age #likesMusic
const nombre = 'Baby';
const age = 15;
const likesMusic = true;
const guessedAge = 17;
const isGuessRight = false;

const nombreElement = document.querySelector('span#nombre');
const ageElement = document.querySelector('span#age');
const likesMusicElement = document.querySelector('span#likesMusic');
const guessedAgeElement = document.querySelector('span#guessedAge');
const isGuessRightElement = document.querySelector('span#isGuessRight');

nombreElement.textContent = nombre;
ageElement.textContent = age;
if (likesMusic == true) {
    likesMusicElement.textContent = 'me gusta la música';
} else {
    likesMusicElement.textContent = 'NO me gusta la música';
}
guessedAgeElement.textContent = guessedAge;

if(isGuessRightElement == true){
  isGuessRightElement.textContent = 'correcto.'
} else {
  isGuessRightElement.textContent = 'incorrecto.'
}


/* const sect = document.querySelector('section') ;
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);
const linkPara = document.createTextNode(' - the premier source for web development knowledge');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
*/

/* console.log(name.nodeName);
console.log(age.nodeName);
console.log(likesMusic.nodeName);


const linkGoogle = document.querySelector('a#link_google');
linkGoogle.textContent = 'Yahoo' ;
linkGoogle.href = 'yahoo.com' ;
linkGoogel.id = 'link_yahoo' ;

const link_yahoo = document.querySelector('a#link_yahoo');
link_yahoo.textContent = 'Si es Yahoo';

linkGoogle.href = 'yahoo.com.mx'



const primerDiv = document.querySelector('div');
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un nuevo p :)';

primerDiv.appendChild(nuevoParrafo);
// codigo de abajo quita el de arriba

//primerDiv.removeChild(nuevoParrafo)
nuevoParrafo.remove()


console.log(nombre.nodeName);
console.log(age.nodeName);
console.log(likesMusic.nodeName);

const linkGoogle = document.querySelector('a#link_google')

const googleClicked = () => {
    console.log('Google was clicked')
}

linkGoogle.addEventListener('click', googleClicked());

const teclaPresionada = () => {
    alert('Presionaron tecla');
}

//document.addEventListener('keydown', teclaPresionada)


*/
