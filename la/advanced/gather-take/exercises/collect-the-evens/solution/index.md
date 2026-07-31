---
title: 'Solutio: Quemque numerum repetere'
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my @result = gather for 1..4 -> $n {
    take $n for 1..$n;
};

say @result;
```

🦋 Inveni codicem fontem in archivo [collect-the-evens.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/collect-the-evens.raku).

## Exitus

```
[1 2 2 3 3 3 4 4 4 4]
```

## Commentarii

1. Nihil cogit unicum `take` per iterationem. Hic interior `take $n for 1..$n` diversum numerum `take` quotiens in quoque transitu currit, quod est exacte flexibilitas quae `gather`/`take` potentiorem quam simplicem `map` facit.

1. Ansa exterior variabilem nominatam `-> $n` de industria utitur. Si ansam interiorem cum `$_` scripsissemus, interior `for` `$_` ad suum numeratorem religaret, et numeratorem loco numeri currentis caperemus.

1. `gather` simpliciter omnem valorem captum ordine colligit, ergo `@result` finaliter `1`, deinde duo `2`, deinde tres `3`, deinde quattuor `4` continet.

{% include nav.html %}
