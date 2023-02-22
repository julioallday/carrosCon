







// Crie uma lista no escopo global para armazenar os veiculos que serão cadastradas

const veiculos = [];

const veiculosMock = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    km: 50000,
    valor: 75000.00,
    cor: "Prata",
    vendido: true
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    km: 25000,
    valor: 150000.00,
    cor: "Vermelho",
    vendido: false
  },
  {
    marca: "Chevrolet",
    modelo: "Camaro",
    km: 10000,
    valor: 200000.00,
    cor: "Preto",
    vendido: true
  },
  {
    marca: "Honda",
    modelo: "Civic",
    km: 80000,
    valor: 55000.00,
    cor: "Branco",
    vendido: false
  }
];



// Chame a função para cadastrar o Veículo.

// Como parâmetro receba o nome do modelo, nome da marca e o nome do veículo, km, valor e cor.

function cadastrarVeiculo(modelo, marca, km, valor, cor) {

  let obj = {
    modelo: modelo,
    marca: marca,
    km: km,
    valor: valor,
    cor: cor
  };

  veiculos.push(obj);
// A cada cadastro imprima uma mensagem "Veículo cadastrado com sucesso!"

  console.log(`Veículo cadastrado com sucesso!`);
}
veiculosMock.forEach(element => {
cadastrarVeiculo(element.modelo, element.marca, element.km, element.valor, element.cor)
  
});
// Após a chamada imprima os veículos cadastrados

console.log(veiculos);
