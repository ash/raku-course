---
title: 'Solvo: Tipita MAIN'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub MAIN(Int $n) {
    say $n * 2;
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [typed-main.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/typed-main.raku).

## Eligo

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Komentoj

1. La limigo `Int` signifas, ke la komandlinia vorto devas aspekti kiel entjero. Doninte `5`, ĝi ligiĝas al `$n` kaj la korpo presas `10`.

1. Doninte `abc`, la valoro ne povas fariĝi `Int`, do la signaturo ne kongruas. Raku ne rulas la korpon — ĝi presas la generitan uzad-mesaĝon anstataŭe, donante al vi argumentan validigon sen iuj ajn manaj kontroloj.

{% include nav.html %}
