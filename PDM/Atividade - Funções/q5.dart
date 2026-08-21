int multiplicar(int a, int b) {
  return a * b;
}

void main() {
  int Function(int, int) operacao = multiplicar;
  print(operacao(3, 4));
}