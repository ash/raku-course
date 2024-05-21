---
title: 'Soluzione: Sostituire con antonimi'
---

{% include menu.html %}

Per risolvere il compito, il contenuto del file [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku) viene copiato nel file di soluzione [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku). Dopo di ciò, un ciclo sugli argomenti di input cerca di trovare la parola nel dizionario e, se la trova, prende l'antonymo. Se non esiste tale parola nel dizionario, viene utilizzata la parola originale.

## Codice

La soluzione è presentata di seguito. Il dizionario è mostrato solo parzialmente qui.

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    'achieve' => 'fail',
    # . . .
    'wrong' => 'right',
    'young' => 'old'    
;

for @*ARGS -> $word {
    say %dictionary{$word} // $word;
}
```

🦋 Trova il programma nel file [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku).

## Output

```console
$ raku exercises/associatives/replace-with-antonyms.raku early morning
late
evening

$ raku exercises/associatives/replace-with-antonyms.raku big soft drive
small
hard
drive
```

## Commenti

1. L'operatore `//` è l'[operatore defined-or](/it/essentials/scalar-variables/defined-or-operator), che restituisce il primo operando definito.
1. Nell'hash, tutte le chiavi sono parole (cioè, sembrano identificatori), quindi non è necessario citarle nell'hash. È quindi possibile creare un hash, come mostrato di seguito:

```raku
my %dictionary =
    above => 'below',
    absent => 'present',
    achieve => 'fail',
    # . . .
    wrong => 'right',
    young => 'old'    
;
```

{% include nav.html %}