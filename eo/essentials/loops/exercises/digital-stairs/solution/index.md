---
title: 'Solvo: Ciferecaj ŝtupoj'
---

{% include menu.html %}

La programo uzas du buklojn kaj du intervalojn.

## Kodo

Jen unu el la eblaj solvoj:

```raku
my $size = prompt 'Enigu la grandecon: ';

for 1..$size -> $n {
    .print for 1..$n;
    print "\n";
}
```

🦋 Trovu la programon en la dosiero [digital-stairs.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/digital-stairs.raku).

## Eligo

Rulu la programon kaj enigu la grandecon de la strukturo:

```console
$ raku exercises/loops/digital-stairs.raku
Enigu la grandecon: 7
1
12
123
1234
12345
123456
1234567
```

## Komento

Notu kiel la nuna cifero estas presita:

```raku
.print for 1..$n;
```

Kiel ĉe `say`, la rutino `print` povas esti vokita kiel metodo. En ĉi tiu kazo, ĝi estas vokita sur la [temo variablo](/eo/essentials/loops/topic) `$_`.

{% include nav.html %}