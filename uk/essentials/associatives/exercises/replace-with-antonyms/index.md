---
title: 'Вправа: Заміна на антоніми'
---

{% include menu.html %}

## Проблема

Створіть програму, яка замінює всі слова з командного рядка на їхні антоніми. Якщо слово відсутнє в словнику, не змінюйте його і виведіть як є.

Використовуйте жорстко закодований хеш для зберігання словника антонімів. Для вашої зручності, ось підготовлений список приблизно з 200 пар, який ви можете безпосередньо скопіювати та вставити у вашу програму: [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku). Усі пари зберігаються в обох напрямках, наприклад:

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    # . . .
    'below' => 'above',
    # . . .
    'present' => 'absent',
    # . . .
;
```

Зробіть програму якомога простішою та виводьте слова рядок за рядком.

## Приклад

Запустіть програму та передайте їй кілька слів. Переконайтеся, що принаймні деякі з цих слів можна знайти у словнику.

```console
$ raku replace-with-antonyms.raku a quiet teacher wants to buy some salt
a
noisy
student
wants
to
sell
some
sugar
```

## Рішення

✅ [Дивіться рішення](solution)

{% include nav.html %}