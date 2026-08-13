import 'dart:io';

void main() {
  stdout.write('Fale com Bob: ');
  String fala = stdin.readLineSync() ?? '';

  String resposta;

  bool isPergunta = fala.trim().endsWith('?');
  bool isVazio = fala.trim().isEmpty;
  bool isGrito = fala.toUpperCase() == fala && fala.toLowerCase() != fala;

  if (isVazio) {
    resposta = 'Tudo bem. Seja desse jeito!';
  } else if (isGrito && isPergunta) {
    resposta = 'Calma, eu sei o que estou fazendo!';
  } else if (isGrito) {
    resposta = 'Uau, relaxe!';
  } else if (isPergunta) {
    resposta = 'Ok.';
  } else {
    resposta = 'Tanto faz.';
  }

  print(resposta);
}
