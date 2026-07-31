---
title: Viktorīna — Gramatiku veidošana
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
grammar Word {
    token TOP { \w+ }
}

say Word.parse('hello world').defined;
```

{:.quiz}
0 | True
1 | False
0 | ｢hello｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`.parse` izdodas tikai tad, kad gramatika sakrīt ar **visu** virkni. `\w+` sakrīt ar `hello`, taču tad paliek pāri atstarpe un `world`, tāpēc ievade nav patērēta līdz galam: `.parse` atgriež `Nil` un `.defined` ir `False`.

</div>

{% include nav.html %}
