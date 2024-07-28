// função que a partir do cadastro do usuário valida se ele tem cadastro ou não

const userLocalStorageDados = JSON.parse(localStorage.getItem("usuario")) || []
const forms = document.querySelectorAll(".forms")[0]
forms.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const userEmail = document.querySelector("#userEmail").value
    const userSenha = document.querySelector("#userPassword").value
    let status = 0

    for(i in userLocalStorageDados){
        if(userLocalStorageDados[i] == userEmail){
            console.log(userLocalStorageDados[i] == userEmail)
            status += 1
            break
        }
    };

    for(i in userLocalStorageDados){
        if(userLocalStorageDados[i] == userSenha){
            console.log(userLocalStorageDados[i] == userSenha)
            status += 1
            break
        }
    };

    console.log(status)

    if(status == 2){
        window.alert("Conectado com sucesso!!!")
    } else{
        window.alert("Verifique os dados novamente...")
    }
})

// window.addEventListener("load", ())
