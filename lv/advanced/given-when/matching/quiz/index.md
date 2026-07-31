---
title: 'Viktorīna — `when`'
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
given 5 {
    when $_ > 0 { say 'positive' }
    when 5      { say 'five' }
}
```

{:.quiz}
1 | positive
0 | five
0 | both lines
0 | nothing

{% include quiz.html %}

<div class="extended-explanation">

`when` bloks automātiski *iziet* no `given` pēc tam, kad tas ir atbilsts — caurkritšanas nav. `5` atbilst pirmajam nosacījumam `$_ > 0`, tāpēc tiek izdrukāts `positive`, un otrais `when 5` nekad netiek sasniegts, lai gan tas arī būtu atbilsts.

</div>

{% include nav.html %}
