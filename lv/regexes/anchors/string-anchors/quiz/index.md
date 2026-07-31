---
title: Viktorīna — Virknes enkuri
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma? Ievērojiet `$` raksturā beigās.

```raku
say so 'hello world' ~~ / world $/;
```

{:.quiz}
1 | True
0 | False
0 | ｢world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Enkurs `$` pieprasa, lai sakritība beigtos pašās virknes beigās. Virkne `hello world` tiešām beidzas ar `world`, tāpēc noenkurotais raksturs izdodas un `so` atgriež `True`.

</div>

{% include nav.html %}
