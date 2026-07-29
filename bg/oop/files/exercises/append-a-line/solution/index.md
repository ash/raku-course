---
title: 'Решение: Натрупайте журнал'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
spurt 'log.txt', "start\n";

for 1..3 -> $i {
    spurt 'log.txt', "entry $i\n", :append;
}

print slurp 'log.txt';
```

🦋 Намерете програмата във файла [append-a-line.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/append-a-line.raku).

## Изход

```
start
entry 1
entry 2
entry 3
```

## Коментари

1. Първото `spurt` създава файла наново с реда `start`.

1. Всяко `spurt` вътре в цикъла използва `:append`, така че добавя своя ред след съществуващото съдържание, вместо да замени файла. Точно така расте журналният файл: всяка итерация (или всяко изпълнение на програмата) залепва още един ред накрая.

1. Без `:append` всяко преминаване би презаписало файла и би оцелял само последният ред.

{% include nav.html %}
