import 'dart:io';
import 'dart:math';

void main() {
  List<String> opcoes = ['pedra', 'papel', 'tesoura'];
  Random random = Random();

  stdout.write('Escolha pedra, papel ou tesoura: ');
  String jogador = (stdin.readLineSync() ?? '').toLowerCase().trim();
  String computador = opcoes[random.nextInt(3)];

  print('Computador escolheu: $computador');

  if (!opcoes.contains(jogador)) {
    print('Opção inválida.');
    return;
  }

  if (jogador == computador) {
    print('Empate!');
  } else if ((jogador == 'pedra' && computador == 'tesoura') ||
      (jogador == 'papel' && computador == 'pedra') ||
      (jogador == 'tesoura' && computador == 'papel')) {
    print('Você venceu!');
  } else {
    print('Você perdeu!');
  }
}
