const toggleSwitch = document.querySelector('#toggle-theme');
toggleSwitch.addEventListener('change', switchTheme, false);


let localStorageThema = localStorage.getItem('theme');


if(localStorageThema === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  toggleSwitch.checked = true;
} else{
  document.documentElement.setAttribute('data-theme', 'light');
  toggleSwitch.checked = false;
};


function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');

      localStorage.setItem('theme', 'light');
    }
};

