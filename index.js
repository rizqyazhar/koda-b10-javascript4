const nilaiBudi = [85, 70, 50, 60, 55, 90, 75, 80, 95, 65];
const nilaiAndi = [80, 60, 55, 90, 50, 60, 70, 70, 50, 60];

const nilaiGabungan = [...nilaiBudi, ...nilaiAndi];

let nilaiMax = 0;
let nilaiMin = nilaiGabungan[0];
let nilaiAvg = 0;

for (let a = 0; a < nilaiGabungan.length; a++) {
  if (nilaiGabungan[a] > nilaiMax) {
    nilaiMax = nilaiGabungan[a];
  }

  if (nilaiGabungan[a] < nilaiMin) {
    nilaiMin = nilaiGabungan[a];
  }

  nilaiAvg += nilaiGabungan[a];
}

nilaiAvg /= nilaiGabungan.length;

console.log(nilaiMax);
console.log(nilaiMin);
console.log(nilaiAvg);
