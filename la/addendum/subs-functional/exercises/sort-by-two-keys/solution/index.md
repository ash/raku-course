---
title: 'Solutio: Ordinare per duas claves'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @people =
    { name => 'Anna', age => 30 },
    { name => 'Bob',  age => 25 },
    { name => 'Cara', age => 30 };

for @people.sort({ .<age>, .<name> }) -> %person {
    say "%person<name> (%person<age>)";
}
```

🦋 Inveni codicem fontem in archivo [sort-by-two-keys.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sort-by-two-keys.raku).

## Exitus

```
Bob (25)
Anna (30)
Cara (30)
```

## Commentarii

1. Cum blocus `.sort` indicem reddit, Raku secundum primum elementum comparat, deinde secundum
alterum — itaque `{ .<age>, .<name> }` primum secundum aetatem ordinat et nomine solum ad
aequalitates dirimendas utitur.

1. Anna et Cara aetatem `30` communem habent, itaque alphabetice ordinantur; Bob, iunior
cum sit, primus venit.

{% include nav.html %}
