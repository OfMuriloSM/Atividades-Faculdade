num soma(num a, num b) {
  return a + b;
}

double media(List<num> numeros) {
  if (numeros.isEmpty) return 0;
  num total = 0;
  for (var numero in numeros) {
    total = soma(total, numero);
  }
  return total / numeros.length;
}

void main() {
  print(media([5, 10, 15, 20]));
}