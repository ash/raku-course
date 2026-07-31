---
title: Kvizo — Difini operatoron
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
sub infix:<times>($a, $b) { $a * $b }

say 6 times 7;
```

{:.quiz}
1 | 42
0 | 67
0 | times
0 | eraron

{% include quiz.html %}

<div class="extended-explanation">

`infix:<times>` difinas novan operatoron skribatan inter siaj du operandoj. Ĝia korpo multiplikas ilin, do `6 times 7` taksiĝas al `42` — operatoro estas nur subrutino kun speciala nomo.

</div>

{% include nav.html %}
