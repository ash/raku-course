---
title: Quiz — Canales
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

Canalis ordo est «primus intrans, primus exiens». `10` primum missum est, itaque primum `.receive` `10` reddit.

</div>

{% include nav.html %}
