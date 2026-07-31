---
title: Quiz — Avverbi di subscript
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

{:.quiz}
0 | True
1 | False
0 | Nil
0 | (Any)

{% include quiz.html %}

<div class="extended-explanation">

L'avverbio `:exists` chiede se la chiave è presente e restituisce un booleano. Non c'è alcuna chiave `z` nell'hash, quindi la risposta è `False`.

</div>

{% include nav.html %}
