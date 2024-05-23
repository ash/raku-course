---
title: Solution to ‘Triple negation’
---

{% include menu.html %}

La programo montrita en la tasko ne kompilas kaj bezonas malgrandan riparon. Jen la ĝusta kaj funkcianta varianto (aldonita spaco por apartigi `!` kaj `!!`):

## Kodo

```raku
my $value = False;
say ! !!$value;
```

🦋 Vi povas trovi la plenan kodon en la dosiero [triple-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/triple-negation.raku).

## Eligo

La programo presas inversan Boole-an valoron kiel vi verŝajne atendis:

```console
$ raku triple-negation.raku
True
```

## Komentoj

Estis iomete neatendite ke la programo kun tri kriegosignoj ne kompilis:

```console
$ raku triple-negation.raku
===SORRY!=== Eraro dum kompilado de /Users/ash/raku-course/exercises/booleans/triple-negation.raku
Du terminoj sinsekve
ĉe /Users/ash/raku-course/exercises/booleans/triple-negation.raku:2
------> say !!!⏏$value;
    atendante iun el:
        infikso
        infikso haltigilo
        postfikso
        deklaro fino
        deklaro modifilo
        deklaro modifilo buklo
```

Aldona spaco solvas ĉi tiun problemon. Sed ne falu en alian kaptilon. Konsideru la sekvan programon:

```raku
my $value = False;
say !!! $value;
```

Ĉi tiu programo kompilas sed finiĝas kun la sekva mesaĝo:

```console
$ raku triple-negation.raku
False
    en bloko <unuo> ĉe exercises/booleans/triple-negation.raku linio 2
```

Ĉi tio okazas ĉar `!!!` estas speciala operatoro por marki parton de la kodo kiel ŝablona kodo. Se la programo atingas ĉi tiun punkton, ĝi finiĝas kaj presas la mesaĝon, kiu en nia kazo estis la nuna valoro de la variablo `$value`. Referu al 📖 [la dokumentado](https://docs.raku.org/routine/!!!) por pli da detaloj.

{% include nav.html %}