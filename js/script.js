//* API Clima
//! ---------
async function getWeather() {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.70256&current_weather=true');
    const data = await response.json();
    document.getElementById('weather').innerText = `Clima en Málaga: ${data.current_weather.temperature}°C`;
}
getWeather();

//* Me gusta Productos
//! ------------------
document.querySelectorAll('.sc-onsale__like').forEach(button => {
    button.addEventListener('click', () => {
        button.querySelector('i').classList.toggle('fa-solid');
    });
});

//* Validación Formulario
//! ---------------------
document.getElementById("contactForm").onsubmit = function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (nombre && emailRegex.test(email)) {
        alert("Formulario enviado correctamente");
    } else {
        alert("Por favor, revisa tus datos");
    }
};

//* Dark Mode
//! ---------
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
}
if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
}

//* Botones Flotantes Redes Sociales
//! --------------------------------
const floatingBtn = document.querySelector(".sc-floating__btn");
const floatingMenu = document.querySelector(".sc-floating");

floatingBtn.addEventListener("click", () => {
  floatingMenu.classList.toggle("sc-floating--active");
});
