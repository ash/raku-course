---
title: 'Solution: Преглед на резултата от `prompt` — Числа'
---

{% include menu.html %}

## Код

Ето пълната програма, която решава проблема и отпечатва както въведената стойност, така и нейния тип.

```raku
my $n = prompt 'Enter a number: ';
say $n;
say $n.WHAT;
```

🦋 Можете да намерите изходния код във файла [prompt-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/typed-variables/prompt-numbers.raku).

## Тестови изпълнения

Изпълнете програмата няколко пъти и въведете числа от различни типове.

### Цели числа

Нека първо опитаме с цели числа, както положителни, така и отрицателни.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 10
10
(IntStr)
```

Типът на резултата е `IntStr`. Това е вграден тип, който има характеристиките както на `Int`, така и на `Str`.

### Рационални числа

Сега нека опитаме с рационално число. Помнете, че в Raku, нотацията с десетична точка създава число от тип `Rat`, а не число с плаваща запетая.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 3.14
3.14
(RatStr)
```

Този път, програмата казва, че типът на данните в `$n` е `RatStr`, което означава комбиниран тип както на `Rat`, така и на `Str`.

### Числа с плаваща запетая

Накрая, опитайте число в научна нотация. Трябва да можете да предположите изхода на този етап.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 5e-14
5e-14
(NumStr)
```

Наистина, новата стойност е от тип `NumStr`.

{% include nav.html %}