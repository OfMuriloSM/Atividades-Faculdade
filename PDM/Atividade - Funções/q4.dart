List<num> maximo_minimo(List<num> numeros) {
  if (numeros.isEmpty) return [];
  
  num maximo = numeros[0];
  num minimo = numeros[0];

  for (var numero in numeros) {
    if (numero > maximo) maximo = numero;
    if (numero < minimo) minimo = numero;
  }

  return [maximo, minimo];
}

void main() {
  print(maximo_minimo([4, 7, 2, 8, 10, 3]));
}