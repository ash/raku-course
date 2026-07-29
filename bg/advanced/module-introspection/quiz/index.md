---
title: Тест — Stash
---

{% include menu.html %}

Модулът `Greeting` експортира `hello` и дефинира `our $version`. Какво връща `Greeting::.keys.sort`?

{:.quiz}
1 | ($version EXPORT)
0 | ($version)
0 | ($version &hello)
0 | (hello version)

{% include quiz.html %}

<div class="extended-explanation">

`$version` е `our` променливата на модула, изброена заедно със сигила си. `EXPORT` е пакетът, който Raku добавя автоматично, за да съхранява имената, маркирани с `is export`, така че експортираната `hello` се появява там, а не като самостоятелно име в пакета.

</div>

{% include nav.html %}
