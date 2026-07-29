---
title: 'Solution: Факторіал з мульти-функціями'
---

{% include menu.html %}

Ця вправа знову про факторіали. Дійсно, завдання дозволяє нам проілюструвати більше можливостей Raku.

При обчисленні факторіала, починаючи з заданого числа і рухаючись вниз, потрібно зупинитися, коли число стане 1. За допомогою multi-функцій ви можете досягти цього, виділивши випадок з `$n == 1` в окрему multi-функцію.

## Код

Ось розв'язок:

```raku
multi sub factorial(1)  { 1 }
multi sub factorial($n) { $n * factorial($n - 1) }

say factorial(@*ARGS[0].Int);
```

🦋 Знайдіть програму у файлі [factorial-with-multi-functions.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/more-on-functions/factorial-with-multi-functions.raku).

## Вивід

```console
$ raku exercises/more-on-functions/factorial-with-multi-functions.raku 5
120
```

## Коментар

Зверніть увагу, що вхідний аргумент явно перетворюється на ціле число: `@*ARGS[0].Int`. Це для запобігання нескінченному циклу, коли вхідне число дорівнює `1`. У цьому випадку тип параметра, переданого до функції `factorial`, є [`IntStr`](/uk/essentials/typed-variables/allomorphs), і перший multi-варіант не може перехопити виклик. На відміну від цього, коли `factorial(2 - 1)` викликається рекурсивно, аргумент функції є цілим числом, що дозволяє викликати перший варіант.

{% include nav.html %}