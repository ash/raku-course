---
title: "Quiz — Grammatica's maken"
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

`.parse` slaagt alleen wanneer de grammatica de **hele** string matcht. `\w+` matcht `hello`, maar dan blijven een spatie en `world` over, dus wordt de invoer niet volledig verbruikt: `.parse` geeft `Nil` terug en `.defined` is `False`.

</div>

{% include nav.html %}
