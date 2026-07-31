---
title: Plūsmas operators
translations_gpt:
---

{% include menu.html %}

Plūsmas operators `==>` nosūta sarakstu no kreisās puses uz darbību labajā pusē. Rezultāts pēc tam plūst tālāk uz to, kurp rāda nākamais `==>`, un beidzas mainīgajā, kas to savāc:

```raku
(1..10) ==> grep(* %% 2) ==> my @evens;
say @evens; # [2 4 6 8 10]
```

Lasiet no kreisās uz labo: paņem `1..10`, paturi pāra skaitļus un noglabā rezultātu `@evens`. Operators `%%` nozīmē «dalās ar», tāpēc `* %% 2` patur pāra skaitļus.

Svarīgais likums ir tas, ka plūsmai **jābeidzas mērķī** — parasti `my @array` (vai jau esošs mainīgais). Dati tajā ieplūst. Piešķīruma rakstīšana otrādi, ar `=`, nedod to, ko gribat, jo plūsma un piešķīrums sacenšas; vienmēr ļaujiet plūsmai ietecēt savā mainīgajā.

Plūsma ir tikai vēl viens veids, kā uzrakstīt saraksta darbību ķēdi. To pašu rezultātu varētu uzrakstīt kā `my @evens = (1..10).grep(* %% 2)`. Plūsmas forma atklāj savu vērtību, kad posmu ir vairāki, kā rāda nākamais temats.

{% include nav.html %}
