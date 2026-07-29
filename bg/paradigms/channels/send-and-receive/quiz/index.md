---
title: 'Тест — Канали'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

Каналът е опашка „първи влязъл, първи излязъл“. `10` е изпратено първо, така че първият `.receive` връща `10`.

</div>

{% include nav.html %}
