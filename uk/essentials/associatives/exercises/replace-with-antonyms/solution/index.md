---
title: 'Solution: Замінити антонімами'
---

{% include menu.html %}

Щоб вирішити завдання, вміст файлу [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku) копіюється у файл рішення [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/replace-with-antonyms.raku). Після цього, цикл по вхідних аргументах намагається знайти слово в словнику, і якщо знаходить, бере антонім. Якщо такого слова в словнику немає, використовується оригінальне слово.

## Код

Рішення представлено нижче. Словник показано лише частково.

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

🦋 Знайдіть програму у файлі [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/replace-with-antonyms.raku).

## Вивід

```console
$ raku exercises/associatives/replace-with-antonyms.raku early morning
late
evening

$ raku exercises/associatives/replace-with-antonyms.raku big soft drive
small
hard
drive
```

## Коментарі

1. Оператор `//` є [оператором defined-or](/uk/essentials/scalar-variables/defined-or-operator), який повертає перший визначений операнд.
1. У хеші всі ключі є словами (тобто вони виглядають як ідентифікатори), тому вам не потрібно їх цитувати в хеші. Таким чином, можна створити хеш, як показано нижче:

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