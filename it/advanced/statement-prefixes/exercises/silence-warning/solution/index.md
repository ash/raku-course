---
title: 'Solution: Silenziare un avviso'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

```raku
my $name;

my $greeting = quietly { "Hello, " ~ $name ~ "!" };
say $greeting;
```

🦋 Il codice sorgente è disponibile nel file [silence-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/silence-warning.raku).

## Output

```
Hello, !
```

## Commenti

1. Interpolare il `$name` non definito nella stringa normalmente attiva un avviso "use of uninitialized value". Racchiudere l'espressione in `quietly` lo sopprime, quindi viene stampato solo il saluto.

1. Come `do`, `quietly` restituisce il valore del suo blocco, quindi la stringa assemblata (con il nome mancante che lascia uno spazio vuoto) viene memorizzata in `$greeting`.

1. `quietly` nasconde solo l'avviso — il valore è comunque non definito. Se invece volete *gestire* il valore mancante, fornite un valore predefinito con l'operatore defined-or `//`: `$name // 'friend'` produce `'friend'` quando `$name` è non definito, quindi `"Hello, " ~ ($name // 'friend') ~ "!"` stampa `Hello, friend!` senza alcun avviso.

{% include nav.html %}
