---
title: 'Solutio: Absorptiva nominata argumenta'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub describe($name, *%opts) {
    my $details = %opts.sort.map({ "{.key}={.value}" }).join(', ');
    "$name: $details";
}

say describe('Anna', colour => 'red', size => 5);
```

🦋 Inveni codicem fontem in archivo [slurpy-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/slurpy-hash.raku).

## Exitus

```
Anna: colour=red, size=5
```

## Commentarii

1. Parametrus positionalis fixus `$name` primus impletur, et sorbens `*%opts` deinde omnia argumenta nominata reliqua in mappam congerit.

1. `%opts.sort` paria per claves ordinat, itaque exitus certus est — `colour` ante `size` venit. `.map` unumquodque par in chordam `clavis=valor` per `.key` et `.value` vertit, et `.join(', ')` ea coniungit.

1. Chorda finalis `$name` et compositum `$details` interpolat, unde `Anna: colour=red, size=5`.

{% include nav.html %}
