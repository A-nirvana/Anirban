const scroller = document.getElementById('vector')
const skillMenu = document.getElementById('skill-menu')
const root = document.querySelector(':root')
const darkButton = document.querySelector('.dark-container')

scroller.addEventListener('click',()=>{
    skillMenu.scrollIntoView({behavior: "smooth"})
})

darkButton.addEventListener('click',()=>{
    darkButton.classList.toggle('light-container');
    setColorScheme();
})

const setColorScheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      root.classList.toggle('light-theme');
    } else {
      root.classList.toggle('dark-theme');
    }
  };
