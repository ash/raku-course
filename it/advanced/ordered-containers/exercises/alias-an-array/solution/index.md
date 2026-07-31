---
title: 'Solution: Alias di un array'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @original = 10, 20, 30;
my @alias := @original;

@original.push(40);
say @alias;
```

🦋 Puoi trovare il codice sorgente nel file [alias-an-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/alias-an-array.raku).

## Output

```
[10 20 30 40]
```

## Commenti

1. Il binding `@alias := @original` fa di `@alias` un altro nome per lo stesso contenitore array, piuttosto che una copia di esso.

1. La modifica viene effettuata tramite `@original` questa volta, ed è una modifica strutturale — `push` aggiunge un elemento. Poiché entrambi i nomi sono lo stesso identico contenitore, `@alias` vede il nuovo elemento. I due nomi sono completamente intercambiabili: non importa quale usi per leggere o per modificare l'array.

{% include nav.html %}
