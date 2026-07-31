---
title: Heredoko
translations_gpt:
---

{% include menu.html %}

## Problemo

Uzante *interpolantan* heredoc-on, konstruu mendan konfirmleteron el kelkaj variabloj — kliento `$name`, `$item`, unua `$price`, kaj `$count`. La heredoc devus interpoli la variablojn *kaj* kalkuli la totalon enlinie per enkonstruita `{ … }`-bloko (`$count * $price`).

Krommarĝenigu la korpon de la heredoc por kongrui kun la ĉirkaŭa kodo, kaj aliniigu la fermilon kun la teksto tiel ke krommarĝeno ne aperu en la eligo. Presu la rezulton.

## Ekzemplo

Por `$name = 'Anna'`, `$item = 'Raku Book'`, `$price = 25`, kaj `$count = 3`, la programo presas, sen komencaj spacetoj:

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
