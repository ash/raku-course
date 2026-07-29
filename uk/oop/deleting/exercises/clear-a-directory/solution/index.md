---
title: 'Розв''язання: Очистіть каталог'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
mkdir 'cache';
spurt 'cache/a.tmp', '1';
spurt 'cache/b.tmp', '2';

.unlink for 'cache'.IO.dir;
rmdir 'cache';

say 'cache'.IO.e;
```

🦋 Вихідний код можна знайти у файлі [clear-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/clear-a-directory.raku).

## Вивід

```
False
```

## Коментарі

1. `rmdir` вилучає лише порожній каталог, тож файли мають зникнути першими. `'cache'.IO.dir` перелічує записи, а `.unlink for …` видаляє кожен із них.

1. Тепер, коли каталог порожній, `rmdir` його вилучає. Остання перевірка `.e` повідомляє `False`, підтверджуючи, що `cache` зник.

{% include nav.html %}
