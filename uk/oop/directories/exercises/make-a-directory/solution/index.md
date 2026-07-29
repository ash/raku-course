---
title: 'Розв''язання: Створіть каталог'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
mkdir 'reports';
spurt 'reports/data.txt', 'x';

say 'reports'.IO.d;
say 'reports/data.txt'.IO.e;
```

🦋 Вихідний код можна знайти у файлі [make-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/make-a-directory.raku).

## Вивід

```
True
True
```

## Коментарі

1. `mkdir` створює каталог, а `.IO.d` підтверджує, що `reports` є каталогом.

1. Оскільки каталог тепер існує, у нього можна записати файл, вказавши шлях, що містить ім'я каталогу, — `reports/data.txt`. Перевірка `.e` для цього шляху підтверджує, що файл створено всередині нового каталогу.

1. Порядок має значення: `spurt` **не** створює відсутніх каталогів за вас. Запис у `reports/data.txt` до того, як існує каталог `reports`, зазнає невдачі з помилкою на кшталт `Failed to open file … : No such file or directory`. Саме створення каталогу першим — як тут робить `mkdir` — дозволяє запису вдатися. До речі, `mkdir` створює й усі відсутні проміжні каталоги, тож вкладений шлях на кшталт `mkdir 'reports/2026'` будує весь ланцюжок одним викликом.

{% include nav.html %}
