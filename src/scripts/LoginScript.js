// função que a partir do cadastro do usuário valida se ele tem cadastro ou não

const userLocalStorageDados = JSON.parse(localStorage.getItem("usuario")) || []
const forms = document.querySelectorAll(".forms")[0]
forms.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const userEmail = document.querySelector("#userEmail")
    const userSenha = document.querySelector("#userPassword")
    let status = 0

    for(i in userLocalStorageDados){
        if(userLocalStorageDados[i] == userEmail.value){
            console.log(userLocalStorageDados[i] == userEmail.value)
            status += 1
            break
        }
    };

    for(i in userLocalStorageDados){
        if(userLocalStorageDados[i] == userSenha.value){
            console.log(userLocalStorageDados[i] == userSenha.value)
            status += 1
            break
        }
    };

    console.log(status)

    if(status == 2){
        window.alert("Conectado com sucesso!!!")
    } else{
        userEmail.style.border = "2px solid crimson"
    }
})

// window.addEventListener("load", ())
