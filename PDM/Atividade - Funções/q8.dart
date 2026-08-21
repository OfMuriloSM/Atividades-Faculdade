int calcularPontosDeEnergia(int nivel, List<int> itensMagicos) {
  Set<int> multiplos = {};

  for (int item in itensMagicos) {
    if (item <= 0) continue;
    for (int i = item; i < nivel; i += item) {
      multiplos.add(i);
    }
  }

  int soma = 0;
  for (int numero in multiplos) {
    soma += numero;
  }

  return soma;
}

void main() {
  print(calcularPontosDeEnergia(20, [3, 5]));
}