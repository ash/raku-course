---
title: Quiz — Contextus
---

{% include menu.html %}

Quid sequens programma imprimit?

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

Praefixum `+` contextum numericum cogit. Pro ordine, valor numericus est numerus elementorum eius, itaque `+@a` est `3`, non summa. Utere `~` pro contextu chordae (`10 20 30`) vel `[+]` ut elementa revera addas.

</div>

{% include nav.html %}
