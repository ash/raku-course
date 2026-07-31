---
title: 'Soluzione: Somma dei quadrati pari'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say [+] (1..10).grep(* %% 2).map(* ** 2);
```

🦋 Trova il programma nel file [sum-even-squares.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sum-even-squares.raku).

## Output

```
220
```

## Commenti

1. La catena si legge da sinistra a destra: `.grep(* %% 2)` conserva i numeri pari,
`.map(* ** 2)` eleva ciascuno al quadrato, e `[+]` riduce i quadrati alla loro somma.

1. I numeri pari `2 4 6 8 10` elevati al quadrato danno `4 16 36 64 100`, che sommano a
`220`.

1. Gli stessi passi si possono scrivere come [pipeline di flusso](/it/paradigms/feeds/feed-operator),
dove `==>` passa ogni risultato allo stadio successivo — così il flusso si legge dall'alto
in basso invece che come catena di metodi:

    ```raku
    (1..10)
        ==> grep(* %% 2)
        ==> map(* ** 2)
        ==> sum()
        ==> say();
    ```

    Ogni `==>` alimenta con la lista alla sua sinistra la routine successiva, e il
    conclusivo `==> say()` stampa il totale, `220`.

{% include nav.html %}
