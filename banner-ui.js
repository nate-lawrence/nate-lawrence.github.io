export const bannerUI = () => {

  const bannerEvents = () => {
    const bannerIcons = Array.from(document.querySelectorAll('.banner-icon-default'));
    bannerIcons.forEach( e => {
      e.addEventListener('mouseenter', e => {
        e.target.setAttribute('class', 'banner-icon-select');
        e.target.addEventListener('mouseleave', e => {
          e.target.setAttribute('class', 'banner-icon-default');
        }, {once: true});
      });
    });
  };
  bannerEvents();

};
