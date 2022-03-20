const $darkmodeBtn = document.querySelector('.darkmode-btn');
const $osColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const $isUserColorTheme = localStorage.getItem('color-theme');
const getUserTheme = () => $isUserColorTheme ? $isUserColorTheme : $osColorTheme;

$darkmodeBtn.appendChild(document.createTextNode("다크모드"));
$darkmodeBtn.addEventListener('click', e => {
    if(e.target.checked){
        localStorage.setItem('color-theme', 'dark');
        document.documentElement.setAttribute('color-theme', 'dark');
    } else{
        localStorage.setItem('color-theme', 'light');
        document.documentElement.setAttribute('color-theme', 'light');
    }
});

// 첫 렌더링 시 색상이 적용안되는 이슈 해결
window.onload = () => {
    if (getUserTheme === 'dark') {
        localStorage.setItem('color-theme', 'dark');
        document.documentElement.setAttribute('color-theme', 'dark');
        $checkbox.setAttribute('checked', true)
    } else {
        localStorage.setItem('color-theme', 'light');
        document.documentElement.setAttribute('color-theme', 'light');
    }
}

// App쪽에서? window.onload X