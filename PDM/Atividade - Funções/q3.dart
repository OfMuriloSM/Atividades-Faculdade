double desconto(double preco, [double percentual = 10.0]) {
  return preco - (preco * (percentual / 100));
}

void main() {
  print(desconto(100));
  print(desconto(100, 25));
}