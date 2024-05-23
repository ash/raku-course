---
title: Kvizo — La @*ARGS array
---

{% include menu.html %}

Vi rulas la jenan programon kelkajn fojojn. Por ĉiu rulado, trovu la ĝustajn respondojn.

La programo estas konservita en la dosiero `t.raku` kaj havas la jenan kodon:

```raku
say @*ARGS.elems;
say @*ARGS[0];
```

## 1

La programo estas rulita kiel:

```console
$ raku t.raku hello world
```

Kiaj estas la valoroj presitaj de ĉiu linio de kodo?

{:.quiz-select}
2 | `say @*ARGS.elems;` presas&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` presas&nbsp; (: hello, world, hello world :)

## 2

La programo estas rulita kiel:

```console
$ raku t.raku "hello world"
```

Kiaj estas la valoroj presitaj?

{:.quiz-select}
1 | `say @*ARGS.elems;` presas&nbsp; (: 1, 2 :) | La citita ŝnuro estas unu sola argumento.
hello world | `say @*ARGS[0];` presas&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :)

## 3

La programo estas rulita kiel:

```console
$ raku t.raku "hello" "world"
```

Kion ĝi presas?

{:.quiz-select}
2 | `say @*ARGS.elems;` presas&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` presas&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :) | La citiloj de la ŝelo ne estas inkluzivitaj en la valoro de la argumento.


{% include quiz.html %}

{% include nav.html %}