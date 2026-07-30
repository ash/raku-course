---
title: Quiz — Quoting
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
say q{a\nb};
```

{:.quiz}
1 | a\nb
0 | a<newline>b
0 | ab
0 | anb

{% include quiz.html %}

<div class="extended-explanation">

Der `q`-Operator funktioniert wie einfache Anführungszeichen: Er verarbeitet keine Backslash-Escape-Sequenzen wie `\n`. Daher behält der String alle vier Zeichen `a`, `\`, `n`, `b`. Nur eine interpolierende Form wie `qq` (oder doppelte Anführungszeichen) würde `\n` in einen echten Zeilenumbruch umwandeln.

</div>

{% include nav.html %}
