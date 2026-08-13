import 'dart:io';

void main() {
  Map<String, String> complemento = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U',
  };

  stdout.write('Digite a fita de DNA: ');
  String dna = (stdin.readLineSync() ?? '').toUpperCase();

  String rna = '';
  for (int i = 0; i < dna.length; i++) {
    String nucleotideo = dna[i];
    rna += complemento[nucleotideo] ?? '';
  }

  print(rna);
}
