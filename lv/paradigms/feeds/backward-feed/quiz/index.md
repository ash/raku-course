---
title: Viktorīna — Atpakaļvērstā plūsma
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my @out <== map(* + 1) <== (10, 20, 30);
say @out;
```

{:.quiz}
1 | [11 21 31]
0 | [31 21 11]
0 | [30 20 10]
0 | [10 20 30]

{% include quiz.html %}

<div class="extended-explanation">

`<==` maina tikai virzienu, kādā konveijers uzrakstīts, nevis datu secību. Avots `(10, 20, 30)` ieplūst — mērķis ir kreisajā pusē —, un `map(* + 1)` katram elementam turpat pieskaita vienu, dodot `[11 21 31]`. Atpakaļvērstā plūsma elementus nekad neapgriež otrādi; tam vajadzētu tiešu `reverse`.

</div>

{% include nav.html %}
