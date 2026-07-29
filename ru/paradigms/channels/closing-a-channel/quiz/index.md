---
title: 'Тест — Закрытие канала'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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
0 | будет ждать вечно

{% include quiz.html %}

<div class="extended-explanation">

`.list` собирает все значения, ещё остающиеся в канале, и завершается, потому что канал закрыт.
Было отправлено два значения, поэтому `.elems` равно `2`. Без `.close` метод `.list` ждал бы вечно.

</div>

{% include nav.html %}
