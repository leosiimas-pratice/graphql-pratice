const { usuarios, perfis } = require('../data/db')

module.exports = {    
    ola() {
        return 'Basta retornar uma string'
    },
    horaAtual() {            
        return new Date
    },
    usuarioLogado() {
        return{
            id: 1,
            nome: 'Leonardo',
            email: 'leonardo@email.com',
            idade: 23,
            salario_real: 12345.99,
            vip: true
        }
    },
    produto() {
        return{
            nome: 'Celular',
            preco: 100
        }
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b
        return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, args) {
        const selecionados =  usuarios
            .filter(u => u.id == args.id)
        return selecionados ? selecionados[0] : null
    },
    perfis(){
        return perfis
    },
    perfil(_, { id }){
        const selecionados =  perfis
            .filter(p => p.id == id)
        return selecionados ? selecionados[0] : null
    }
}