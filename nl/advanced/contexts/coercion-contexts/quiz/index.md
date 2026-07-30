---
title: Quiz — Contexten
translations_gpt: 'Quiz — Contexts'
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

De `+`-prefix dwingt numerieke context af. Voor een array is de numerieke waarde het aantal elementen, dus `+@a` is `3`, niet de som. Gebruik `~` voor stringcontext (`10 20 30`) of `[+]` om de elementen daadwerkelijk op te tellen.

</div>

{% include nav.html %}
