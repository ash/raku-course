---
title: 'Тест — Каналы'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

Канал — очередь по принципу «первым пришёл, первым вышел». `10` было отправлено первым, поэтому
первый `.receive` возвращает `10`.

</div>

{% include nav.html %}
