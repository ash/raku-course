---
title: 'Solvo: Noma longo'
---

{% include menu.html %}

## Kodo

Jen la solvo al la tasko:

```raku
my $name = prompt 'Kio estas via nomo? ';
say $name.chars;
```

🦋 Vi povas trovi la fontkodon en la dosiero [name-length.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/name-length.raku).

## Eligo

Rulu la programon kaj enigu la nomon.

```console
$ raku exercises/strings/name-length.raku 
Kio estas via nomo? Alexandra
9
```

## Komentoj

En ĉi tiu programo, ni akiras la longecon de la ĉeno vokante la metodon `chars` sur la variablo `$name`. Ĉar la variablo enhavas ĉenon, la metodo redonas ĝian longecon.

{% include nav.html %}