---
title: Variablo per our
translations_gpt:
---

{% include menu.html %}

## Problemo

Nur `our` faras nomon videbla ekster sia pako; `my` tenas ĝin privata. Kreu pakon `Config` kun `our`-variablo `$port` metita al `8080` **kaj** `my`-variablo `$secret` metita al `42`. De ekstere, presu `$Config::port`, kaj poste presu, ĉu `$Config::secret` estas difinita — ĝi ne devus esti, ĉar `my`-variablo ne estas parto de la nomspaco.

## Ekzemplo

La programo presas:

```
8080
False
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
