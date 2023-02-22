
const veiculos = [];


let marcas = ['chevrolet', 'fiat','audi']

function cadastrarMarca(marca) {



  let obj = {
    marca: marca.value
    };
    veiculos.push(obj)


    console.log(`A marca ${marca.value} foi cadastrada com sucesso!`);
}

