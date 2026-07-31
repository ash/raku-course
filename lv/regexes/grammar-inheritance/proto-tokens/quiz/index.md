---
title: Viktorīna — Gramatikas un mantošana
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
grammar Base {
    token TOP  { <word> }
    token word { 'cat' }
}

grammar Pet is Base {
    token word { 'dog' }
}

say Pet.parse('dog').defined;
```

{:.quiz}
1 | True
0 | False
0 | ｢cat｣
0 | ｢dog｣

{% include quiz.html %}

<div class="extended-explanation">

`Pet` manto `TOP` no `Base`, taču pārraksta marķieri `word`, lai tas piemeklētu `dog`. Kad `Pet` parsē `'dog'`, tiek izmantots tās pašas `word`, tāpēc parsēšana izdodas un `.defined` ir `True`.

</div>

{% include nav.html %}
