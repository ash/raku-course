---
title: 'Solutio: Numerare in sacculo'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $words = bag('the cat sat on the mat'.words);

say $words<the>;
say $words.total;
```

🦋 Inveni codicem fontem in archivo [bag-count.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/bag-count.raku).

## Exitus

```
2
6
```

## Commentarii

1. `'the cat sat on the mat'.words` sex verba producit, et `bag` unumquodque numerat. Subscriptio cum `<the>` reddit quotiens `the` visum sit — bis.

1. Methodus `total` omnes numeros summant, quod aequat numerum verborum in sacculum insertorum — `6`.

{% include nav.html %}
