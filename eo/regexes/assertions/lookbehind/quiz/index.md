---
title: Kvizo — Asertoj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
say 'a=5' ~~ / <?after '='> \d+ /;
```

{:.quiz}
1 | ｢5｣
0 | ｢=5｣
0 | ｢a=5｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

La pozitiva malantaŭrigardo `<?after '='>` postulas `=` tuj antaŭ la nuna pozicio, poste `\d+` kongruas kun la ciferoj. La `=` estas kontrolata sed ne konsumata, do la kongruo estas nur `｢5｣`.

</div>

{% include nav.html %}
