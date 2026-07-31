---
title: 'Solutio: Elementum frequentissimum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @values = <a b a c a b>;

my %count;
%count{$_}++ for @values;

say %count.sort(-*.value)[0].key;
```

🦋 Inveni codicem fontem in archivo [most-common.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/most-common.raku).

## Exitus

```
a
```

## Commentarii

1. Postquam unusquisque valor in `%count` numeratus est, paria per `-*.value` ordinare
frequentissimum primum ponit; `[0].key` deinde illud elementum reddit.

1. Raku numerationem pro te agere potest per [`Bag`](/la/advanced/sets-bags-mixes),
qui numerat quotiens unusquisque valor appareat. Deinde `.max(*.value)` par cum
numero maximo eligit, et `.key` elementum ipsum est:

    ```raku
    my @values = <a b a c a b>;

    say @values.Bag.max(*.value).key; # a
    ```

    Tota numeratio una vocatio methodi est, et nulla tabula expressa est quae
    curetur.

{% include nav.html %}
