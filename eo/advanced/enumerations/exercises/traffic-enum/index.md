---
title: Trafiklumo
translations_gpt:
---

{% include menu.html %}

## Problemo

Difinu enumeracion `Light` kun la konstantoj `red`, `amber` kaj `green` (en tiu ordo). Deklaru variablon tipitan per la enumeracio, `my Light $current`, kaj metu ĝin al `red`. Presu la lumon kune kun la nombro malantaŭ ĝi, en la formo `red is 0`.

Poste **ŝanĝu la lumon kelkfoje** — reatribuu `$current` al `amber`, poste al `green`, presante ĝin same post ĉiu ŝanĝo — tiel ke vi trairas `red` → `amber` → `green`.

Vi eble atendus, ke `$current++` moviĝus al la sekva lumo memstare — provu tion kaj vidu, kio okazas.

## Ekzemplo

La programo presas:

```
red is 0
amber is 1
green is 2
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
