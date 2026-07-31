---
title: 'Solvo: Komandlinia flago'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub MAIN(Bool :$shout = False) {
    say $shout ?? 'HELLO' !! 'hello';
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [boolean-flag.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/boolean-flag.raku).

## Eligo

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Komentoj

1. `Bool`-a nomita parametro fariĝas flago: transdoni `--shout` agordas `$shout` al `True`, dum forlasi ĝin lasas la defaŭlton `False`.

1. La ternara operatoro tiam presas `HELLO` aŭ `hello` laŭe. Male al opcio `--name=value`, flago ne prenas valoron — ĝia nura ĉeesto estas tio, kio gravas.

{% include nav.html %}
