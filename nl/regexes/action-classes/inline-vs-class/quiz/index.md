---
title: 'Quiz — Actieklassen'
translations_gpt:
---

{% include menu.html %}

Hoe vertel je `.parse` dat hij een actieklasse met de naam `MyActions` moet gebruiken?

{:.quiz}
0 | `Grammar.parse($str, MyActions)`
1 | `Grammar.parse($str, actions => MyActions.new)`
0 | `Grammar.parse($str).MyActions`
0 | `Grammar.parse($str, action => MyActions)`

{% include quiz.html %}

<div class="extended-explanation">

Het actieobject wordt met het benoemde argument `actions` meegegeven, en het moet een **instantie** zijn, gemaakt met `.new`. Terwijl de grammatica ontleedt, draaien de bijpassende tokenmethoden op die instantie en bouwen ze het resultaat op.

</div>

{% include nav.html %}
