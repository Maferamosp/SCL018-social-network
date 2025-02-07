import { userLogin, loginWithGoogle } from "../lib/index.js";

export const introPage = () => {
  // Contenedor principal.
  const introContainer = document.createElement('main');
  introContainer.className = 'introContainer';
  introContainer.id = 'introContainer';
  // Encabezado
  const header = document.createElement('header');
  header.className = 'introHeader';
  introContainer.appendChild(header);

  // sección
  const section = document.createElement('section');
  section.className = 'introForm';
  const intro = `
  <div class="container">
  <div class="container-iniciar"
    <h1>Inicia Sesión</h1>
    </div>
  <div class="input-container">
    <input type="email" id="mailLogin" placeholder="correo@example.com">
    <input type="password" id="passwordLogin" placeholder="contraseña">
  </div>
  <div class="btn-iniciarSesion">
    <button id="btnLogin" class="btn-iniciar">Iniciar Sesión</button>
  </div>
  
    <div class="container-google">
      <p>O ingresa con:</p>
      <img src='Images/btnGoogle.png' id='btnGoogle' class='btn-google'>    
      </div>
  <div class="containerRegister"
   <h3>¿No tienes cuenta ?</h3>
   <a href="#/registerPage" id="register" class="register">Registrate</a>
   </div>
  </div>`;
  section.innerHTML = intro;
  introContainer.appendChild(section);

  introContainer.querySelector('#btnLogin').addEventListener('click', () => {
    const email1 = document.getElementById('mailLogin').value;
    const password1 = document.getElementById('passwordLogin').value;
    userLogin(email1, password1);
  });
  introContainer.querySelector('#register').addEventListener('click', () => {
    window.location.hash = '#/registerPage';
  });
  introContainer.querySelector('#btnGoogle').addEventListener('click', () => {
    loginWithGoogle();
    window.location.hash = '#/wallPage';
  });
  return introContainer;
};
