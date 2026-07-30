---
title: 'Quiz — Kanalen'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my $c = Channel.new;
$c.send(10);
$c.send(20);
say $c.receive;
```

{:.quiz}
1 | 10
0 | 20
0 | 30
0 | (10 20)

{% include quiz.html %}

<div class="extended-explanation">

Een kanaal is een first-in-first-outwachtrij. `10` werd als eerste verstuurd, dus geeft de eerste `.receive` `10` terug.

</div>

{% include nav.html %}
