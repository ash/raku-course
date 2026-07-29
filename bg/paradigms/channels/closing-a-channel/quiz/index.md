---
title: 'Тест — Затваряне на канал'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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
0 | ще чака вечно

{% include quiz.html %}

<div class="extended-explanation">

`.list` събира всяка стойност, останала в канала, и приключва, защото каналът е затворен. Изпратени са две стойности, така че `.elems` е `2`. Без `.close` `.list` би чакал вечно.

</div>

{% include nav.html %}
