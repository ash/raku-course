---
title: Paralēls map ar hyper
translations_gpt:
---

{% include menu.html %}

Izsauciet sarakstam `.hyper` pirms `map` vai `grep`, un darbs tiks izklaidīts pa vairākiem darbapavedieniem — kamēr rezultāti joprojām atgriežas **sākotnējā secībā**:

```raku
say (1..5).hyper.map(* * 2); # (2 4 6 8 10)
```

Tas izskatās tieši tāpat kā parasts `map`, un rezultāts ir identisks; vienīgā atšķirība ir tā, ka dubultošana var būt aprēķināta dažādos kodolos vienlaikus.

`.hyper` tieši tāpat darbojas ar `grep` — katrs elements tiek pārbaudīts paralēli, un tie, kas iziet cauri, joprojām atgriežas savā sākotnējā secībā:

```raku
say (1..10).hyper.grep(* %% 2); # (2 4 6 8 10)
```

Tā kā `.hyper` saglabā secību, tā ir tieša aizstājēja lēnam `map` vai `grep`: nekas, kas ir atkarīgs no rezultātu secības, nav jāmaina. Ieguvums parādās tikai tad, kad darbs ar katru elementu ir pietiekami liels, lai atsvērtu pavedienu saskaņošanas izmaksas — skaitļa kāpināšana kvadrātā īstenībā ir pārāk lēta, lai to būtu vērts paralelizēt. Tiešām dārgam darbam ar katru elementu lielā sarakstā `.hyper` par viena metodes izsaukuma cenu var pārvērst garu gaidīšanu īsā.

Viena lieta, kas jāpatur prātā: vai darbs *tiešām* tiek izklaidīts pa kodoliem, izlemj kompilators. Valoda nosaka rezultātus — un `.hyper` gadījumā to sākotnējo secību —, bet nepieprasa īstu paralēlu izpildi. `.hyper` un `.race` paralēlismu **pieprasa** kā lūgumu, nevis kā prasību, tāpēc konkrēts kompilators tos var izpildīt pavedienu baseinā vai arī klusi apstrādāt elementus pēc kārtas. Uztveriet tos kā iespēju paātrināties, nevis kā garantiju.

Tā kā secība tiek saglabāta, darbības, kas no tās *ir atkarīgas*, joprojām iznāk pareizi. Šeit katrs vārds tiek paralēli pārvērsts lielajos burtos, un tomēr gabali savienojas atpakaļ frāzē to sākotnējā secībā:

```raku
say <raku is fun>.hyper.map(*.uc).join(' '); # RAKU IS FUN
```

{% include nav.html %}
