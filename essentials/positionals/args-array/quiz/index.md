---
title: Quiz — The @*ARGS array
---

{% include menu.html %}

You are running the following program a few times. For each run, find the correct answers.

The program is saved in the file `t.raku` and has the following contents:

```raku
say @*ARGS.elems;
say @*ARGS[0];
```

## 1

The program is run as:

```console
$ raku t.raku hello world
```

What are the values printed by each lines?

{:.quiz-select}
2 | `say @*ARGS.elems;` prints (: 1, 2 :)
hello | `say @*ARGS[0];` prints (: hello, world, hello world :)

## 2

The program is run as:

```console
$ raku t.raku "hello world"
```

What are the values printed by each lines?

{:.quiz-select}
1 | `say @*ARGS.elems;` prints (: 1, 2 :) | The quoted string is a single argument.
hello world | `say @*ARGS[0];` prints (: hello, world, hello world :)

## 3

The program is run as:

```console
$ raku t.raku "hello" "world"
```

What are the values printed by each lines?

{:.quiz-select}
2 | `say @*ARGS.elems;` prints (: 1, 2 :)
hello | `say @*ARGS[0];` prints (: hello, world, hello world :) | The quotes from the shell are not included in the value of the argument.


{% include quiz.html %}

{% include nav.html %}
