//Variables
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const modal = document.querySelector('.modal-card');
const body = document.querySelector('.body');

//Funcionalidad del boton abrir
btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
    btnOpen.style.display= 'none';
    body.style.backgroundColor = 'rgba(0,0,0,0.7)';
})

//Funcionalidad del boton cerrar
btnClose.addEventListener('click', () => {
    modal.classList.remove('active');
    btnOpen.style.display = 'block';
    body.style.backgroundColor='#FFF';
});

