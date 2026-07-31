---
title: 'Solution: Un pacchetto'
translations_gpt: true
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

```raku
package Temperature {
    our $freezing = 0;
    our sub fahrenheit($c) { $c * 9/5 + 32 }
}

say $Temperature::freezing;
say Temperature::fahrenheit(100);
```

🦋 Puoi trovare il codice sorgente nel file [a-package.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/a-package.raku).

## Output

```
0
212
```

## Commenti

1. Sia la variabile che la subroutine sono dichiarate con `our`, quindi entrambe diventano parte del namespace `Temperature` e sono raggiungibili dall'esterno.

1. La variabile viene raggiunta come `$Temperature::freezing` — sigillo, nome del package, poi nome della variabile — mentre la subroutine viene chiamata come `Temperature::fahrenheit(100)`. Convertendo `100` si ottiene `100 * 9/5 + 32`, che fa `212`.

1. Un semplice `package` fornisce solo il namespace. Per una libreria riutilizzabile avremmo usato `module` — e, quando entrano in gioco gli oggetti, una `class` — ma il meccanismo del namespace è lo stesso in ogni caso.

{% include nav.html %}
