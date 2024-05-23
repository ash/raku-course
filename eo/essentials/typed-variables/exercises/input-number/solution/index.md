---
title: Solvo de ‘Konverti uzantan enigon al nombro’
---

{% include menu.html %}

La programo povas esti tiel simpla kiel ĉi tio:

## Kodo

```raku
my Int $n = prompt 'Enigu numeron: ';
say $n;
```

🦋 Vi povas trovi la fontkodon en la dosiero [input-number.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/input-number.raku).

## Ekzemplo

Rulu ĝin kaj enigu entjeran numeron, ĉu pozitivan aŭ negativan:

```console
$ raku exercises/typed-variables/input-number.raku
Enigu numeron: -42
-42
```

## Komentoj

Kiel ni [vidis](/eo/essentials/typed-variables/allomorphs), la revena valoro de `prompt` estas `IntStr`, kiu povas esti asignita al `Int` variablo sen devigo.

Rimarku tamen, ke la programo finiĝos kun escepto se vi enigas ĉenon kiu ne povas esti konvertita al entjera nombro.

{% include nav.html %}