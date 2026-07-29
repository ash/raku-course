---
title: '`VAR`'
translations_gpt:
---

{% include menu.html %}

`VAR` — это псевдо-метод, который возвращает базовый объект контейнера. Для скалярной переменной вызов `.VAR` возвращает контейнер `Scalar`, стоящий за ней.

## `^name`

Получив контейнер, можно узнать имя его класса с помощью `.^name`:

```raku
my $var1 = 42;
my $var2 = '42';

say $var1.^name;     # Int
say $var1.VAR.^name; # Scalar

say $var2.^name;     # Str
say $var2.VAR.^name; # Scalar
```

`.^name` на переменной возвращает тип _значения_ (`Int` или `Str`), тогда как `.VAR.^name` возвращает тип _контейнера_, который в обоих случаях равен `Scalar`.

## `default`

Метод `default` возвращает значение контейнера по умолчанию — то, что вы получите, когда контейнер не содержит собственного значения. С помощью трейта `is default` его можно задать явно:

```raku
my Str $language is default('Raku');
say $language.VAR.default; # Raku
```

Без явного значения по умолчанию им является тип контейнера. Для нетипизированного контейнера это `Any`, независимо от того, какое значение в нём хранится:

```raku
my $language = 'Raku';
say $language.VAR.default; # (Any)
```

Для типизированного контейнера это тип ограничения:

```raku
my Str $language;
say $language.VAR.default; # (Str)
```

## `name`

Метод `name` возвращает имя контейнера, включая сигил:

```raku
my $language;
say $language.VAR.name; # $language
```

Не путайте `^name` (тип) и `name` (собственное имя переменной).

{% include nav.html %}
