---
title: Quiz — Kontexte
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my @a = 10, 20, 30;
say +@a;
```

{:.quiz}
0 | 60
1 | 3
0 | 10
0 | 10 20 30

{% include quiz.html %}

<div class="extended-explanation">

Der Präfix `+` erzwingt den numerischen Kontext. Für ein Array ist der numerische Wert seine Elementanzahl, also ist `+@a` `3`, nicht die Summe. Verwende `~` für den Stringkontext (`10 20 30`) oder `[+]`, um die Elemente tatsächlich zu addieren.

</div>

{% include nav.html %}
