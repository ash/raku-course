---
title: 'Розв''язання: Оберни й вигукни'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
say 'raku'.flip.uc;
```

🦋 Вихідний код можна знайти у файлі [reverse-and-shout.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/reverse-and-shout.raku).

## Вивід

```
UKAR
```

## Коментарі

1. Методи застосовуються зліва направо: спершу `flip` обертає `'raku'` на `'ukar'`, а потім `uc` перетворює це на `'UKAR'`.

1. Оскільки кожен метод повертає новий рядок, їх можна зчепити в одному виразі.

{% include nav.html %}
