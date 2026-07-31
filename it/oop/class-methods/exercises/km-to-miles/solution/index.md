---
title: 'Soluzione: Da chilometri a miglia'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Converter {
    method km-to-miles($km) {
        $km * 0.621;
    }
}

say Converter.km-to-miles(10);
```

🦋 Trova il programma nel file [km-to-miles.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/km-to-miles.raku).

## Output

```
6.21
```

## Commenti

1. La conversione non dipende da alcun oggetto particolare, quindi è scritta come metodo di classe e chiamata direttamente su `Converter`.

1. Un metodo di classe può comunque prendere parametri: qui riceve il numero di chilometri e restituisce le miglia.

{% include nav.html %}
