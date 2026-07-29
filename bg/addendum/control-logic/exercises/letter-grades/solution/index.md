---
title: 'Решение: Буквени оценки'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
for 95, 82, 71, 58 -> $score {
    my $grade = do given $score {
        when * >= 90 { 'A' }
        when * >= 80 { 'B' }
        when * >= 70 { 'C' }
        when * >= 60 { 'D' }
        default      { 'F' }
    }

    say "$score -> $grade";
}
```

🦋 Намерете програмата във файла [letter-grades.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/letter-grades.raku).

## Изход

```
95 -> A
82 -> B
71 -> C
58 -> F
```

## Коментари

1. `do given` превръща целия `given`/`when` в израз, чиято стойност е съвпадналият блок
— тук буква за оценка, — и тя се съхранява в `$grade`.

1. Всяко `when * >= N` е сравнение с Whatever срещу темата. Печели първото, което успее,
така че за границите е нужна само по една долна граница за всяка.

{% include nav.html %}
