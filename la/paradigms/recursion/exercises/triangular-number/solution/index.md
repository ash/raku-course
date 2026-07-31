---
title: 'Solutio: Numerus triangularis'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
multi tri(0)  { 0 }
multi tri($n) { $n + tri($n - 1) }

say tri(5);
```

🦋 Inveni codicem fontem in archivo [triangular-number.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/triangular-number.raku).

## Exitus

```
15
```

## Commentarii

1. Casus fundamentalis proprius candidatus est: `multi tri(0)` solum tunc congruit cum argumentum exacte `0` est et `0` sine recursione reddit.

1. Omnis alia vocatio in `multi tri($n)` cadit, qui `$n` ad numerum triangularem numeri `$n - 1` addit. Vocationes `5 + 4 + 3 + 2 + 1 + 0` descendunt, et cum argumentum ad `0` pervenit missio ad candidatum casus fundamentalis transit et summa in `15` se explicat.

{% include nav.html %}
