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

    registerButton.addEventListener('click', (e) => {console.log('Server not set up on github - backend has been implemented on the dev localhost machine');});
    loginButton.addEventListener('click', (e) => {
      console.log('Server not set up on github - backend has been implemented on the dev localhost machine');
    })
  };

  menuEvents();
  userEvents();

};
