---
title: 'Soluzione: Numero triangolare'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
multi tri(0)  { 0 }
multi tri($n) { $n + tri($n - 1) }

say tri(5);
```

🦋 Trova il programma nel file [triangular-number.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/triangular-number.raku).

## Output

```
15
```

## Commenti

1. Il caso base è un candidato a sé: `multi tri(0)` corrisponde solo quando l'argomento è esattamente `0` e restituisce `0` senza ricorrere.

1. Ogni altra chiamata atterra in `multi tri($n)`, che aggiunge `$n` al numero triangolare di `$n - 1`. Le chiamate scendono `5 + 4 + 3 + 2 + 1 + 0`, e quando l'argomento raggiunge `0` la distribuzione passa al candidato del caso base e la somma si srotola fino a `15`.

{% include nav.html %}
