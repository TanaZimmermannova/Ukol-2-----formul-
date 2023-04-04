const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

const formElm = document.querySelector (".container")
formElm.addEventListener ("submit", (e) => {
    e.preventDefault ();
    let emailInput = document.querySelector ("#email");
    let emailElm = emailInput.value;
    let hesloInput = document.querySelector ("#heslo");
    let hesloElm = hesloInput.value;
    let alert = document.querySelector (".alert");
    alert.innerHTML = "";
    console.log (emailElm);
    console.log (hesloElm);
    if (emailElm === user.email && hesloElm === user.password) {
        formElm.classList.add("hidden");
        document.body.innerHTML = '<h1 class="prihlaseni"> Přihlášený uživatel: Bartoloměj.</h1>';
    } else {
        alert.innerHTML += "<h1>Neplatné údaje</h1>";
        emailInput.value = emailElm;
        hesloInput.value = "";
    }
})

