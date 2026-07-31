---
title: Quiz — Aritmetica delle date
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
say Date.new(2026, 1, 28) + 5;
```

{:.quiz}
1 | 2026-02-02
0 | 2026-01-33
0 | 2026-02-05
0 | 2026-02-03

{% include quiz.html %}

<div class="extended-explanation">

Aggiungere un intero sposta la data in avanti di quel numero di giorni, passando automaticamente al mese successivo. Cinque giorni dopo il 28 gennaio 2026 si arriva al 2 febbraio — i tre giorni restanti di gennaio (29, 30, 31) più altri due.

</div>

{% include nav.html %}
