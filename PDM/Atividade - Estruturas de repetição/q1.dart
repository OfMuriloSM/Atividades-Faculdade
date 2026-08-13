import 'dart:io';

void main() {
  stdout.write('Digite seu nome: ');
  String nome = stdin.readLineSync() ?? '';
  stdout.write('Digite sua idade: ');
  int idade = int.parse(stdin.readLineSync() ?? '0');

  print('Olá $nome, você tem $idade anos.');

  int anoAtual = DateTime.now().year;
  int anoNascimento = anoAtual - idade;
  print('Você nasceu em $anoNascimento.');

  for (int ano = anoNascimento; ano <= anoAtual; ano++) {
    if (ano == anoNascimento) {
      print('No ano de $ano você nasceu!');
    } else if (ano == anoAtual) {
      print('No ano de $ano você tem $idade anos.');
    } else {
      print('No ano de $ano você tinha ${ano - anoNascimento} anos.');
    }
  }

  int anosPara100 = 100 - idade;
  print('Faltam $anosPara100 anos para completar 100 anos.');
}
