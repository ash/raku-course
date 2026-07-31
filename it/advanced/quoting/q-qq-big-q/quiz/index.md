---
title: Quiz — Quoting
---

{% include menu.html %}

Cosa stampa il seguente programma?

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

L'operatore `q` funziona come le virgolette singole: non elabora le sequenze di escape con backslash come `\n`. Quindi la stringa mantiene tutti e quattro i caratteri `a`, `\`, `n`, `b`. Solo una forma interpolante come `qq` (o le virgolette doppie) trasformerebbe `\n` in un vero carattere di nuova riga.

</div>

{% include nav.html %}
