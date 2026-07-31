---
title: 'Solutio: http aut https'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say 'https://example' ~~ / http | https /;
```

🦋 Inveni codicem fontem in archivo [http-or-https.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/http-or-https.raku).

## Exitus

```
｢https｣
```

## Commentarii

1. Et `http` et `https` in principio congruere possent, sed `|` congruentia longissimae tesserae utitur.

1. Itaque longius `https` vincit, quamquam `http` prius scriptum est.

## Solutio alia

Duo verba sola `s` sequenti differunt, itaque loco alternationis illam `s` optionalem quantificatore `?` reddere potes:

```raku
say 'https://example' ~~ / https? /; # ｢https｣
```

`?` solum ad atomum statim ante se adligatur — ad `s` — non ad totum verbum, itaque `https?` legitur ut `http` quod `s` optionalis sequitur. Illud unum exemplar et `http` et `https` congruit, et avidum cum sit `s` capit quotiens adest.

{% include nav.html %}
