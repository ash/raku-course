---
title: Розв'язання вправи «Кожне слово з великої літери»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $title = 'the lord of the rings';

say $title.words>>.tc.join(' ');
```

🦋 Знайдіть програму у файлі [title-case.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/title-case.raku).

## Вивід

```
The Lord Of The Rings
```

## Коментарі

1. `.tc` («title-case») робить першу літеру рядка великою. Гіпероператор `>>.tc`
застосовує його одразу до кожного слова, а `.join(' ')` збирає речення назад.

{% include nav.html %}
