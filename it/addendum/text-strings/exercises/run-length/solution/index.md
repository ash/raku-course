---
title: 'Soluzione: Codifica run-length'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $text = 'aaabbbbcc';

my $encoded = '';
for $text ~~ m:g/ (.) $0* / -> $match {
    $encoded ~= $match[0] ~ $match.chars;
}

say $encoded;
```

🦋 Trova il programma nel file [run-length.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/run-length.raku).

## Output

```
a3b4c2
```

## Commenti

1. Lo schema `(.) $0*` cattura un carattere e poi riconosce tutte le copie successive che
seguono — una sequenza intera per corrispondenza. `m:g` raccoglie ogni sequenza.

1. Per ogni sequenza, `$match[0]` è la lettera ripetuta e `$match.chars` è la lunghezza
della sequenza, quindi i due insieme danno voci come `a3`.

1. Dare un nome alla corrispondenza con `-> $match` è facoltativo. Senza, ogni
corrispondenza diventa l'argomento corrente `$_`, e puoi lasciar cadere la variabile e
chiamare i metodi direttamente su di essa:

    ```raku
    my $text = 'aaabbbbcc';
    my $encoded = '';

    for $text ~~ m:g/ (.) $0* / {
        $encoded ~= .[0] ~ .chars;
    }

    say $encoded;
    ```

{% include nav.html %}
