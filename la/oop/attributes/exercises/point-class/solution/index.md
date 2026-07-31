---
title: 'Solutio: Classis puncti'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Point {
    has $.x;
    has $.y;
}

my $a = Point.new(x => 3, y => 4);
my $b = Point.new(x => 0, y => 0);

my $dist = sqrt(($a.x - $b.x) ** 2 + ($a.y - $b.y) ** 2);
say $dist;
```

🦋 Inveni codicem fontem in archivo [point-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/point-class.raku).

## Exitus

```
5
```

## Commentarii

1. Duae declarationes `has $.x` et `has $.y` attributa una cum accessoribus legendi creant.

1. Unumquodque obiectum proprias `x` et `y` servat, itaque `$a` et `$b` diversas coordinatas nuntiant, quamquam eiusdem generis obiecta sunt. Haec independentia est ipsa ratio attributorum — unumquodque exemplar propria data fert.

{% include nav.html %}
