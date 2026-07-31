---
title: Viktorīna — Savienojumi
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
say so 4 == all(2, 4, 6);
```

{:.quiz}
0 | True
1 | False
0 | all(2, 4, 6)
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

`all` savienojums ir patiess tikai tad, kad atbilst **katra** vērtība. Pārbaude `4 == all(2, 4, 6)` jautā, vai `4` ir vienāds ar `2` un `4` un `6` — un tas tā nav, tāpēc rezultāts ir `False`.

Interesē, kas *varētu* padarīt to par `True`? Kreisajai pusei būtu vienlaikus jābūt vienādai ar katru no `2`, `4` un `6`. Neviens atsevišķs skaitlis to nespēj — bet savienojums kreisajā pusē spēj: der `any` savienojums, kas **satur visus trīs** šos skaitļus, jo tad izdodas katrs no salīdzinājumiem. Abām pusēm nav jābūt vienāda lieluma — kreisajā var būt papildu vērtības:

```raku
say so any(2, 4, 6, 8) == all(2, 4, 6); # True
say so any(2, 4)       == all(2, 4, 6); # False
```

Pirmais ir `True`, jo `any(2, 4, 6, 8)` joprojām ir vienāds ar `2`, `4` un `6` (liekais `8` netraucē). Otrais ir `False`, jo kreisajā pusē nav `6`, tāpēc `left == 6` neizdodas.

</div>

{% include nav.html %}
