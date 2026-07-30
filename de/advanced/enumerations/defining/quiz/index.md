---
title: Quiz — Aufzählungen
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
enum Colour <red green blue>;
say green + blue;
```

{:.quiz}
1 | 3
0 | greenblue
0 | (green blue)
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

Jede Konstante steht für eine Zahl, die ab Null in der Reihenfolge der Auflistung zugewiesen wird: `red` ist `0`, `green` ist `1`, `blue` ist `2`. In einem arithmetischen Kontext verhalten sich die Konstanten wie diese Zahlen, also ist `green + blue` gleich `1 + 2`, was `3` ergibt.

</div>

{% include nav.html %}
