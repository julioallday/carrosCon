let veiculos = localStorage.getItem("veiculos")
  ? JSON.parse(localStorage.getItem("veiculos"))
  : [
      {
        marca: "peugeot",
        modelo: "306",
        km: 65468,
        valor: 684668,
        cor: "blue",
      },
      {
        marca: "honda",
        modelo: "fit",
        km: 68468,
        valor: 8642684,
        cor: "yellow",
      },
      {
        marca: "chevrolet",
        modelo: "tucson",
        km: 84684,
        valor: 8622682,
        cor: "green",
      },
    ];

function listarVeiculos() {
  let objs = [];
  for (const veiculo of veiculos) {
    let obj = {
      modelo: veiculo.modelo,
      km: veiculo.km,
      valor: veiculo.valor,
      cor: veiculo.cor,
      foiVendido: veiculo.foiVendido ? true : false,
    };
    objs.push(obj);
  }
  return objs;
}

function mostraVeiculos() {
  let veiculos = listarVeiculos();
  veiculos.map((element) => {
    let container_el = document.getElementById("container");
    let card_el = document.createElement("div");
    card_el.classList = "card";
    container_el.appendChild(card_el);
    card_el.innerHTML = `
    <img src="https://source.unsplash.com/random/" alt="">
    <p id="marca">Marca: ${element.marca}</p>
    <p id="modelo">Modelo: ${element.modelo}</p>
    <p id="km">Km: ${element.km}</p>
    <p id="valor">Valor: ${element.valor}</p>
    <p id="cor">Cor: ${element.cor}</p>`;
  });
}
mostraVeiculos();
