---
title: 'Решение: Изчакайте много'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @words = <apple pear plum>;
my @jobs = @words.map(-> $w { start { $w.uc } });
say await @jobs;
```

🦋 Намерете програмата във файла [await-many.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/await-many.raku).

## Изход

```
(APPLE PEAR PLUM)
```

## Коментари

1. `@words.map(-> $w { start { $w.uc } })` превръща всяка дума в собствено обещание, така че и трите се преобразуват в главни букви паралелно. Острият блок именува думата `$w`, така че всяко обещание улавя точно своята.

1. `await @jobs` изчаква целия списък и връща резултатите в първоначалния им ред, което дава `(APPLE PEAR PLUM)`.

{% include nav.html %}
