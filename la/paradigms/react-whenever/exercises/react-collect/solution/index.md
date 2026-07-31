---
title: 'Solutio: In duo ordines distribue'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @small;
my @big;

react {
    whenever Supply.from-list(4, 42, 7, 100, 15) {
        if $_ > 10 { @big.push($_) }
        else       { @small.push($_) }
    }
}

say @small;
say @big;
```

🦋 Inveni codicem fontem in archivo [react-collect.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-collect.raku).

## Exitus

```
[4 7]
[42 100 15]
```

## Commentarii

1. Corpus `whenever` codex ordinarius est, itaque plus quam colligere potest — hic **decernit**, unumquemque valorem dum advenit ad `@big` vel `@small` dirigens. Intra unumquemque ordinem valores ordinem fluxus servant.

1. Blocus react exspectat donec fluxus perfectus sit, itaque uterque ordo completus est antequam imprimatur.

{% include nav.html %}
