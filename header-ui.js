import { loginRegisterOverlay } from '/register/';

export const headerUI = () => {
  const menuEvents = () => {
    const headerMenu = document.querySelectorAll('.menu-default');
    headerMenu.forEach( e => e.addEventListener( 'mouseover', (e) => {
      const targetDiv = e.target.closest('div');
      targetDiv.setAttribute('class', 'menu-select');
      targetDiv.addEventListener( 'mouseleave', (e) => {
        e.target.setAttribute('class', 'menu-default');
      }, {once: true})
    } ));
  };

  const userEvents = () => {

    const registerButton = document.querySelector('#sign-up');
    const loginButton = document.querySelector('#login');

    registerButton.addEventListener('click', (e) => {
      loginRegisterOverlay('register');
    });
    loginButton.addEventListener('click', (e) => {
      loginRegisterOverlay('login');
    })
  };

  menuEvents();
  userEvents();

};
