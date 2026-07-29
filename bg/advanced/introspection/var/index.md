---
title: Използване на `VAR`
translations_gpt:
---

{% include menu.html %}

`VAR` е псевдо-метод, който връща основния обект-контейнер. За скаларна променлива, извикването на `.VAR` връща контейнера `Scalar` зад нея.

## `^name`

След като имате контейнера, можете да попитате за името на неговия клас с `.^name`:

```raku
my $var1 = 42;
my $var2 = '42';

say $var1.^name;     # Int
say $var1.VAR.^name; # Scalar

say $var2.^name;     # Str
say $var2.VAR.^name; # Scalar
```

`.^name` върху променливата връща типа на _стойността_ (`Int` или `Str`), докато `.VAR.^name` връща типа на _контейнера_, който и в двата случая е `Scalar`.

## `default`

Методът `default` връща стойността по подразбиране на контейнера — това, което получавате, когато контейнерът не съдържа собствена стойност. С характеристиката `is default` я задавате изрично:

```raku
my Str $language is default('Raku');
say $language.VAR.default; # Raku
```

Без изрична стойност по подразбиране, стойността по подразбиране е типът на контейнера. За нетипизиран контейнер това е `Any`, независимо каква стойност съдържа в момента:

```raku
my $language = 'Raku';
say $language.VAR.default; # (Any)
```

За типизиран контейнер това е ограничаващият тип:

```raku
my Str $language;
say $language.VAR.default; # (Str)
```

## `name`

Методът `name` връща името на контейнера, включително сигила:

```raku
my $language;
say $language.VAR.name; # $language
```

Внимавайте да не объркате `^name` (типът) и `name` (собственото име на променливата).

{% include nav.html %}
