---
title: 'Solutio: Duos indices in tabulam coniunge'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @names  = <Anna Bob Cara>;
my @scores = 90, 85, 95;

my %result = @names Z=> @scores;

for %result.sort -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Inveni codicem fontem in archivo [zip-to-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/zip-to-hash.raku).

## Exitus

```
Anna: 90
Bob: 85
Cara: 95
```

## Commentarii

1. `Z=>` metaoperator zip constructori parium `=>` applicatus est: utrumque
indicem pariter percurrit et par `name => score` ex unoquoque loco aedificat.

1. Illum indicem parium variabili `%` assignare tabulam facit, quae deinde
ordine clavium imprimitur.

{% include nav.html %}
