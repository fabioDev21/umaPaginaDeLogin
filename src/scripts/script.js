// desenvolvendo função que aleatoriza senha
const todasLetras = "abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const caracteresEspeciais = `!@#$%&*(_+=-)`
const todosNumeros = `1234567890`

function controiSugestaoSenha(tamanho = 12, querLetras = true, querNumeros = true, querCaracteres = true){
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
}
controiSugestaoSenha()
const novaSenha = senhaTotal.join("")
console.log("\nNova senha: \n" + novaSenha)
console.log("Tamanho da senha: " + novaSenha.length)

// função que a partir do cadastro do usuário valida se ele tem cadastro ou não
