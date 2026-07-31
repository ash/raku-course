---
title: 'Solvo: Priskribi variablon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my Str $lang = 'Raku';

say $lang.^name;
say $lang.VAR.^name;
say $lang.VAR.name;
```

🦋 Vi povas trovi la fontkodon en la dosiero [describe-a-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/describe-a-variable.raku).

## Eligo

```
Str
Scalar
$lang
```

## Komentoj

1. `.^name` redonas la tipon de la valoro konservita en la ujo, kiu estas `Str`.

1. `.VAR` redonas la subestadon de la ujo, kaj `.^name` sur ghi redonas `Scalar` — la tipon de la ujo mem.

1. `.VAR.name` redonas la nomon de la variablo, `$lang`, inkluzive de ghia sigelo. Rimarku ke tio estas la metodo `name`, ne la meta-metodo `^name` uzita en la unuaj du linioj.

{% include nav.html %}
