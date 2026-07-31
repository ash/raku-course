---
title: Viktorīna — Darbību klases
translations_gpt:
---

{% include menu.html %}

Kā pateikt `.parse`, lai tas izmanto darbību klasi ar nosaukumu `MyActions`?

{:.quiz}
0 | `Grammar.parse($str, MyActions)`
1 | `Grammar.parse($str, actions => MyActions.new)`
0 | `Grammar.parse($str).MyActions`
0 | `Grammar.parse($str, action => MyActions)`

{% include quiz.html %}

<div class="extended-explanation">

Darbību objektu padod ar nosaukto argumentu `actions`, un tam jābūt **instancei**, kas izveidota ar `.new`. Gramatikai parsējot, uz šīs instances izpildās atbilstošās marķieru metodes un uzbūvē rezultātu.

</div>

{% include nav.html %}
