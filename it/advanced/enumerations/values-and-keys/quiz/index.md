---
title: Quiz — Valori enum
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
enum Day (Mon => 1, Tue => 2);
say Tue.key;
```

{:.quiz}
1 | Tue
0 | 2
0 | 1
0 | Mon

{% include quiz.html %}

<div class="extended-explanation">

`.value` restituisce il numero dietro una costante, ma `.key` restituisce il suo *nome* come stringa. Quindi `Tue.key` e' `Tue`, indipendentemente dal numero `2` che gli e' stato assegnato.

</div>

{% include nav.html %}
