const $darkmodeBtn = document.querySelector('.darkmode-btn');
console.log($darkmodeBtn);

const $userColorTheme = localStorage.getItem('color-theme');
const $osColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

$darkmodeBtn.addEventListener('click', e => {
    console.log(e.target.checked);
    if(e.target.checked){
        document.documentElement.setAttribute('color-theme', 'dark');
    } else{
        document.documentElement.setAttribute('color-theme', 'light');
    }
});

