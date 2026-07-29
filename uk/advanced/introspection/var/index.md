---
title: Використання `VAR`
translations_gpt:
---

{% include menu.html %}

`VAR` — це псевдометод, що повертає об'єкт контейнера, який лежить в основі. Для скалярної змінної виклик `.VAR` повертає контейнер `Scalar`, що стоїть за нею.

## `^name`

Маючи контейнер, можна запитати ім'я його класу через `.^name`:

```raku
my $var1 = 42;
my $var2 = '42';

say $var1.^name;     # Int
say $var1.VAR.^name; # Scalar

say $var2.^name;     # Str
say $var2.VAR.^name; # Scalar
```

`.^name` для змінної повертає тип _значення_ (`Int` або `Str`), а `.VAR.^name` повертає тип _контейнера_, яким в обох випадках є `Scalar`.

## `default`

Метод `default` повертає типове значення контейнера — те, що ви отримуєте, коли контейнер не містить нічого власного. Трейтом `is default` ви задаєте його явно:

```raku
my Str $language is default('Raku');
say $language.VAR.default; # Raku
```

Без явного типового значення ним є тип контейнера. Для нетипізованого контейнера це `Any`, незалежно від того, яке значення він зараз містить:

```raku
my $language = 'Raku';
say $language.VAR.default; # (Any)
```

Для типізованого контейнера це тип обмеження:

```raku
my Str $language;
say $language.VAR.default; # (Str)
```

## `name`

Метод `name` повертає ім'я контейнера разом із сигілом:

```raku
my $language;
say $language.VAR.name; # $language
```

Стежте за тим, щоб не плутати `^name` (тип) і `name` (власне ім'я змінної).

{% include nav.html %}
