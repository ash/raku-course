---
title: Tipita MAIN
translations_gpt:
---

{% include menu.html %}

## Problemo

Tipa limigo sur parametro de `MAIN` ankaŭ estas kontrolata antaŭ ol la korpo ruliĝas. Skribu programon, kies `MAIN` akceptas unu `Int $n` kaj presas `$n` duobligitan. Se la argumento ne estas valida entjero, la signaturo ne kongruas kaj Raku presas la uzad-mesaĝon anstataŭe — vi ricevas la validigon senpage.

## Ekzemplo

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
