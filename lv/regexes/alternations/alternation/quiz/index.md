---
title: Viktorīna — Grupēšana
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
say 'goodbye' ~~ / [ hello | good ] bye /;
```

{:.quiz}
1 | ｢goodbye｣
0 | ｢good｣
0 | ｢bye｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Kvadrātiekavas sagrupē alternatīvu `hello | good` bez tveršanas, tāpēc raksturs nozīmē «`hello` vai `good`, tad `bye`». Vārdā `goodbye` sakrīt alternatīva `good`, un tai seko `bye`, dodot `｢goodbye｣`.

</div>

{% include nav.html %}
