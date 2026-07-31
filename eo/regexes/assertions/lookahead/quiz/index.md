---
title: Kvizo — Antaŭrigardo
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
say '5 cm' ~~ / \d+ <?before ' cm'> /;
```

{:.quiz}
1 | ｢5｣
0 | ｢5 cm｣
0 | False
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

La pozitiva antaŭrigardo `<?before ' cm'>` postulas, ke la ciferoj estu sekvataj de ` cm`, kio veras. La aserto kontrolas tiun tekston sed ne konsumas ĝin, do la kongruo estas nur la ciferoj, `｢5｣`.

</div>

{% include nav.html %}
