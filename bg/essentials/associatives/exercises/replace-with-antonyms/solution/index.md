---
title: 'Solution: Замяна с антоними'
---

{% include menu.html %}

За да решите задачата, съдържанието на файла [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku) се копира в решаващия файл [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/replace-with-antonyms.raku). След това, цикълът през входните аргументи се опитва да намери думата в речника и ако успее, взема антонима. Ако няма такава дума в речника, се използва оригиналната дума.

## Код

Решението е представено по-долу. Речникът е показан само частично тук.

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

🦋 Намерете програмата във файла [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/replace-with-antonyms.raku).

## Изход

```console
$ raku exercises/associatives/replace-with-antonyms.raku early morning
late
evening

$ raku exercises/associatives/replace-with-antonyms.raku big soft drive
small
hard
drive
```

## Коментари

1. Операторът `//` е [операторът defined-or](/bg/essentials/scalar-variables/defined-or-operator), който връща първия дефиниран операнд.
1. В хеша, всички ключове са думи (т.е. те изглеждат като идентификатори), така че не е необходимо да ги цитирате в хеша. По този начин е възможно да се създаде хеш, както е показано по-долу:

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