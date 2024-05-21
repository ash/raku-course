---
title: 'Решение: Замена на антонимы'
---

{% include menu.html %}

Чтобы решить задачу, содержимое файла [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku) копируется в файл решения [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku). После этого цикл по входным аргументам пытается найти слово в словаре, и если оно найдено, берется антоним. Если такого слова в словаре нет, используется оригинальное слово.

## Код

Решение представлено ниже. Словарь показан здесь только частично.

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    'achieve' => 'fail',
    # . . .
    'wrong' => 'right',
    'young' => 'old'    
;

for @*ARGS -> $word {
    say %dictionary{$word} // $word;
}
```

🦋 Найдите программу в файле [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku).

## Вывод

```console
$ raku exercises/associatives/replace-with-antonyms.raku early morning
late
evening

$ raku exercises/associatives/replace-with-antonyms.raku big soft drive
small
hard
drive
```

## Комментарии

1. Оператор `//` — это [оператор defined-or](/ru/essentials/scalar-variables/defined-or-operator), который возвращает первый определенный операнд.
1. В хэше все ключи являются словами (т.е. они выглядят как идентификаторы), поэтому их не нужно заключать в кавычки. Таким образом, можно создать хэш, как показано ниже:

```raku
my %dictionary =
    above => 'below',
    absent => 'present',
    achieve => 'fail',
    # . . .
    wrong => 'right',
    young => 'old'    
;
```

{% include nav.html %}