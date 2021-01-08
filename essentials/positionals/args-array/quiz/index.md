---
title: Quiz — The @*ARGS array
---

{% include menu.html %}

You are running the following program a few times. For each run, find the correct answers.

The program is saved in the file `t.raku` and has the following code:

```raku
say @*ARGS.elems;
say @*ARGS[0];
```

## 1

The program is run as:

```console
$ raku t.raku hello world
```

What are the values printed by each of the lines of code?

{:.quiz-select}
2 | `say @*ARGS.elems;` prints&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` prints&nbsp; (: hello, world, hello world :)

## 2

The program is run as:

```console
$ raku t.raku "hello world"
```

What are the values printed?

{:.quiz-select}
1 | `say @*ARGS.elems;` prints&nbsp; (: 1, 2 :) | The quoted string is a single argument.
hello world | `say @*ARGS[0];` prints&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :)

## 3

The program is run as:

```console
$ raku t.raku "hello" "world"
```

What does it print?

{:.quiz-select}
2 | `say @*ARGS.elems;` prints&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` prints&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :) | The quotes from the shell are not included in the value of the argument.


{% include quiz.html %}

{% include nav.html %}
