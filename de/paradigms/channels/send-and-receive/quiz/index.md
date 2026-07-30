---
title: 'Quiz — Kanäle'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Ein Kanal ist eine First-in-first-out-Warteschlange. `10` wurde zuerst gesendet, die erste `.receive` liefert also `10`.

</div>

{% include nav.html %}
