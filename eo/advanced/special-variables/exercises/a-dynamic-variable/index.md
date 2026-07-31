---
title: Dinamika variablo
translations_gpt:
---

{% include menu.html %}

## Problemo

Dinamika variablo — skribita kun la tvigilo `*` — estas serĉata per trarigardo eksteren tra la voka stako, ne per leksika amplekso. Do la valoro, kiun subrutino vidas, dependas de tiu, kiu vokis ĝin, kio ebligas al bloko ruli la kodon, kiun ĝi vokas, sub malsama identeco.

1. Deklaru dinamikan variablon `$*user` kun la valoro `'guest'`.
2. Skribu subrutinon `whoami`, kiu presas `running as ` sekvatan de la nuna `$*user` (ekzemple, `running as guest`). Ĝi devas legi `$*user` rekte — ĝi prenas neniun parametron.
3. Voku `whoami` unufoje ĉe la supra nivelo: ĝi raportas `guest`.
4. Poste, ene de bloko kiu redeklaras `$*user` kiel `'admin'`, voku la *saman* `whoami` denove: ĝi nun raportas `admin`.

## Ekzemplo

La programo presas:

```
running as guest
running as admin
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
