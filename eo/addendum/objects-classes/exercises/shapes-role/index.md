---
title: Figuroj kun komuna rolo
translations_gpt:
---

{% include menu.html %}

## Problemo

Difinu rolon `Shape`, kiu postulas metodon `area`, poste faru klasojn `Circle` kaj
`Square`, kiuj plenumas la rolon.

Verku subrutinon `describe`, kies parametro estas *tipigita* kiel `Shape`, por ke ĝi
akceptu ajnan figuron kaj rifuzu ĉion, kio ne estas tia. Ĝi presu la areon de la
figuro etikeditan per ĝia klasnomo. Voku ĝin por cirklo kun radiuso `2` kaj
kvadrato kun latero `3`.

La subrutino neniam kontrolas, kiun specon de figuro ĝi ricevis: ĉar ĝia parametro
estas `Shape`, la objekto estas garantiite havanta metodon `area`, do la sama
voko `.area` funkcias sur kiu ajn figuro envenas. Jen kion la rolo donas al vi —
unu solan tipon, kiun vi povas postuli, kaj unu pecon da kodo, kiu traktas ĉiun
klason plenumantan ĝin unuforme.

## Ekzemplo

La programo presas:

```
Circle: 12.56636
Square: 9
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
