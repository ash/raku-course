---
title: Тест — Стойности на enum
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
enum Day (Mon => 1, Tue => 2);
say Tue.key;
```

{:.quiz}
1 | Tue
0 | 2
0 | 1
0 | Mon

{% include quiz.html %}

<div class="extended-explanation">

`.value` дава числото зад дадена константа, но `.key` дава нейното *име* като низ. Така `Tue.key` е `Tue`, независимо от числото `2`, което й е присвоено.

</div>

{% include nav.html %}
