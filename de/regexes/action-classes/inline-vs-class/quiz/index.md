---
title: 'Quiz — Aktionsklassen'
translations_gpt:
---

{% include menu.html %}

Wie sagen Sie `.parse`, dass es eine Aktionsklasse namens `MyActions` verwenden soll?

{:.quiz}
0 | `Grammar.parse($str, MyActions)`
1 | `Grammar.parse($str, actions => MyActions.new)`
0 | `Grammar.parse($str).MyActions`
0 | `Grammar.parse($str, action => MyActions)`

{% include quiz.html %}

<div class="extended-explanation">

Das Aktionsobjekt wird mit dem benannten Argument `actions` übergeben und muss eine **Instanz** sein, mit `.new` erzeugt. Während die Grammatik zerlegt, laufen die passenden Tokenmethoden auf dieser Instanz und bauen das Ergebnis auf.

</div>

{% include nav.html %}
