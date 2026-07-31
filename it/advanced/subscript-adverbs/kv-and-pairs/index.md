---
title: Chiavi, valori e coppie
---

{% include menu.html %}

Altri avverbi cambiano **cosa** restituisce un accesso tramite indice. Per impostazione predefinita, un indice restituisce il valore; questi restituiscono di più:

* `:v` — il valore (il comportamento predefinito)
* `:k` — la chiave (o l'indice)
* `:kv` — sia la chiave che il valore
* `:p` — una `Pair` di chiave e valore

Per un array, la "chiave" è l'indice:

```raku
my @a = 10, 20, 30;

say @a[1]:kv; # (1 20)
say @a[1]:p;  # 1 => 20
```

`@a[1]:kv` restituisce l'indice e il valore insieme come lista, e `@a[1]:p` li restituisce come coppia.

Lo stesso funziona per gli hash, ed è particolarmente comodo quando si accede a una fetta di più chiavi contemporaneamente:

```raku
my %h = a => 1, b => 2, c => 3;

say %h<a c>:kv; # (a 1 c 3)
```

Qui, una fetta di due chiavi viene restituita come chiavi e valori alternati. Questi avverbi sono quelli su cui `map`, `for` e simili si basano spesso quando vuoi elaborare chiavi e valori fianco a fianco, senza suddividere il lavoro in ricerche separate.

{% include nav.html %}
