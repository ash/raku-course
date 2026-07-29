---
title: 'Решение: Създайте директория'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
mkdir 'reports';
spurt 'reports/data.txt', 'x';

say 'reports'.IO.d;
say 'reports/data.txt'.IO.e;
```

🦋 Намерете програмата във файла [make-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/make-a-directory.raku).

## Изход

```
True
True
```

## Коментари

1. `mkdir` създава директорията, а `.IO.d` потвърждава, че `reports` е директория.

1. Понеже директорията вече съществува, можем да запишем файл в нея, като зададем път, който включва името на директорията — `reports/data.txt`. Проверката `.e` върху този път потвърждава, че файлът е създаден вътре в новата директория.

1. Редът има значение: `spurt` **не** създава липсващи директории вместо вас. Запис в `reports/data.txt`, преди директорията `reports` да съществува, се проваля с грешка от рода на `Failed to open file … : No such file or directory`. Създаването на директорията първо — както прави `mkdir` тук — е онова, което позволява записът да успее. Удобно е, че `mkdir` създава и всички липсващи междинни директории, така че вложен път като `mkdir 'reports/2026'` изгражда цялата верига с едно извикване.

{% include nav.html %}
