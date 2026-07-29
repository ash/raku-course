---
title: 'Розв''язання: Передайте змінну дитині'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $file = 'notes.txt';
spurt $file, "one\ntwo\nthree\n";

%*ENV<NOTES> = $file;

my $proc = shell 'wc -l < "$NOTES"', :out;
say $proc.out.slurp(:close).trim;

unlink $file;
```

🦋 Вихідний код можна знайти у файлі [read-env.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/read-env.raku).

## Вивід

```
3
```

## Коментарі

1. `spurt` створює `notes.txt` із трьома рядками. Встановлення `%*ENV<NOTES>` в його ім'я кладе назву файлу в середовище, яке успадкує будь-яка дочірня програма.

1. Команда `shell` успадковує це середовище, розгортає `$NOTES` у `notes.txt` і подає файл до `wc -l`, який рахує його рядки. Перенаправлення `< "$NOTES"` лишає у виводі саме число `3`, яке ми перехоплюємо через `:out` і обрізаємо.

1. Нарешті прибирання виконується назад у Raku через `unlink` — жодної оболонки не потрібно. Видалення файлу є звичайною операцією файлової системи, тож немає причин заводити заради неї ще один процес.

{% include nav.html %}
