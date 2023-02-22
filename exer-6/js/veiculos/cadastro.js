let modelos = localStorage.getItem("modelos")
  ? JSON.parse(localStorage.getItem("modelos"))
  : [];

let veiculos = localStorage.getItem("veiculos")
  ? JSON.parse(localStorage.getItem("veiculos"))
  : [];

function cadastrarVeiculo() {
  let marca_el = document.getElementById("marca");
  let modelo_el = document.getElementById("modelo");
  let imagem_el = document.getElementById("imagem");
  let cor_el = document.getElementById("cor");
  let km_el = document.getElementById("km");
  let valor_el = document.getElementById("valor");

  
  const obj = {
    marca: marca_el.value,
    modelo: modelo_el.value,
    imagem: imagem_el.value,
    km: km_el.value,
    valor: valor_el.value,
    cor: cor_el.value,
  };
  veiculos.push(obj);
  localStorage.setItem('veiculos', JSON.stringify(veiculos))
  alert("Veículo cadastrado com sucesso!");
  console.log(veiculos);
}

function mostrarMarca() {
  modelos.map((modelo) => {
    let select_el = document.getElementById('marca')
    let option = document.createElement('option')
    select_el.appendChild(option)
    option.value = modelo.marca;
    option.innerText = modelo.marca;
  })
}



function mostrarModelo() {
  modelos.map((modelo) => {
    let select_el = document.getElementById('modelo')
    let option = document.createElement('option')
    select_el.appendChild(option)
    option.value = modelo.modelo;
    option.innerText = modelo.modelo;
  })
}
mostrarMarca()
function inicio() {
  let marca_el = document.getElementById("marca");
  marca_el.addEventListener('input')
  
}
mostrarModelo()