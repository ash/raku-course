---
title: Quiz 2 — Lista e scalare vs. lista e array
---

{% include menu.html %}

Ci sono delle liste sul lato destro nei seguenti assegnamenti. Di che tipo sono gli oggetti che le variabili contengono?

### 1

```raku
my $x = (100, 200, 300);
my @x = (100, 200, 300);

say $x.WHAT;
say @x.WHAT;
```

Scegli le risposte corrette:

{:.quiz-select}
(List) | Il tipo di `$x` è&nbsp; (: (Array), (Int), (List) :)
(Array) | Il tipo di `@x` è&nbsp; (: (Array), (Int), (List) :)

## 2*

Ecco un caso più complicato. Non preoccuparti se non lo capisci ora. Torneremo su questo argomento nella seconda parte del corso.

```raku
my $x = [100, 200, 300];
my @x = [100, 200, 300];

say $x.WHAT;
say @x.WHAT;
```

Scegli le risposte corrette:

{:.quiz-select}
(Array) | Il tipo di `$x` è&nbsp; (: (Array), (Int), (List) :)
(Array) | Il tipo di `@x` è&nbsp; (: (Array), (Int), (List) :)

{% include quiz.html %}

{% include nav.html %}