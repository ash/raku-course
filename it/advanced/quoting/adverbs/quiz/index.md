---
title: Quiz — Avverbi di quoting
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
my $price = 5;
say qq:!s{costs $price};
```

{:.quiz}
0 | costs 5
1 | costs $price
0 | costs
0 | costs {5}

{% include quiz.html %}

<div class="extended-explanation">

`qq` normalmente interpola gli scalari, ma un avverbio scritto con un `!` *disattiva* una funzionalità. Qui `:!s` disabilita l'interpolazione scalare, quindi `$price` viene lasciato esattamente come scritto invece di essere sostituito da `5`.

</div>

{% include nav.html %}
