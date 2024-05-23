---
title: Solutio ad ‘Triplicem negationem’
---

{% include menu.html %}

Programma demonstratum in munere non compilabitur et parvam correctionem requirit. Hic est correctus et operans variant (spatium additum ad separandum `!` et `!!`):

## Codex

```raku
my $value = False;
say ! !!$value;
```

🦋 Totum codicem invenire potes in archivo [triple-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/triple-negation.raku).

## Output

Programma valorem Booleanum inversum imprimit ut probabiliter exspectabas:

```console
$ raku triple-negation.raku
True
```

## Commentarii

Paulum inopinatum erat programmate cum tribus signis exclamationis non compilari:

```console
$ raku triple-negation.raku
===SORRY!=== Error while compiling /Users/ash/raku-course/exercises/booleans/triple-negation.raku
Two terms in a row
at /Users/ash/raku-course/exercises/booleans/triple-negation.raku:2
------> say !!!⏏$value;
    expecting any of:
        infix
        infix stopper
        postfix
        statement end
        statement modifier
        statement modifier loop
```

Spatium additum hanc quaestionem solvit. Sed cave ne in aliam insidiam incidat. Considera sequens programma:

```raku
my $value = False;
say !!! $value;
```

Hoc programma compilatur sed terminatur cum sequente nuntio:

```console
$ raku triple-negation.raku
False
    in block <unit> at exercises/booleans/triple-negation.raku line 2
```

Hoc fit quia `!!!` est operator specialis ad partem codicis ut stub codicem notandam. Si programma hunc punctum attingit, terminatur et nuntium imprimit, quod in nostro casu erat valor currentis variabilis `$value`. Refer ad 📖 [documenta](https://docs.raku.org/routine/!!!) pro pluribus details.

{% include nav.html %}