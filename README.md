# Javascript 4

## Minitask 1

### Program hitung Max, Min, Average

### Flowchart

```mermaid

  flowchart TD

  A@{shape: sm-circ, label: "Start"}
  B@{shape: fr-circ, label: "End"}
  E@{shape: rect, label: "nilaiGabungan"}
  F@{shape: rect, label: "nilaiMax = 0"}
  G@{shape: rect, label: "nilaiMin = nilaiGabungan[0]"}
  I@{shape: diam, label: "a < nilaiGabungan.length"}
  J@{shape: rect, label: "a = 0"}
  K@{shape: diam, label: "nilaiGabungan[a] > nilaiMax"}
  M@{shape: rect, label: "nilaiMax = nilaiGabungan[a]"}
  N@{shape: diam, label: "nilaiMin < nilaiGabungan[a]"}
  P@{shape: rect, label: "a++"}
  Q@{shape: lean-r, label: "nilaiMax"}
  T@{shape: rect, label: "nilaiMin = nilaiGabungan[a]"}
  V@{shape: lean-r, label: "nilaiMin"}
  Y@{shape: lean-r, label: "nilaiAvg"}
  AA@{shape: rect, label: "nilaiAvg += nilaiGabungan[a]"}
  DD@{shape: rect, label: "nilaiAvg /= nilaiGabungan.length"}
  EE@{shape: rect, label: "nilaiAvg =0"}

  A --> E --> F --> G --> EE --> J --> I --TRUE--> K --TRUE--> M --> N --TRUE--> T --> AA --> P --> I

  K --FALSE--> N

  N --FALSE--> AA

  I --FALSE--> DD --> Q --> V --> Y --> B




```
