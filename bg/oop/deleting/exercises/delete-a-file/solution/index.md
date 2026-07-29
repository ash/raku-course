---
title: 'Решение: Изтрийте файл'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
spurt 'note.txt', 'temporary';
say 'note.txt'.IO.e;

unlink 'note.txt';
say 'note.txt'.IO.e;
```

🦋 Намерете програмата във файла [delete-a-file.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/delete-a-file.raku).

## Изход

```
True
False
```

## Коментари

1. `spurt` създава файла, така че първата проверка `.e` съобщава `True`.

1. `unlink` го изтрива. Втората проверка `.e` тогава съобщава `False`, защото файлът го няма. Обърнете внимание на употребата на `.e`, а не на `.f`: проверката за тип `.f` би хвърлила грешка за път, който вече не съществува, докато `.e` просто отговаря `False`.

{% include nav.html %}
