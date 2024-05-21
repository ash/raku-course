---
title: 'Viktorīna: Kāds ir tā tips?'
---

{% include menu.html %}

Izvēlieties pareizo tipu katram no uzskaitītajiem literāliem.

{:.quiz-select}
Str | `"Hello, World!"` ir (: Int, Rat, Num, Str :)
Str | `'Hello, World!'` ir (: Int, Rat, Num, Str :)
Int | `12345` ir (: Int, Rat, Num, Str :)
Str | `'12345'` ir (: Int, Rat, Num, Str :)
Rat | `123.45` ir (: Int, Rat, Num, Str :) | Tas ir racionāls skaitlis Raku, nevis peldošā punkta skaitlis.
Rat | `500.000` ir (: Int, Rat, Num, Str :) | Pat ja skaitlim nav faktiskas decimālās daļas, tā tips nav `Int`.
Int | `500_000` ir (: Int, Rat, Num, Str :) | `_` ir tūkstošu atdalītājs, lai cilvēkam būtu vieglāk lasīt.
Str | `'3.14e2'` ir (: Int, Rat, Num, Str :) | Tā ir citēta rakstzīmju virkne, tāpēc tas ir virkne.
Rat | `3.14` ir (: Int, Rat, Num, Str :)
Num | `3.14e0` ir (: Int, Rat, Num, Str :)

{% include quiz.html %}
{% include nav.html %}