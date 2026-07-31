---
title: Quiz — Channel
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

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

Un channel è una coda primo entrato, primo uscito. `10` è stato inviato per primo, quindi il primo `.receive` restituisce `10`.

</div>

{% include nav.html %}
