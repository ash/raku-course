---
title: Vērtību pārvēršana tekstā
---

{% include menu.html %}

Katru reizi, kad programma parāda vērtību — kad jūs to izvadāt ar `say`, izdrukājat vai ievietojat virknē — šī vērtība ir jāpārvērš tekstā. Raku neizmanto vienu fiksētu veidu, kā to darīt. Tā vietā katra vērtība satur dažas standarta metodes, no kurām katra izveido virkni atšķirīgam mērķim:

* `.gist` — cilvēkam draudzīga forma, ko izdrukā `say`.
* `.Str` — vienkārša virknes forma, ko izmanto virknes kontekstā.
* `.raku` — kodam līdzīga forma, noderīga atkļūdošanas laikā.

Visas trīs ir parastas metodes, kas definētas katrai vērtībai valodā, tāpēc tās darbojas vienādi gan ar skaitli, gan ar virkni, gan ar masīvu, gan ar jūsu paša objektu. Nākamajās lappusēs apskatīsim katru metodi atsevišķi un pēc tam palīdzēsim izvēlēties pareizo; [nākamajā sadaļā tiek ieviests `dd`](/lv/advanced/dd) — Rakudo rīks, kas balstīts uz `.raku`.

{% include nav.html %}
