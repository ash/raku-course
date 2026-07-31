---
title: 'Solution: Chiusura sull''esterno'
translations_gpt: Italian
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub greet($name) {
    sub message {
        "Hello, $name!";
    }

    say message;
}

greet('Anna');
```

🦋 Puoi trovare il codice sorgente nel file [closure-over-outer.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/closure-over-outer.raku).

## Output

```
Hello, Anna!
```

## Commenti

1. `message` non accetta argomenti, eppure puo usare `$name`. Una subroutine annidata chiude sulle variabili lessicali della subroutine che la contiene, quindi il `$name` esterno e nello scope.

1. Quando `greet('Anna')` viene eseguita, `$name` vale `'Anna'`, quindi `message` restituisce `Hello, Anna!`. Questa condivisione dello scope esterno e cio che rende gli helper annidati qualcosa di piu di semplici funzioni nascoste.

{% include nav.html %}
