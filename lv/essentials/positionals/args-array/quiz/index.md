---
title: Viktorīna — @*ARGS masīvs
---

{% include menu.html %}

Jūs vairākas reizes palaižat šādu programmu. Katram izpildes gadījumam atrodiet pareizās atbildes.

Programma ir saglabāta failā `t.raku` un tai ir šāds kods:

```raku
say @*ARGS.elems;
say @*ARGS[0];
```

## 1

Programma tiek palaista šādi:

```console
$ raku t.raku hello world
```

Kādas vērtības izdrukā katra koda rinda?

{:.quiz-select}
2 | `say @*ARGS.elems;` izdrukā&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` izdrukā&nbsp; (: hello, world, hello world :)

## 2

Programma tiek palaista šādi:

```console
$ raku t.raku "hello world"
```

Kādas vērtības tiek izdrukātas?

{:.quiz-select}
1 | `say @*ARGS.elems;` izdrukā&nbsp; (: 1, 2 :) | Citētā virkne ir viens arguments.
hello world | `say @*ARGS[0];` izdrukā&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :)

## 3

Programma tiek palaista šādi:

```console
$ raku t.raku "hello" "world"
```

Ko tā izdrukā?

{:.quiz-select}
2 | `say @*ARGS.elems;` izdrukā&nbsp; (: 1, 2 :)
hello | `say @*ARGS[0];` izdrukā&nbsp; (: hello, &quot;hello&quot;, world, &quot;world&quot;, hello world, &quot;hello world&quot; :) | Citāti no čaulas netiek iekļauti argumenta vērtībā.


{% include quiz.html %}

{% include nav.html %}