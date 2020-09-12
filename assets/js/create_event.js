const checkboxNoLink_event = document.querySelector('#noLink__online_event');
const link__online_event = document.querySelector('#link__online_event');

function mostraAlerta(element){
    const op_online = document.querySelector('.online_event');
    const op_physical = document.querySelector('.physical_event');
    const typeEvent = document.querySelector('#form_typeEvent');

    if(op_online.style.display == 'flex' || op_physical.style.display == 'flex'){
        op_online.style.display = 'none';
        op_physical.style.display = 'none';
    }

    if(element.value == 'Evento Online'){
        op_online.style.display = 'flex';
    } else {
        op_physical.style.display = 'flex';
    } 
}

checkboxNoLink_event.addEventListener('click', () => {
    if(checkboxNoLink_event.checked){
        link__online_event.disabled = true;
        link__online_event.placeholder = "";
        link__online_event.value = "";
    } else if(!checkboxNoLink_event.checked) {
        link__online_event.disabled = false;
        link__online_event.placeholder = "Insira o link para acessar seu evento";

    }
});
link__online_event.addEventListener('pointerup', () => {
    if(link__online_event.disabled){
        alert('Uai locão, esqueceu que marcou que não tem link ainda????');
    }
});