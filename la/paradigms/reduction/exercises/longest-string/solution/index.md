---
title: 'Solutio: Catena longissima'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @animals = 'cat', 'elephant', 'dog', 'fox';

say @animals.reduce(-> $a, $b { $b.chars > $a.chars ?? $b !! $a });
```

🦋 Inveni codicem fontem in archivo [longest-string.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/longest-string.raku).

## Exitus

```
elephant
```

## Commentarii

1. Blocus longiorem ex duobus argumentis suis servat: `$a` est catena longissima adhuc visa, `$b` est sequens, et operator ternarius eam reddit quae plures characteres habet.

1. `reduce` illum victorem ut `$a` in vocationem sequentem porro fert, itaque post totum indicem percursum valor collectus est catena omnium longissima — `elephant`.

{% include nav.html %}
