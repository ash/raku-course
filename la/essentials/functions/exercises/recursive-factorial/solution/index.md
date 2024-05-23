---
title: 'Solutio: Factorialis Recursiva'
---

{% include menu.html %}

Factorialis est exercitium valde fructuosum, quia multis modis solvi potest. Hoc tempore recursionem utimur, quod significat functionem ab ipsa vocari.

## Codex 1

Hic est codex solutionis. Nota quod condicionem ad sistendam recursionem inspicere debes, aliter infinite continuabit.

```raku
sub factorial($n) {
    if $n < 2 {
        return 1;
    }
    else {
        return $n * factorial($n - 1);
    }
}

say factorial(10);
```

🦋 Programma inveni in archivo [recursive-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/recursive-factorial.raku).

## Codex 2

In casibus, ut in hoc codice monstratur, saepe melius est formis postfixis `if` uti ad statim e functione redire. Haec ratio codicem purgat et multam indentationem et punctuationem removet.

```raku
sub factorial($n) {
    return 1 if $n < 2;
    return $n * factorial($n - 1);
}

say factorial(10);
```

🦋 Programma renovatum inveni in archivo [recursive-factorial-2.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/recursive-factorial-2.raku).

## Exemplum

Programma curre et eventum inspice. Videlicet, sciebasne quod _10!_ est numerus exactus secundorum in sex septimanis?

```console
$ raku exercises/functions/recursive-factorial.raku
3628800
```

{% include nav.html %}