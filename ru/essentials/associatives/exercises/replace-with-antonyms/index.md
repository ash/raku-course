---
title: 'Упражнение: Замените на антонимы'
---

{% include menu.html %}

## Задача

Создайте программу, которая заменяет все слова из командной строки на их антонимы. Если слово отсутствует в словаре, не изменяйте его и выводите как есть.

Используйте жестко закодированный хэш для хранения словаря антонимов. Для вашего удобства, вот подготовленный список из около 200 пар, которые вы можете напрямую скопировать и вставить в вашу программу: [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku). Все пары хранятся в обоих направлениях, например:

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

Сделайте программу как можно проще и выводите слова построчно.

## Пример

Запустите программу и передайте ей несколько слов. Убедитесь, что хотя бы некоторые из слов можно найти в словаре.

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

## Решение

✅ [См. решение](solution)

{% include nav.html %}