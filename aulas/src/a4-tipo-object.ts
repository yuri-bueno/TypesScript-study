const objetoA: {
  chave1: string;
  readonly chave2: string;
  chave3?: string;
  [key: string]: unknown;
} = {
  chave1: "arroz",
  chave2: "doce",
};

objetoA.chave1 = "feijao";
objetoA.chave3 = "comer";
