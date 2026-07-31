---
title: Chiusure
translations_gpt:
---

{% include menu.html %}

Una _chiusura_ è una subroutine che cattura variabili dall'ambito in cui è stata definita e le tiene in vita anche dopo che quell'ambito è finito. Questo dà alla subroutine uno stato privato e duraturo tutto suo.

L'esempio classico è un contatore:

```raku
sub make-counter {
    my $n = 0;
    return sub { ++$n };
}

my &count = make-counter;
say count(); # 1
say count(); # 2
say count(); # 3
```

La variabile `$n` è dichiarata dentro `make-counter`. La subroutine restituita si riferisce a `$n`, quindi si chiude su di essa: ogni chiamata a `count` incrementa e restituisce lo **stesso** `$n`, anche se `make-counter` è finita da un pezzo.

Ogni chiamata a `make-counter` crea un `$n` fresco, quindi contatori separati sono indipendenti:

```raku
my &a = make-counter;
my &b = make-counter;
say a(); # 1
say a(); # 2
say b(); # 1
```

Le chiusure permettono a una funzione di portare con sé uno stato senza una variabile globale e senza un oggetto. Sono il modo della programmazione funzionale di ricordare qualcosa fra una chiamata e l'altra.

{% include nav.html %}
