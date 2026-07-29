---
title: 'Solution: Рекурсивен факториел'
---

{% include menu.html %}

Факториелът е много продуктивно упражнение, тъй като може да бъде решено по много различни начини. Този път използваме рекурсия, което означава, че функцията се извиква сама от себе си.

## Код 1

Ето кода на решението. Забележете, че трябва да проверите условието за спиране на рекурсията, иначе тя ще продължи безкрайно.

```raku
sub factorial($n) {
    if $n < 2 {
        return 1;
    }
    else {
        return $n * factorial($n - 1);
    }
}

say factorial(10);
```

🦋 Намерете програмата във файла [recursive-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/recursive-factorial.raku).

## Код 2

В случаите, както е показано в този код, често е по-добре да се използват постфиксни форми на `if`, за да се върне незабавно от функцията. Този подход изчиства кода и премахва много отстъпки и пунктуация.

```raku
sub factorial($n) {
    return 1 if $n < 2;
    return $n * factorial($n - 1);
}

say factorial(10);
```

🦋 Намерете актуализираната програма във файла [recursive-factorial-2.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/recursive-factorial-2.raku).

## Пример

Стартирайте програмата и проверете резултата. Между другото, знаете ли, че _10!_ е точното количество секунди в шест седмици?

```console
$ raku exercises/functions/recursive-factorial.raku
3628800
```

{% include nav.html %}