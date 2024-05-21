---
title: Quiz — Das @*ARGS Array
---

{% include menu.html %}

Sie führen das folgende Programm ein paar Mal aus. Finden Sie für jeden Lauf die richtigen Antworten.

Das Programm ist in der Datei `t.raku` gespeichert und hat den folgenden Code:

```raku
say @*ARGS.elems;
say @*ARGS[0];
```

## 1

Das Programm wird ausgeführt als:

```console
$ raku t.raku hello world
```

Welche Werte werden von jeder der Codezeilen ausgegeben?

{:.quiz-select}
2 | `say @*ARGS.elems;` gibt aus&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` gibt aus&nbsp; (: hello, world, hello world :)

## 2

Das Programm wird ausgeführt als:

```console
$ raku t.raku "hello world"
```

Welche Werte werden ausgegeben?

{:.quiz-select}
1 | `say @*ARGS.elems;` gibt aus&nbsp; (: 1, 2 :) | Der zitierte String ist ein einzelnes Argument.
hello world | `say @*ARGS[0];` gibt aus&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :)

## 3

Das Programm wird ausgeführt als:

```console
$ raku t.raku "hello" "world"
```

Was wird ausgegeben?

{:.quiz-select}
2 | `say @*ARGS.elems;` gibt aus&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` gibt aus&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :) | Die Anführungszeichen der Shell sind nicht im Wert des Arguments enthalten.


{% include quiz.html %}

{% include nav.html %}