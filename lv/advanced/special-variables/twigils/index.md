---
title: Tvigili
translations_gpt:
---

{% include menu.html %}

_Tvigils_ ir rakstzīme, kas novietota starp sigilu un mainīgā nosaukumu. Tā nemaina nosaukumu; tā maina to, kā mainīgais uzvedas un kā tas tiek atrisināts. Izplatītākie ir:

* `*` — **dinamisks** mainīgais, piemēram, `$*OUT`, kas tiek meklēts caur izsaukumu steku
* `?` — **kompilēšanas laika** vērtība, ko nodrošina kompilators, piemēram, `$?FILE`, `$?LINE`
* `!` — objekta **privāts** atribūts, piemēram, `$!balance`
* `.` — atribūts, kas sasniedzams caur savu piekļuves metodi, piemēram, `$.name`

Ar vairākiem no tiem jau esat sastapušies, tvigilu nenosaucot: `$*OUT` un `$*IN` (dinamiskie) un `$!`/`$.` [daļā par objektiem](/lv/oop).

Kompilatora nodrošinātie `?` mainīgie tiek aizpildīti programmas kompilēšanas laikā:

```raku
say $?LINE; # the line number of this statement
say $?FILE; # the path of this source file
```

Katrs tvigils uzreiz signalizē par citu mainīgā veidu, tāpēc, lasot `$*foo`, jūs nekavējoties zināt, ka tas ir dinamisks, bet `$?foo` — ka tā ir kompilēšanas laika konstante. Nākamais temats sīkāk aplūko [dinamiskos mainīgos](/lv/advanced/special-variables/dynamic-variables), jo tie uzvedas gluži citādi nekā līdz šim lietotie leksiskie mainīgie.

{% include nav.html %}
