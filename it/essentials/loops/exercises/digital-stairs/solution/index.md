---
title: 'Soluzione: Scale digitali'
---

{% include menu.html %}

Il programma utilizza due cicli e due intervalli.

## Codice

Ecco una delle possibili soluzioni:

```raku
my $size = prompt 'Inserisci la dimensione: ';

for 1..$size -> $n {
    .print for 1..$n;
    print "\n";
}
```

🦋 Trova il programma nel file [digital-stairs.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/digital-stairs.raku).

## Output

Esegui il programma e inserisci la dimensione della struttura:

```console
$ raku exercises/loops/digital-stairs.raku
Inserisci la dimensione: 7
1
12
123
1234
12345
123456
1234567
```

## Commento

Nota come viene stampata la cifra corrente:

```raku
.print for 1..$n;
```

Come con `say`, la routine `print` può essere chiamata come un metodo. In questo caso, viene chiamata sulla [variabile di contesto](/it/essentials/loops/topic) `$_`.

{% include nav.html %}