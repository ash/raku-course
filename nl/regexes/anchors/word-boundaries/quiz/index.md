---
title: 'Quiz — Ankers'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
say so 'I have a dog' ~~ /<< dog >>/;
```

{:.quiz}
1 | True
0 | False
0 | ｢dog｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Het patroon eist dat `dog` een heel woord is. In `I have a dog` staat `dog` op zichzelf met een spatie ervoor en het einde van de string erachter, dus is er aan beide kanten een woordgrens, slaagt de match, en geeft `so` `True` terug.

</div>

{% include nav.html %}
