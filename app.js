const name= document.getElementById("nameExample");
const firstPart= document.getElementById("firstPart");
let score= 0
let wrong=0

function respuestaCorrecta(){
score++
}

function respuestaIncorrecta(){
    wrong++
    }

function jugar(){
    let nameOne= name.value
    firstPart.innerHTML= `Hola ${nameOne} elige entre estas dos categorias para empezar: 
     <br></br>
    <button class= "enter" onClick="enter()">Laboratoria</button>
    <button class= "enter" onClick="enterTwo()">Redes Sociales</button>`
};

//Laboratoria
function enter(){
    let photo= document.getElementById("oneImg")
    photo.src="https://pbs.twimg.com/profile_images/1013816272662872065/wOeb-wXm_400x400.jpg"
    score= 0
    wrong= 0
    firstPart.innerHTML= `¿A qué público esta dirigido Laboratoria? 
 <br></br>
 <button onClick="option(); respuestaCorrecta()">Solo mujeres</button>
 <button onClick="option(); respuestaIncorrecta()">Solo hombres</button>
 <button onClick="option(); respuestaIncorrecta()">Hombres y mujeres</button>`
};

function option(){
    firstPart.innerHTML= `¿Cuál es el objetivo de Laboratoria? 
 <br></br>
 <button onClick="optionTwo(); respuestaCorrecta()">Reducir la brecha de género dentro de la industria tech</button>
 <br></br><button onClick="optionTwo(); respuestaIncorrecta()">Destruir el patriarcado</button>
 <button onClick="optionTwo(); respuestaIncorrecta()">Salvar el mundo</button>` 
}

function optionTwo(){
    firstPart.innerHTML= `¿Qué lenguaje de programacion se enseña en Laboratoria? 
 <br></br>
 <button onClick="optionThree(); respuestaIncorrecta()">Inglés</button>
 <button onClick="optionThree(); respuestaIncorrecta()">Java</button>
 <button onClick="optionThree(); respuestaCorrecta()">JavaScript</button>` 
}

function optionThree(){
    firstPart.innerHTML= `¡Gracias por participar de la Super Trivia! 
 <br></br>
 <button onClick="resultadoLaboratoria()">Mostrar resultado</button>` 
}

function resultadoLaboratoria(){
    firstPart.innerHTML= `Tu resultado fue de ${score} correctas y ${wrong} incorrectas.
 <br></br>
 <button onClick="jugar()">Inicio</button>` 
}

//Redes Sociales
function enterTwo(){
    let photoTwo= document.getElementById("oneImg")
        photoTwo.src="https://cdn3.cnet.com/img/cxU7R1Qv0mg-ISnJyCVUK-jvvzg=/570x0/2015/02/02/a08d7041-ee26-4eb7-8a52-9024acb6d251/social-media-gwi.png"
    score= 0
    wrong= 0
    firstPart.innerHTML= `¿Cuál de estas app es una R.R.S.S.? 
 <br></br>
 <button onClick="options(); respuestaIncorrecta()">Google</button>
 <button onClick="options(); respuestaCorrecta()">Instagram</button>
 <button onClick="options(); respuestaIncorrecta()">Spotify</button>`
};

function options(){
    firstPart.innerHTML= `¿De qué app es propietario Facebook? 
 <br></br>
 <button onClick="optionsTwo(); respuestaCorrecta()">WhatsApp</button>
 <button onClick="optionsTwo(); respuestaIncorrecta()">Apple</button>
 <button onClick="optionsTwo(); respuestaIncorrecta()">Telegram</button>` 
}

function optionsTwo(){
    firstPart.innerHTML= `¿Cuál de estas R.R.S.S. es la más antigua? 
 <br></br>
 <button onClick="optionsthree(); respuestaCorrecta()">MySpace</button>
 <button onClick="optionsThree(); respuestaIncorrecta()">Fotolog</button>
 <button onClick="optionsThree(); respuestaIncorrecta()">Facebook</button>` 
}

function optionsThree(){
    firstPart.innerHTML= `¿Quieres conocer tus resultados?
 <br></br>
 <button onClick="resultadoLaboratoria()"> Calcular </button>` 
}

function resultadoLaboratoria(){
    firstPart.innerHTML= `Tu resultado fue: <br></br> ${score} respuestas correctas y ${wrong} incorrectas.
 <br></br>
 ¡Gracias por participar de la Super Trivia! <br></br>
 <button onClick="jugar()">Volver a Empezar</button>` 
}