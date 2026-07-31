---
title: 'Solutio: Pretium ingens'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
multi sub price(Int $qty where $qty >= 10) { say 'bulk price' }
multi sub price(Int $qty)                  { say 'normal price' }

price(3);
price(25);
```

🦋 Inveni codicem fontem in archivo [bulk-pricing.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/bulk-pricing.raku).

## Exitus

```
normal price
bulk price
```

## Commentarii

1. Primus candidatus clausulam `where` habet quae solum quantitates decem vel maiores accipit, itaque vocatio `price(25)` ad eum dispatchitur.

1. Secundus candidatus nullam condicionem habet et ut receptaculum omnium fungitur, itaque `price(3)` illuc it.

{% include nav.html %}
