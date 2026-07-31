---
title: Dynamica variabilis
translations_gpt:
---

{% include menu.html %}

## Problema

Variabilis dynamica — quae twigil `*` habet — foras per acervum vocationum quaerendo invenitur, non per circumscriptionem lexicam. Itaque valor quem subprogramma videt ab eo pendet qui illud vocavit, quod clausulae permittit codicem quem vocat sub alia persona currere.

1. Declara variabilem dynamicam `$*user` cum valore `'guest'`.
2. Scribe subprogramma `whoami` quod imprimit `running as ` cum `$*user` currenti sequenti (exempli gratia, `running as guest`). Debet `$*user` directe legere — nullos parametros accipit.
3. Voca `whoami` semel in gradu summo: `guest` nuntiat.
4. Deinde, intra clausulam quae `$*user` ut `'admin'` iterum declarat, voca *idem* `whoami` iterum: nunc `admin` nuntiat.

## Exemplum

Programma imprimit:

```
running as guest
running as admin
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}
