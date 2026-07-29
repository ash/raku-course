---
title: Розв'язання вправи «Цензура слова»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $s = 'secret secret plan';
$s ~~ s:g/secret/***/;
say $s;
```

🦋 Знайдіть програму у файлі [censor-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/censor-word.raku).

## Вивід

```
*** *** plan
```

## Коментарі

1. Оператор `s///` замінює знайдене `secret` літеральним текстом `***`, записаним без лапок, і змінює `$s` на місці.

1. Саме прислівник `:g` змушує його замінити **обидва** входження. Без нього цензуру пройшло б лише перше `secret`.

{% include nav.html %}
