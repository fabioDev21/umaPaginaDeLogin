
const todasLetras = "abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const caracteresEspeciais = `!@#$%&*(_+=-)`
const todosNumeros = `1234567890`

function controiSugestaoSenha(
    tamanho = 12,
    querLetras = true, 
    querNumeros = true, 
    querCaracteres = true){
    
    const senhaTotal = []
    const tamanhoSenha = tamanho
    

    for(let i = 0; i <= tamanhoSenha; i++){
        
        if(senhaTotal.length >= tamanhoSenha){
            let diferenca = (senhaTotal.length - tamanhoSenha)
    
            for(let x = 0; x < diferenca; x++){
                senhaTotal.shift()
            }
            break
        }
        
        if(querLetras){
            senhaTotal.push(todasLetras.charAt(Math.floor(Math.random() * todasLetras.length)))
        }
        if(querNumeros){
            senhaTotal.push(todosNumeros.charAt(Math.floor(Math.random() * todosNumeros.length)))
        }
        if(querCaracteres){
            senhaTotal.push(caracteresEspeciais.charAt(Math.floor(Math.random() * caracteresEspeciais.length))) 
        }
    }

    let senhaTela = document.querySelector("#textoSenha")
    senhaTela.textContent = senhaTotal.join("")
}


const refreshBtn = document.querySelector("#refreshBtn")
refreshBtn.addEventListener("click", () => {
    controiSugestaoSenha()
})

const copyBtn = document.querySelector("#copyBtn")
copyBtn.addEventListener("click", async () => {
    let senhaTela = document.querySelector("#textoSenha").textContent
    await navigator.clipboard.writeText(senhaTela)
})

const configsSenhaBtn = document.querySelector("#configsSenhaBtn")
configsSenhaBtn.addEventListener("click", () => {
    const mostraSenha = document.querySelectorAll(".configs__senha")[0]
    mostraSenha.classList.toggle("hidden")
})

window.addEventListener("load", controiSugestaoSenha())