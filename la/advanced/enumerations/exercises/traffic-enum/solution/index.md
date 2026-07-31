---
title: 'Solutio: Lumina trafficum'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
enum Light <red amber green>;

my Light $current = red;
say "$current is {$current.value}";

$current = amber;
say "$current is {$current.value}";

$current = green;
say "$current is {$current.value}";
```

🦋 Inveni codicem fontem in archivo [traffic-enum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/traffic-enum.raku).

## Exitus

```
red is 0
amber is 1
green is 2
```

## Commentarii

1. `my Light $current` est ordinaria variabilis mutabilis — solum typo `Light` constricta. Proximam constantem assignando lucem promovet, et numerus nomen sequitur quaque vice: `0`, `1`, `2`.

1. `$current++` videtur ad proximam lucem sponte progredi debere, sed errore typi verificandi deficit. `++` constantem ut nudum numerum tractat et `Int` reddit (`red` fit `1`), et `Int` non iam typo `Light` convenit. Itaque lucem mutando proximam constantem assignas, ut supra.

1. Constrictio typi ad omnem assignationem pertinet, non solum ad primam. `$current` accipiet `red`, `amber`, vel `green`, sed aliquid assignare quod `Light` non est — nudum numerum vel seriem characterum — error typi verificandi esset.

{% include nav.html %}
