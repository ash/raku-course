---
title: 'Solutio: Verbum integrum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say 'this is fine' ~~ /<< is >>/;
```

🦋 Inveni codicem fontem in archivo [whole-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-word.raku).

## Exitus

```
｢is｣
```

## Commentarii

1. Ancorae `<<` et `>>` terminum verbi utrimque circa `is` postulant.

1. Litterae `is` etiam intra `this` sedent, sed ibi nullum terminum verbi a sinistra habent, itaque machina illam occurrentiam praeterit et verbum solitarium `is` loco eius congruit.

1. Uterque candidatus idem `｢is｣` imprimit, itaque quomodo scis quis revera congruerit? Muta `is` intra `this` absconditum — exempli gratia, verte catenam in `'thus is fine'`. Exitus adhuc `｢is｣` est, immutatus, probans illam occurrentiam numquam congruentiam fuisse. Nunc muta loco eius verbum solitarium (dic `'this it fine'`) et congruentia evanescit (`Nil`). Congruentiam etiam interrogare potes ubi incipiat: `('this is fine' ~~ /<< is >>/).from` `5` reddit, locum solitarii `is`, non `2`.

{% include nav.html %}
