---
title: Quiz — Der Stash
---

{% include menu.html %}

Das `Greeting`-Modul exportiert `hello` und definiert `our $version`. Was gibt `Greeting::.keys.sort` zurück?

{:.quiz}
1 | ($version EXPORT)
0 | ($version)
0 | ($version &hello)
0 | (hello version)

{% include quiz.html %}

<div class="extended-explanation">

`$version` ist die `our`-Variable des Moduls, aufgelistet mit ihrem Sigil. `EXPORT` ist das Package, das Raku automatisch hinzufügt, um die mit `is export` markierten Namen zu tragen. Daher erscheint das exportierte `hello` dort und nicht als eigenständiger Package-Name.

</div>

{% include nav.html %}
