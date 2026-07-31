---
title: Plūsmu ķēdēšana
translations_gpt:
---

{% include menu.html %}

Plūsmu īstā vērtība atklājas, kad posmu ir vairāki. Katrs `==>` savu rezultātu padod nākamajai darbībai, tāpēc viss konveijers lasās no augšas uz leju tādā secībā, kādā darbs notiek:

```raku
(1..10)
    ==> grep(* %% 2)
    ==> map(* ** 2)
    ==> my @result;

say @result; # [4 16 36 64 100]
```

Sekojiet datiem lejup pa lappusi: sāc ar `1..10`, paturi pāra skaitļus, katru no tiem kāpini kvadrātā un savāc rezultātu. Pāra skaitļi ir `2, 4, 6, 8, 10`, un to kvadrāti ir `4, 16, 36, 64, 100`.

Uzrakstīts kā metožu ķēde, tas pats konveijers ir `(1..10).grep(* %% 2).map(* ** 2)` — un tas lasās no kreisās uz labo tāpat kā plūsma. Metožu ķēde nav no iekšpuses uz āru; tā savus posmus izpilda tieši tādā pašā secībā. Forma, kas tiešām lasās no iekšpuses uz āru, ir darbību ligzdošana kā parastas funkcijas — `map(* ** 2, grep(* %% 2, 1..10))` —, kur jāsāk ar dziļāko izsaukumu un jāstrādā uz āru.

Plūsma tātad nav veids, kā izbēgt no koda «no iekšpuses uz āru» — tas ir vēl viens veids, kā uzrakstīt konveijeru no kreisās uz labo. Ko tā pievieno, ir izkārtojums: katrs `==>` posms var atrasties savā rindā, un viens un tas pats operators vienādi strādā gan metožu, gan funkciju stila soļiem, un tas garu konveijeru saglabā viegli pārskatāmu. Plūsmas un metožu ķēdes galu galā dara vienu un to pašu darbu; izvēlieties to, kas konkrēto pārveidojumu padara skaidrāku.

{% include nav.html %}
