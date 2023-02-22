// Crie uma variável no escopo global para armazenar os modelos que serão cadastradas

const veiculos = [];

// Crie a função para cadastrar um Modelo de Veículo.

let modelos = ["cruze", "argo", "a3"];

function cadastrarModelo(modelo) {
  // Como parâmetro receba o nome do modelo e o nome da marca

  let obj = {
    modelo: modelo,
  };

  veiculos.push(obj);
  // A cada cadastro imprima uma mensagem "Modelo cadastrado com sucesso!"

  console.log(`O modelo ${modelo} foi cadastrado com sucesso!`);
}

modelos.forEach((element) => {
  cadastrarModelo(element);
});

// Após a chamada imprima os veículos cadastrados

console.log(veiculos);
