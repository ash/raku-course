---
title: Stato per kliento
translations_gpt:
---

{% include menu.html %}

## Problemo

Akiru la staton de retpaĝo laŭ la facila maniero — per la **klienta modulo de Cro** anstataŭ per kruda kontaktskatolo. Uzu `Cro::HTTP::Client.get` por preni `http://example.com/`, `await`-u la respondon kaj presu ĝian `.status` — neniu teksta analizo bezonata.

> Ĉi tiu ekzerco bezonas la modulon Cro instalitan (`zef install cro`) kaj funkciantan retan konekton.

## Ekzemplo

Plenumite, la programo presas:

```
200
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
