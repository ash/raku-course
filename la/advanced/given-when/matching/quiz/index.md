---
title: 'Quiz — `when`'
translations_gpt:
---

{% include menu.html %}

Quid sequens programma imprimit?

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

Copia `when` automatice *erumpit* e copia `given` postquam congruit — nullus est casus transitus. `5` satisfacit primae condicioni `$_ > 0`, ergo `positive` imprimitur et secunda `when 5` numquam attingitur, etiamsi etiam congruisset.

</div>

{% include nav.html %}
