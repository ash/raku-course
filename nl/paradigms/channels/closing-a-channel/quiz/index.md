---
title: 'Quiz — Een kanaal sluiten'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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
0 | het wacht eeuwig

{% include quiz.html %}

<div class="extended-explanation">

`.list` verzamelt elke waarde die nog in het kanaal zit en is klaar omdat het kanaal gesloten is. Er zijn twee waarden verstuurd, dus `.elems` is `2`. Zonder de `.close` zou `.list` eeuwig wachten.

</div>

{% include nav.html %}
