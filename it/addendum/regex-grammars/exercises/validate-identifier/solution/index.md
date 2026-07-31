---
title: 'Soluzione: Convalidate gli identificatori'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
for <count total2 2fast my-var _hidden> -> $name {
    my $ok = $name ~~ / ^ <[A..Za..z_]> <[A..Za..z0..9_]>* $ /;

    say "$name: { $ok ?? 'valid' !! 'invalid' }";
}
```

🦋 Trova il programma nel file [validate-identifier.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/validate-identifier.raku).

## Output

```
count: valid
total2: valid
2fast: invalid
my-var: invalid
_hidden: valid
```

## Commenti

1. Le ancore `^` e `$` costringono lo schema a coprire l'*intera* stringa, quindi un solo
carattere fuori posto come il trattino in `my-var` lo rende non valido.

1. La prima classe di caratteri ammette una lettera o un trattino basso; la seconda,
ripetuta con `*`, ammette in più le cifre — corrispondendo esattamente alla regola classica
degli identificatori.

1. La seconda classe si può anche scrivere come `\w`, la scorciatoia incorporata per un
carattere di parola (una lettera, una cifra o un trattino basso):

    ```raku
    my $ok = $name ~~ / ^ <[A..Za..z_]> \w* $ /;
    ```

    Una differenza di cui essere consapevoli: `\w` in Raku è consapevole di Unicode, quindi
anche un nome come `café` passa — cosa che per inciso corrisponde a Raku stesso, dove
`my $café = 1;` è perfettamente lecito. La classe scritta per esteso
`<[A..Za..z0..9_]>` tiene il controllo strettamente ASCII.

1. C'è però un colpo di scena: in Raku stesso `my-var` è un identificatore *valido*! Raku
ammette un trattino (o un apostrofo, come in `isn't`) dentro un nome, purché sia seguito da
una lettera — ed è per questo che subroutine come `is-prime` si leggono così naturalmente.
Per convalidare gli identificatori *Raku*, ammetti gruppi simili dopo la parte classica:

    ```raku
    for <count total2 2fast my-var _hidden> -> $name {
        my $ok = $name ~~ / ^ <[A..Za..z_]> \w* [ '-' <[A..Za..z]> \w* ]* $ /;

        say "$name: { $ok ?? 'valid' !! 'invalid' }";
    }
    ```

    Ogni gruppo fra parentesi `[ '-' <[A..Za..z]> \w* ]` accetta un trattino solo quando
segue una lettera, quindi `my-var` viene ora riferito come valido, mentre `2fast` — e
stringhe come `a-` o `a-1` — continuano a non esserlo.

{% include nav.html %}
