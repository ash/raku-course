---
title: "L'oggetto match"
translations_gpt:
---

{% include menu.html %}

Quando un regex corrisponde, lo smartmatch restituisce un _oggetto match_. Lo stesso oggetto viene conservato automaticamente anche nella variabile speciale `$/`, che a volte si chiama «la variabile di match».

L'oggetto match è molto più di una risposta sì-o-no. Come stringa è il testo che ha corrisposto — o con il metodo `.Str` o con il prefisso `~`, che è l'operatore di conversione a stringa e fa esattamente la stessa cosa:

```raku
my $m = 'concatenate' ~~ /cat/;
say $m.Str; # cat
say ~$m;    # cat
```

Sa anche **dove** nella stringa la corrispondenza è stata trovata. Il metodo `.from` dà la posizione in cui comincia e `.to` la posizione subito dopo la sua fine:

```raku
my $m = 'room 7 left' ~~ /\d/;
say $m.Str;  # 7
say $m.from; # 5
say $m.to;   # 6
```

Le posizioni si contano da zero, quindi la cifra `7` sta all'indice `5`.

Quando il regex **non** corrisponde, il risultato non è affatto un oggetto match: è il valore speciale `Nil`. Assegnare `Nil` a uno scalare lo lascia non definito:

```raku
my $m = 'abc' ~~ /z/;
say $m.defined; # False
```

Quindi puoi sempre controllare `.defined` (o semplicemente usare il valore in contesto booleano) prima di leggere il testo corrispondente.

{% include nav.html %}
