---
title: 'Решение: Подайте променлива на дъщерна програма'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $file = 'notes.txt';
spurt $file, "one\ntwo\nthree\n";

%*ENV<NOTES> = $file;

my $proc = shell 'wc -l < "$NOTES"', :out;
say $proc.out.slurp(:close).trim;

unlink $file;
```

🦋 Намерете програмата във файла [read-env.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/read-env.raku).

## Изход

```
3
```

## Коментари

1. `spurt` създава `notes.txt` с три реда. Задаването на `%*ENV<NOTES>` с името му слага името на файла в средата, която всяка дъщерна програма ще наследи.

1. Командата на `shell` наследява тази среда, разгъва `$NOTES` до `notes.txt` и подава файла на `wc -l`, който преброява редовете му. Пренасочването `< "$NOTES"` свежда изхода само до числото `3`, което улавяме с `:out` и подрязваме.

1. Накрая прибирането се прави обратно в Raku с `unlink` — без нужда от обвивка. Изтриването на файл е обикновена операция на файловата система, така че няма причина да се стартира още един процес за нея.

{% include nav.html %}
