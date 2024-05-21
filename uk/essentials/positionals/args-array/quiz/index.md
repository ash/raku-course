---
title: Вікторина — Масив @*ARGS
---

{% include menu.html %}

Ви запускаєте наступну програму кілька разів. Для кожного запуску знайдіть правильні відповіді.

Програма збережена у файлі `t.raku` і має наступний код:

```raku
say @*ARGS.elems;
say @*ARGS[0];
```

## 1

Програму запущено так:

```console
$ raku t.raku hello world
```

Які значення виводяться кожним рядком коду?

{:.quiz-select}
2 | `say @*ARGS.elems;` виводить&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` виводить&nbsp; (: hello, world, hello world :)

## 2

Програму запущено так:

```console
$ raku t.raku "hello world"
```

Які значення виводяться?

{:.quiz-select}
1 | `say @*ARGS.elems;` виводить&nbsp; (: 1, 2 :) | Цитований рядок є одним аргументом.
hello world | `say @*ARGS[0];` виводить&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :)

## 3

Програму запущено так:

```console
$ raku t.raku "hello" "world"
```

Що вона виводить?

{:.quiz-select}
2 | `say @*ARGS.elems;` виводить&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` виводить&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :) | Лапки з оболонки не включені у значення аргументу.


{% include quiz.html %}

{% include nav.html %}