---
title: 'Розв''язання: Перехопіть помилку'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $ok = try { 6 * 7 };
say $ok;

my $bad = try { die 'broken' };
say $bad.defined;
say $!.message;
```

🦋 Вихідний код можна знайти у файлі [catch-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/catch-the-error.raku).

## Вивід

```
42
False
broken
```

## Коментарі

1. Коли блок виконується без помилки, `try` просто обчислюється у значення блоку, тож `$ok` містить `42`.

1. `die` всередині другого блоку кидає виняток, тож цей блок обчислюється в невизначене значення, і `$bad.defined` дає `False`.

1. Перехоплений виняток зберігається в спеціальній змінній `$!`, а `$!.message` повертає наданий йому текст — `broken`.

{% include nav.html %}
