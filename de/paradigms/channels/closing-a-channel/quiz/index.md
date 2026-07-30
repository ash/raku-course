---
title: 'Quiz — Einen Kanal schließen'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
$c.close;
say $c.list.elems;
```

{:.quiz}
0 | 0
0 | 1
1 | 2
0 | es wartet ewig

{% include quiz.html %}

<div class="extended-explanation">

`.list` sammelt jeden noch im Kanal liegenden Wert und endet, weil der Kanal geschlossen ist. Zwei Werte wurden gesendet, `.elems` ist also `2`. Ohne das `.close` würde `.list` ewig warten.

</div>

{% include nav.html %}
