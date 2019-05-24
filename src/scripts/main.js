  // Отправка

var form = document.querySelector('.form');
var send = document.querySelector('.form__btn');

send.addEventListener('click', function (event) {
    event.preventDefault();

    if (validate(form)) {
        var data = {
            email: form.elements.email.value,
            password: form.elements.password.value,
            currency: form.elemetns.currency.checked,
            checkbox: form.elements.checkbox.checked
        };

        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'Ссылка на сервер');
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', function () {

            if (xhr.status === 200) {
                alert(xhr.response.message);
            } else {
                alert(xhr.response.message);
            }
        });
    }
});

// Валидация
function validate(form) {
    var valid = true;
    var elems = form.elements;
    var checkboxError = document.querySelector('.error-checkbox');
    var existError = document.querySelector('.error-exist');

    elems.email.nextElementSibling.nextElementSibling.classList.remove('active');
    existError.classList.remove('active');
    elems.email.style.borderColor = 'transparent';
    if (!elems.email.value) {
        elems.email.nextElementSibling.nextElementSibling.classList.add('active');
        elems.email.style.borderColor = '#E15433';
        valid = false;
    } else if (elems.email.value === 'samplemail@mail.com') {
        existError.classList.add('active');
        elems.email.style.borderColor = '#E15433';
        valid = false;
    }

    elems.password.nextElementSibling.nextElementSibling.classList.remove('active');
    elems.password.style.borderColor = 'transparent';
    if (elems.password.value.length < 4) {
        elems.password.nextElementSibling.nextElementSibling.classList.add('active');
        elems.password.style.borderColor = '#E15433';
        valid = false;
    }

    checkboxError.classList.remove('active');
    if (!elems.checkbox.checked) {
        checkboxError.classList.add('active');
        valid = false;
    }

    return valid;
}

// Ховер
function mouseOver(event) {
    event.target.style.borderColor = '#20A86B';
}

// Обратный ховеру эффект
function mouseOut(event) {
    if (!event.target.value) {
        event.target.style.borderColor = 'transparent';
    }
}

// Фокус
function placeFocus(event) {
    var target = event.target;
    if (!event.target.value) {
        target.nextElementSibling.style.top = 12 + 'px';
        target.nextElementSibling.style.fontSize = 12 + 'px';
        target.nextElementSibling.style.transform = 'translateY(0)';
    }
}

// Обратный эффект 
function placeBlur(event) {
    var target = event.target;
    if (event.target.value) {
        target.nextElementSibling.style.top = 12 + 'px';
        target.nextElementSibling.style.fontSize = 12 + 'px';
        target.nextElementSibling.style.transform = 'translateY(0)';
        target.style.borderColor = '#20A86B';
    } else {
        target.nextElementSibling.style.top = 50 + '%';
        target.nextElementSibling.style.fontSize = 16 + 'px';
        target.nextElementSibling.style.transform = 'translateY(-50%)';
        target.style.borderColor = 'transparent';
    }
}