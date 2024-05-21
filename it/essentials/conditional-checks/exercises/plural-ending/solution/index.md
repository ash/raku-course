---
title: Soluzione di ‘Plural ending’
---

{% include menu.html %}

Il programma dovrebbe verificare se il numero inserito è maggiore di uno e metterlo nella forma plurale.

## Codice

```raku
my $n = prompt 'Quanti file copiare? ';
my $ending = $n == 1 ?? '' !! 's';
say "$n file{$ending} copiati.";
```

🦋 Trova il programma nel file [plural-ending.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/plural-ending.raku).

## Output

Esegui il programma almeno due volte e testalo con l'input `1` e con qualsiasi altro numero intero positivo:

```console
$ raku exercises/conditional-checks/plural-ending.raku
Quanti file copiare? 10
10 files copiati.

$ raku exercises/conditional-checks/plural-ending.raku
Quanti file copiare? 1
1 file copiato.
```

## Commento

Probabilmente, potresti tendere a digitare erroneamente un singolo `?` invece di un doppio `??` e/o un due punti `:` invece di `!!`.

{% include nav.html %}