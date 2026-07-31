---
title: 'Solutio: Omnes factoriales simul'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
say [\*] 1..6;
```

🦋 Inveni codicem fontem in archivo [factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/factorial.raku).

## Exitus

```
(1 2 6 24 120 720)
```

## Commentarii

1. Linea obliqua inversa intra uncos `[*]` in reductionem *triangularem* convertit. Loco listam in unum valorem contrahendi, omne productum partiale servat: `1`, deinde `1*2`, deinde `1*2*3`, et ita porro.

1. Unumquodque productum partiale `1*2*...*k` est exacte _k!_, ergo eventus est lista factorialium `1` per `6`. Simplex `[*] 1..6` tantum ultimum ex his dedisset, `720`.

{% include nav.html %}
