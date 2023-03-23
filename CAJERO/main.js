const database = [
    { email: "daniel@gmail.com", password: "1234", saldo: 200 },
    { email: "patricio@gmail.com",password: "1234", saldo: 290 },
    { email: "andro@gmail.com", password: "1234", saldo: 67 },
]

const buttonLogin = document.getElementById('button-login')

buttonLogin.addEventListener('click', () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    //Información PERSISTENTE
    // Información que tiene que guardarse independientemente si
    // cierro la pestaña o no

    database.forEach((user) => {
        if(user.email === email.value){
            if(user.password === password.value){
                localStorage.setItem('email', user.email)
                localStorage.setItem('saldo', user.saldo)
                localStorage.setItem('isAuth', true)
                root.removeChild(childLogin)
                root.innerHTML = functionInnerHTML()
                console.log('Iniciaste sesión')
            }
        }
    })
})


const root = document.getElementById('root')
const childLogin = document.getElementById('child-login')


const functionInnerHTML = () => {
    const email = localStorage.getItem('email');
    const saldo = localStorage.getItem('saldo');

    return `
    <div class="container height-screen-center" id="child-home">
    <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-pills card-header-pills">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">Bienvenido al banco</h5>
          <p class="card-text">${email}</p>
          <p class="card-text">Tu saldo es de:</p>
          <a href="#" class="btn btn-primary">${saldo}</a>
        </div>
      </div>
</div>`
}
// console.log(childLogin)
// console.log(root.children)