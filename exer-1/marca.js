// Crie uma variavél no escopo global para armazenar as marcas que serão cadastradas pela função.

const veiculos = [];

// Crie uma função para cadastrar a marca de um veículo.

let marcas = ['chevrolet', 'fiat','audi']

function cadastrarMarca(marca) {
// Como parâmetro receba o nome da marca


  let obj = {
    marca: marca
    };
    veiculos.push(obj)

// A cada cadastro IMPRIMA uma mensagem "Marca cadastrada com sucesso!"

    console.log(`A marca ${marca} foi cadastrada com sucesso!`);
}

// Chame a função e cadastre pelo menos três veículos


marcas.forEach(element => {
    cadastrarMarca(element)
});





// Após a chamada imprima as marcas cadastradas
