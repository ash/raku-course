---
title: 'Тест — Закриття каналу'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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
0 | вона чекатиме вічно

{% include quiz.html %}

<div class="extended-explanation">

`.list` збирає кожне значення, що ще є в каналі, і завершується, бо канал закрито. Надіслано два значення, тож `.elems` дорівнює `2`. Без `.close` `.list` чекав би вічно.

</div>

{% include nav.html %}
