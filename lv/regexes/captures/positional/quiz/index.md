---
title: Viktorīna — Pozicionālie tvērumi
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
if 'ab-cd' ~~ / (\w+) '-' (\w+) / {
    say $1;
}
```

{:.quiz}
0 | ｢ab｣
1 | ｢cd｣
0 | ｢ab-cd｣
0 | ｢-｣

{% include quiz.html %}

<div class="extended-explanation">

Abi iekavu pāri satver `$0` un `$1`, numurēti no nulles. Pirmais satver `ab`, otrais satver `cd`, tāpēc `$1` ir `｢cd｣`.

</div>

{% include nav.html %}
