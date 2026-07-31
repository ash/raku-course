---
title: Kvizo — Denaskaj tipoj
translations_gpt:
---

{% include menu.html %}

Kion presas la sekva programo?

```raku
my int $n = 42;
say $n.^name;
```

{:.quiz}
1 | Int
0 | int
0 | (Int)
0 | Num

{% include quiz.html %}

<div class="extended-explanation">

Kiam vi introspektas indiĝenan valoron, ĝi estas aŭtomate *enkastita* en la konvenan plenan tipon. Do kvankam `$n` estas deklarita kiel indiĝena `int`, demandi pri ĝia tipnomo per `.^name` raportas la enkastitan `Int`.

</div>

{% include nav.html %}
