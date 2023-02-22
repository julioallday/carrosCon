let modelos = localStorage.getItem("modelos")
  ? JSON.parse(localStorage.getItem("modelos"))
  : [];

let marcas = localStorage.getItem("marcas")
  ? JSON.parse(localStorage.getItem("marcas"))
  : [];

  const inicio = () => {
    mostrarCadastro()
  
  }


function cadastrarModelo() {
  let marca_el = document.getElementById("marca");
  let modelo_el = document.getElementById("modelo");
  if(modelo_el.value != false){
    const obj = {
      modelo: modelo_el.value,
      marca: marca_el.value,
    };
    
    modelos.push(obj);
    localStorage.setItem('modelos', JSON.stringify(modelos))
    // console.log(modelo_el.value);
    console.log("Modelo cadastrado com sucesso!");
    // console.log(modelos);
    // console.log(marcas);
  } else{
    alert('Digite um modelo para continuar o cadastro!')
  }
}

function mostrarCadastro(){
  for(let marca of marcas){
    let select_el = document.getElementById('marca')
    let option = document.createElement('option')
    option.value = marca.nome;
    select_el.appendChild(option)
    option.innerText = `${marca.nome}`
  }
}

inicio()