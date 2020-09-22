const checkboxNoLink_event = document.querySelector('#noLink__online_event');
const link__online_event = document.querySelector('#link__online_event');

function exibeTipoEvento(element){
    const op_online = document.querySelector('.online_event');
    const op_physical = document.querySelector('.physical_event');
    const classStyle_buttonLocalEvent = 'enable__button_content_item';
    const classStyle_border_eventPhysical = 'border_eventPhysical';
    const classStyle_border_eventOnline = 'border_eventOnline';

    const btn_physical = document.querySelector('#button_eventPhysical');
    const btn_online = document.querySelector('#button_eventOnline');
    const container_content = document.querySelector('.container__content');

    if(element.id == 'button_eventPhysical'){
        displayNone(op_online);

        disableClass(btn_online, classStyle_buttonLocalEvent);
        disableClass(container_content, classStyle_border_eventOnline);

        enableClass(btn_physical, classStyle_buttonLocalEvent);
        enableClass(container_content, classStyle_border_eventPhysical);

        displayDiv(op_physical, 'flex');

    } else if(element.id == 'button_eventOnline'){
        displayNone(op_physical);


        disableClass(btn_physical, classStyle_buttonLocalEvent);
        disableClass(container_content, classStyle_border_eventPhysical);

        enableClass(btn_online, classStyle_buttonLocalEvent);
        enableClass(container_content, classStyle_border_eventOnline);

        displayDiv(op_online, 'flex');
    }
}

function displayNone(op){op.style.display = 'none';}
function displayDiv(op, type='flex'){op.style.display = type;}

function disableClass(div, classe){div.classList.remove(classe);}
function enableClass(div, classe){div.classList.add(classe);}




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