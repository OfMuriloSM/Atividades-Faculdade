import 'dart:io';

void main() {
  stdout.write('Digite um número: ');
  int numero = int.parse(stdin.readLineSync() ?? '0');

  List<int> divisores = [];
  for (int i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      divisores.add(i);
    }
  }

  print(divisores);
}
