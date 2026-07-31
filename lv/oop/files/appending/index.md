---
title: Pievienošana failam
translations_gpt:
---

{% include menu.html %}

Pēc noklusējuma `spurt` aizstāj visu, kas failā bija. Lai tā vietā pievienotu esoša faila beigās, padodiet nosaukto argumentu `:append`:

```raku
spurt 'log.txt', "line1\n";
spurt 'log.txt', "line2\n", :append;

print slurp 'log.txt';
```

Otrais `spurt` patur esošo saturu un pievieno jauno rindu aiz tā, tāpēc failā beigās ir abas rindas:

```
line1
line2
```

Bez `:append` otrais izsaukums būtu failu pārrakstījis, atstājot tikai `line2`. Pievienošana noder tādām lietām kā žurnālfaili, kur katra programmas palaišanas reize papildina augošu pierakstu, nevis sāk no jauna.

{% include nav.html %}
