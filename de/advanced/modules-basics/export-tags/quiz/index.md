---
title: Quiz — Export-Tags
---

{% include menu.html %}

Ein Modul deklariert `sub hello is export` und `sub goodbye is export(:partings)`. Nach `use Greeting :partings;`, welche Subroutinen kann das Programm direkt aufrufen?

{:.quiz}
1 | Only `goodbye`
0 | Only `hello`
0 | Both `hello` and `goodbye`
0 | Neither of them

{% include quiz.html %}

<div class="extended-explanation">

Die Angabe eines Tags importiert diese Gruppe *anstelle* der Standardgruppe, sodass `:partings` `goodbye` einbringt, aber `hello` außen vor lässt. Um beide zu erhalten, würdest du das eingebaute Tag `:ALL` mit `use Greeting :ALL;` anfordern.

</div>

{% include nav.html %}
