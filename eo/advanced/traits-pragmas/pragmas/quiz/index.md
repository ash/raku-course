---
title: Kvizo — Pragmoj
translations_gpt:
---

{% include menu.html %}

Kun la defaŭlta pragmo `strict` de Raku en forto, kio okazas, kiam vi atribuas al variablo, kiun vi neniam deklaris, kiel en `$x = 42`?

{:.quiz}
1 | Ĝi estas kompiltempa eraro
0 | Ĝi silente kreas `$x`
0 | Ĝi presas averton sed ruliĝas
0 | Ĝi metas `$x` al `Nil`

{% include quiz.html %}

<div class="extended-explanation">

`strict` estas ŝaltita defaŭlte kaj postulas, ke ĉiu variablo estu unue deklarita per `my`, do nuda `$x = 42` malsukcesas kompiliĝi — *Variable '$x' is not declared*. Malŝalti la pragmon per `no strict` lasus la atribuon trapasi.

</div>

{% include nav.html %}
