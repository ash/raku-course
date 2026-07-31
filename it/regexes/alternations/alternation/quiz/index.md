---
title: Quiz — Raggruppamento
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

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

Le parentesi quadre raggruppano l'alternativa `hello | good` senza catturare, quindi lo schema significa «`hello` oppure `good`, poi `bye`». In `goodbye` l'alternativa `good` corrisponde ed è seguita da `bye`, dando `｢goodbye｣`.

</div>

{% include nav.html %}
