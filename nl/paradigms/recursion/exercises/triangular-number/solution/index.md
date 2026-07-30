---
title: 'Oplossing: Driehoeksgetal'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
multi tri(0)  { 0 }
multi tri($n) { $n + tri($n - 1) }

say tri(5);
```

🦋 Je kunt de broncode vinden in het bestand [triangular-number.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/triangular-number.raku).

## Uitvoer

```
15
```

## Opmerkingen

1. Het basisgeval is een eigen kandidaat: `multi tri(0)` matcht alleen wanneer het argument precies `0` is en geeft `0` terug zonder recursie.

1. Elke andere aanroep belandt in `multi tri($n)`, die `$n` optelt bij het driehoeksgetal van `$n - 1`. De aanroepen dalen af langs `5 + 4 + 3 + 2 + 1 + 0`, en wanneer het argument `0` bereikt schakelt de dispatch naar de basisgevalkandidaat en wikkelt de som zich af tot `15`.

{% include nav.html %}
