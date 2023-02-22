let marcas = localStorage.getItem('marcas') ? JSON.parse(localStorage.getItem('marcas')) : [];

function cadastrarMarca() {
  let marca_el = document.getElementById("nome-marca");
  if (marca_el.value != false) {
    marcas.push({ nome: marca_el.value })
    localStorage.setItem('marcas', JSON.stringify(marcas))
    console.log("Marca cadastrada com sucesso!");
    window.location.reload();
  } else {
    alert('Insira o nome da marca para continuar o cadastro!')
  } 
}
console.log(marcas);

// for (let i = 0; i < marcas.length; i++) {
//   let marcasLocal = ["peugeot", "honda", "chevrolet"];
//   cadastrarMarca(marcasLocal[i]);
// }
