---
title: Розв'язання вправи «Літерні оцінки»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [letter-grades.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/letter-grades.raku).

## Вивід

```
95 -> A
82 -> B
71 -> C
58 -> F
```

## Коментарі

1. `do given` перетворює весь `given`/`when` на вираз, значенням якого є блок, що
збігся, — тут це літера оцінки, — і його зберігають у `$grade`.

1. Кожен `when * >= N` є порівнянням з Whatever проти теми. Перемагає перший, що
спрацював, тож для меж потрібна лише нижня границя для кожної.

{% include nav.html %}
