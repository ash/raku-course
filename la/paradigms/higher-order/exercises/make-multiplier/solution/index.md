---
title: 'Solutio: Multiplicatorem crea'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub multiplier($n) {
    sub ($x) { $x * $n };
}

my &double = multiplier(2);
my &triple = multiplier(3);

say double(7);
say triple(7);
```

🦋 Inveni codicem fontem in archivo [make-multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/make-multiplier.raku).

## Exitus

```
14
21
```

## Commentarii

1. `multiplier(2)` subprogramma reddit quod meminit `$n` esse `2`; `multiplier(3)` separatum subprogramma reddit quod `3` meminit.

1. Unumquodque subprogramma redditum proprium `$n` servat, itaque `double(7)` `14` dat et `triple(7)` `21` — duae functiones independentes ex eadem officina aedificatae.

{% include nav.html %}
