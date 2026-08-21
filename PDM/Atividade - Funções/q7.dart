double calcularIdade(int segundos, String planeta) {
  const double segundosPorAnoTerrestre = 31557600.0;
  
  Map<String, double> periodosOrbitais = {
    "Mercúrio": 0.2408467,
    "Vênus": 0.61519726,
    "Terra": 1.0,
    "Marte": 1.8808158,
    "Júpiter": 11.862615,
    "Saturno": 29.447498,
    "Urano": 84.016846,
    "Netuno": 164.79132,
  };

  if (!periodosOrbitais.containsKey(planeta)) {
    throw ArgumentError("Planeta não encontrado");
  }

  double anosTerrestres = segundos / segundosPorAnoTerrestre;
  return anosTerrestres / periodosOrbitais[planeta]!;
}

void main() {
  print(calcularIdade(1000000000, "Terra"));
  print(calcularIdade(1000000000, "Mercúrio"));
}