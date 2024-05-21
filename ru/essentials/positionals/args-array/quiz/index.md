---
title: Викторина — Массив @*ARGS
---

{% include menu.html %}

Вы запускаете следующую программу несколько раз. Для каждого запуска найдите правильные ответы.

Программа сохранена в файле `t.raku` и имеет следующий код:

```raku
say @*ARGS.elems;
say @*ARGS[0];
```

## 1

Программа запускается как:

```console
$ raku t.raku hello world
```

Какие значения выводятся каждой строкой кода?

{:.quiz-select}
2 | `say @*ARGS.elems;` выводит&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` выводит&nbsp; (: hello, world, hello world :)

## 2

Программа запускается как:

```console
$ raku t.raku "hello world"
```

Какие значения выводятся?

{:.quiz-select}
1 | `say @*ARGS.elems;` выводит&nbsp; (: 1, 2 :) | Заключенная в кавычки строка является одним аргументом.
hello world | `say @*ARGS[0];` выводит&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :)

## 3

Программа запускается как:

```console
$ raku t.raku "hello" "world"
```

Что она выводит?

{:.quiz-select}
2 | `say @*ARGS.elems;` выводит&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` выводит&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :) | Кавычки из оболочки не включаются в значение аргумента.


{% include quiz.html %}

{% include nav.html %}