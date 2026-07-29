---
title: 'Решение: Запазване и четене'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
spurt 'number.txt', "42\n";

my $n = slurp('number.txt').trim.Int;
say $n * 2;
```

🦋 Намерете програмата във файла [save-and-read.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/save-and-read.raku).

## Изход

```
84
```

## Коментари

1. `spurt` създава файла и записва низа в него; `slurp` прочита целия файл обратно в низ. Заедно те са пълен цикъл на запазване и зареждане.

1. Онова, което се връща от `slurp`, е текст — `"42\n"`, — така че отрязваме крайния нов ред с `trim` и извикваме `.Int`, за да го превърнем в число, преди да смятаме. Резултатът, `42 * 2`, е `84`.

1. Програмата все пак работи и без `.trim.Int`.

{% include nav.html %}
