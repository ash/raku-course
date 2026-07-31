---
title: 'Soluzione: Potenza'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub power($base, $exp) {
    $exp == 0 ?? 1 !! $base * power($base, $exp - 1);
}

say power(2, 10);
```

🦋 Trova il programma nel file [power.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/power.raku).

## Output

```
1024
```

## Commenti

1. Il caso base restituisce `1` quando l'esponente raggiunge `0`, dato che qualunque base elevata a zero fa uno.

1. Il passo ricorsivo moltiplica `$base` per `power($base, $exp - 1)`, staccando un fattore ogni volta. Così `power(2, 10)` moltiplica dieci `2` fra loro, dando `1024`.

{% include nav.html %}
