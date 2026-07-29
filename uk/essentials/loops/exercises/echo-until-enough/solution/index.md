---
title: 'Solution: Ехо до достатності'
---

{% include menu.html %}

Ця програма вимагає циклу, який зупиняється, коли користувач вводить заздалегідь визначене слово.

## Код

Існує кілька схожих способів вирішення завдання з використанням `while`, `until` або `repeat`. Один з них показаний нижче.

```raku
my $word;
repeat {
    $word = prompt 'Your word: ';
    say $word;
} while $word ne 'enough';

say 'OK, done.';
```

🦋 Знайдіть програму у файлі [echo-until-enough.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/echo-until-enough.raku).

## Вивід

Запустіть програму, введіть кілька різних слів, а потім завершіть цикл.

```console
$ raku exercises/loops/echo-until-enough.raku
Your word: this
this
Your word: is
is
Your word: my
my
Your word: word
word
Your word: enough
enough
OK, done.
```

## Коментар

Зверніть увагу, що ви оголошуєте змінну `$word` _перед_ циклом, оскільки тест `while` знаходиться поза межами тіла циклу. Якщо змінну визначити всередині циклу, вона не буде видима у тесті.

{% include nav.html %}