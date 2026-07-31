---
title: 'Solution: La variabile topic'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
for 'apple', 'fig', 'cherry' {
    say "$_ has {.chars} letters";
}
```

🦋 Puoi trovare il codice sorgente nel file [topic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/topic-variable.raku).

## Output

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Commenti

1. Un ciclo `for` imposta la variabile topic `$_` a ciascun elemento a turno, quindi il blocco viene eseguito tre volte, con `$_` uguale a `'apple'`, poi `'fig'`, poi `'cherry'`.

1. All'interno della stringa, `$_` interpola la parola corrente, e la chiamata con punto iniziale `.chars` — abbreviazione di `$_.chars` — ne restituisce la lunghezza. Entrambe si riferiscono allo stesso topic, motivo per cui il conteggio corrisponde sempre alla parola sulla riga.

{% include nav.html %}
