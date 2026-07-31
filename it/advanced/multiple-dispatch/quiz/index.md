---
title: Quiz — Dispatch con `where`
translations_gpt:
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
multi sub f(Int $n where $n %% 2) { say 'even' }
multi sub f(Int $n)               { say 'odd' }

f(4);
```

{:.quiz}
1 | even
0 | odd
0 | both
0 | nothing

{% include quiz.html %}

<div class="extended-explanation">

`4` soddisfa la condizione `where $n %% 2`, quindi viene scelto il candidato piu specifico e viene stampato `even`. Il candidato con il semplice `Int` funge da raccoglitore generale per tutto cio che non soddisfa la condizione.

</div>

{% include nav.html %}
