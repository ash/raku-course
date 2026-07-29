---
title: 'Тест — Канали'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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

Канал є чергою «перший прийшов — перший вийшов». `10` надіслано першим, тож перший `.receive` повертає `10`.

</div>

{% include nav.html %}
