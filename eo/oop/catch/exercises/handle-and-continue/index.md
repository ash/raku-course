---
title: Traktu kaj daŭrigu
translations_gpt:
---

{% include menu.html %}

## Problemo

Iru tra la tri eroj `ok`, `bad` kaj `ok`. Por ĉiu el ili, rulu blokon, kiu presas `processed <item>`, sed faras `die 'boom'`, kiam la ero estas `bad`. Metu fazeron `CATCH` ene de la bloko, tiel ke malsukcesanta ero estu raportata kiel `skipped (<item>): <message>` kaj la buklo daŭru al la sekva ero anstataŭ halti.

## Ekzemplo

La programo presas:

```
processed ok
skipped (bad): boom
processed ok
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
