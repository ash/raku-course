---
title: 'Solutio: Promissum concatena'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $p = start { 'raku' };
my $q = $p.then({ .result.uc });
my $r = $q.then({ .result ~ '!' });
say await $r;
```

🦋 Inveni codicem fontem in archivo [promise-result.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/promise-result.raku).

## Exitus

```
RAKU!
```

## Commentarii

1. Unumquodque `.then` novum promissum aedificat quod currit simul atque prius perfectum est. Intus in bloco eius, `.result` valor est quem promissum prius produxit.

1. Primus sequens `'raku'` in `'RAKU'` vertit; secundus `'!'` addit. Ultimum promissum, `$r`, exspectare totam catenam percurrit et `'RAKU!'` dat — fistula parva ubi unusquisque gradus effectum gradus prioris transformat.

{% include nav.html %}
