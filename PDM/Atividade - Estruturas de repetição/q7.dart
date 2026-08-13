import 'dart:io';

void main() {
  stdout.write('Digite N: ');
  int n = int.parse(stdin.readLineSync() ?? '0');

  int soma = 0;
  int somaQuadrados = 0;

  for (int i = 1; i <= n; i++) {
    soma += i;
    somaQuadrados += i * i;
  }

  int quadradoDaSoma = soma * soma;
  int diferenca = quadradoDaSoma - somaQuadrados;

  print(diferenca);
}
