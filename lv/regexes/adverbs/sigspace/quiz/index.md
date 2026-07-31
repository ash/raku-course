---
title: Viktorīna — Apstākļa vārdi
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma? Ievērojiet apstākļvārdu `:s` un atstarpju virteni tekstā.

```raku
say so 'hello   world' ~~ /:s hello world/;
```

{:.quiz}
1 | True
0 | False
0 | ｢hello   world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Apstākļvārds `:s` padara atstarpi starp `hello` un `world` raksturā nozīmīgu — tā pieprasa, lai tur būtu atstarpe. Der viena vai vairākas atstarpes, tāpēc trīs atstarpju virtene tekstā sakrīt un rezultāts ir `True`. Bez `:s` atstarpe raksturā tiktu ignorēta un raksturs meklētu `helloworld`.

</div>

{% include nav.html %}
