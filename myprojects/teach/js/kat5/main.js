const input = document.getElementById('pass');

const passwords = ["user", "wiosna"];
const messages = ["Wyjechałam na zawsze!", "Wiosna! Zaczyna się robić zielono!"];

const div = document.querySelector('.message');

const showMessage = (e) => {

    div.textContent = '';

    const textInput = e.target.value;

    passwords.forEach((password, index) => {
        if(password.toLocaleLowerCase() === textInput.toLowerCase()){
            div.textContent = messages[index];
        }
    })
}

input.addEventListener('input', showMessage);

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})