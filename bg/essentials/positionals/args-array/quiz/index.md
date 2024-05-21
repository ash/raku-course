---
title: Тест — Масивът @*ARGS
---

{% include menu.html %}

Изпълнявате следната програма няколко пъти. За всяко изпълнение намерете правилните отговори.

Програмата е запазена във файла `t.raku` и има следния код:

```raku
say @*ARGS.elems;
say @*ARGS[0];
```

## 1

Програмата се изпълнява така:

```console
$ raku t.raku hello world
```

Какви са стойностите, отпечатани от всеки ред код?

{:.quiz-select}
2 | `say @*ARGS.elems;` отпечатва&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` отпечатва&nbsp; (: hello, world, hello world :)

## 2

Програмата се изпълнява така:

```console
$ raku t.raku "hello world"
```

Какви са стойностите, които се отпечатват?

{:.quiz-select}
1 | `say @*ARGS.elems;` отпечатва&nbsp; (: 1, 2 :) | Цитираният низ е един аргумент.
hello world | `say @*ARGS[0];` отпечатва&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :)

## 3

Програмата се изпълнява така:

```console
$ raku t.raku "hello" "world"
```

Какво отпечатва?

{:.quiz-select}
2 | `say @*ARGS.elems;` отпечатва&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` отпечатва&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :) | Цитатите от шел-а не са включени в стойността на аргумента.


{% include quiz.html %}

{% include nav.html %}