---
title: 'Решение: Факториал с мульти-функциями'
---

{% include menu.html %}

Это упражнение снова касается факториалов. Действительно, задача позволяет нам проиллюстрировать больше возможностей Raku.

При вычислении факториала, начиная с заданного числа и идя вниз, нужно остановиться, когда число станет 1. С помощью multi-функций вы можете достичь этого, выделив случай с `$n == 1` в отдельную multi-функцию.

## Код

Вот решение:

```raku
multi sub factorial(1)  { 1 }
multi sub factorial($n) { $n * factorial($n - 1) }

say factorial(@*ARGS[0].Int);
```

🦋 Найдите программу в файле [factorial-with-multi-functions.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/more-on-functions/factorial-with-multi-functions.raku).

## Вывод

```console
$ raku exercises/more-on-functions/factorial-with-multi-functions.raku 5
120
```

## Комментарий

Обратите внимание, что входной аргумент явно преобразуется в целое число: `@*ARGS[0].Int`. Это необходимо для предотвращения бесконечного цикла, когда входное число равно `1`. В этом случае тип параметра, передаваемого функции `factorial`, является [`IntStr`](/ru/essentials/typed-variables/allomorphs), и первый multi-вариант не может поймать вызов. Напротив, когда `factorial(2 - 1)` вызывается рекурсивно, аргумент функции является целым числом, что позволяет вызвать первый вариант.

{% include nav.html %}