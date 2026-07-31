---
title: Contesto numerico, stringa e booleano
---

{% include menu.html %}

Tre contesti molto comuni richiedono a un valore di comportarsi come un numero, una stringa o un valore Booleano. Ciascuno ha un operatore prefisso che lo forza esplicitamente:

* `+` — contesto numerico
* `~` — contesto stringa
* `?` — contesto Booleano

Applicati a un array, restituiscono rispettivamente la sua lunghezza, i suoi elementi uniti da spazi, e se contiene elementi:

```raku
my @a = 1, 2, 3;

say +@a; # 3
say ~@a; # 1 2 3
say ?@a; # True
```

Un array vuoto e `0` in contesto numerico e `False` in contesto Booleano:

```raku
my @empty;
say +@empty; # 0
say ?@empty; # False
```

Non e necessario scrivere sempre questi operatori manualmente, perche il linguaggio puo imporre il contesto corretto al posto vostro. L'aritmetica mette i suoi operandi in contesto numerico, la concatenazione li mette in contesto stringa, e `if`, `while` e `and`/`or` mettono la loro condizione in contesto Booleano:

```raku
my @a = 1, 2, 3;

say 10 + @a;              # 13, here @a is its length: 3
say 'items: ' ~ @a;       # items: 1 2 3
if @a { say 'not empty' } # not empty
```

Quindi `if @array { … }` funziona esattamente come ci si aspetterebbe: un array non vuoto e vero. Gli operatori prefisso sono il modo esplicito per richiedere le stesse conversioni.

In combinazione con un `if` postfisso, questo permette di creare codice davvero espressivo:

```raku
say "{+@a} items are there" if @a; # 3 items are there
```

{% include nav.html %}
