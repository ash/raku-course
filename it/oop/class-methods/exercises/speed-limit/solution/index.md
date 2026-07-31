---
title: 'Soluzione: Una formula nella classe'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Geometry {
    method circle-area($r) {
        (π * $r * $r).round
    }
}

say Geometry.circle-area(10);
```

🦋 Trova il programma nel file [speed-limit.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/speed-limit.raku).

## Output

```
314
```

## Commenti

1. Il metodo non tocca alcun attributo — lavora solo con il suo parametro `$r` — quindi può essere chiamato sulla classe stessa, senza creare prima un oggetto.

1. `Geometry.circle-area(10)` chiama il metodo sull'oggetto di tipo, passando `10`. Il risultato è `π * 10 * 10` e, dopo l'arrotondamento, `314`.

{% include nav.html %}
