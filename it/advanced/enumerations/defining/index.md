---
title: Definire un enum
---

{% include menu.html %}

Si dichiara un enum con la parola chiave `enum`, un nome e la lista dei nomi delle costanti:

```raku
enum Colour <red green blue>;
```

Questo crea un nuovo tipo, `Colour`, e tre costanti: `red`, `green` e `blue`. Si possono usare le costanti direttamente per nome:

```raku
say red;   # red
say green; # green
```

Dietro ogni nome c'e' un numero, assegnato automaticamente a partire da zero nell'ordine in cui sono stati elencati: `red` e' `0`, `green` e' `1`, `blue` e' `2`. Poiche' i valori sono ordinati, si possono confrontare le costanti:

```raku
say red < blue; # True
```

Una variabile puo' essere tipizzata con l'enum, in modo che accetti solo quelle costanti:

```raku
my Colour $c = green;
say $c; # green
```

Se un nome potrebbe entrare in conflitto con qualcos'altro nel programma, si puo' sempre fare riferimento a una costante tramite il nome dell'enum con `::`:

```raku
say Colour::red; # red
```

Un enum assegna a un insieme di costanti correlate un nome e un tipo, il che rende il codice che le utilizza molto piu' chiaro rispetto ai numeri nudi. Il prossimo argomento esamina [i numeri dietro i nomi](/it/advanced/enumerations/values-and-keys).

{% include nav.html %}
