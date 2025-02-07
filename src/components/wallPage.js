import { logOut } from '../lib/index.js';
import { showPost } from '../lib/postTemplate.js';

export const wallPage = () => {
  const wallContainer = document.createElement('main');
  wallContainer.className = 'wallContainer';
  wallContainer.id = 'wallContainer';

  const header = document.createElement('header');
  header.className = 'wallHeader';
  wallContainer.appendChild(header);

  const logo = document.createElement('img');
  logo.className = 'logoImage';
  logo.src = 'Images/logo.png';
  logo.alt = 'logo';
  header.appendChild(logo);

  const iconsDiv = document.createElement('div');
  iconsDiv.className = 'icons-div';
  header.appendChild(iconsDiv);

  const publishImage = document.createElement('img');
  publishImage.className = 'publish-image';
  publishImage.src = 'Images/botonPostBlanco.png';
  publishImage.id = 'createPostIcon1';
  iconsDiv.appendChild(publishImage);

  const homeImage = document.createElement('img');
  homeImage.className = 'home-image';
  homeImage.src = 'Images/home.png';
  homeImage.id = 'refreshHome1';
  iconsDiv.appendChild(homeImage);

  const logOutImage = document.createElement('img');
  logOutImage.className = 'logOut-image';
  logOutImage.src = 'Images/exitImage.png';
  logOutImage.id = 'logOut1';
  iconsDiv.appendChild(logOutImage);

  const home = document.createElement('section');
  home.className = 'homeSection';
  const post = `
  <div class="home-post" id="homePost"></div>
    <footer class="footer">
    <img class="refresh-home"id="refreshHome" alt="" src="./Images/home.png" />
    <img class="create-post-icon" id="createPostIcon" alt="Publicar" src="./Images/botonPostBlanco.png"/>
    <img class="log-out  "id="logOut" alt="exit" src="./Images/exit.png" />
    </footer>`;
  home.innerHTML = post;
  wallContainer.appendChild(home);
  showPost();

  // funciones para cerrar sesión , botón crear post y refrescar wallpage
  wallContainer.querySelector("#logOut").addEventListener("click", () => {

    logOut();
  });
  wallContainer.querySelector('#createPostIcon').addEventListener('click', () => {
    window.location.hash = '#/post';
  });
  wallContainer.querySelector('#createPostIcon1').addEventListener('click', () => {
    window.location.hash = '#/post';
  });
  wallContainer.querySelector('#logOut').addEventListener('click', () => {
    logOut();
  });
  wallContainer.querySelector('#logOut1').addEventListener('click', () => {
    logOut();
  });
  wallContainer.querySelector('#refreshHome').addEventListener('click', () => {
    window.location.reload;
  });
  return wallContainer;
};
