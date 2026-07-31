---
title: Array
translations_gpt:
---

{% include menu.html %}

Un array è un contenitore ordinato i cui elementi sono a loro volta contenitori scalari.

```raku
my @array = 100, 200, 300;
my @letters = 'a', 'b', 'c';
```

Il sigillo `@` indica che tale variabile si comporta come un oggetto `Positional`, quindi puoi indicizzarla per accedere ai singoli elementi:

```raku
say @array[1];   # 200
say @letters[2]; # c
```

Poiché ogni elemento è un contenitore scalare, puoi assegnargli un nuovo valore, esattamente come faresti con una variabile scalare indipendente:

```raku
my @array = 100, 200, 300;
@array[0] = 10;
say @array; # [10 200 300]
```

Puoi anche assegnare un valore di un tipo diverso, ad esempio:

```raku
my @array = 100, 200, 300;
@array[0] = 'ten';
say @array; # [ten 200 300]
```

Questo è ciò che rende gli array _mutabili_: ogni posizione è un contenitore che può ricevere un nuovo valore. Come vedrai nel prossimo argomento, le [liste](/it/advanced/ordered-containers/lists) si comportano diversamente.

{% include nav.html %}
