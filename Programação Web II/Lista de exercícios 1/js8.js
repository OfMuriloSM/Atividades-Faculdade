let ingredientesBase = ["farinha", "ovos", "leite"];
let ingredientesExtras = ["chocolate", "morango"];

let ingredientes = ingredientesExtras.concat(ingredientesBase);

ingredientes.push("baunilha");

ingredientes.pop();

ingredientes.reverse();

let resultado = ingredientes.join(" > ");

console.log(resultado);
