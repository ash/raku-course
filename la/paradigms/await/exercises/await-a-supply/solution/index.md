---
title: 'Solutio: Supply exspecta'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $sensor = Supply.from-list(18, 21, 19, 23);

my $last = await $sensor;
say "final reading: $last";
```

🦋 Inveni codicem fontem in archivo [await-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-supply.raku).

## Exitus

```
final reading: 23
```

## Commentarii

1. Supply exspectare moratur donec fluxus omnia quae habet emiserit — eadem «exspecta donec perfectum sit» quam `await` pro promisso dat — et valor eius est **ultimum** quod supply emisit, `23`.

1. Hoc fluxui convenit ubi solus status finalis refert, ut lectio sensoris novissima. Si *omni* valore eges, illud munus ipsius `.tap` vel bloci `react` est, ut in sectionibus prioribus.

{% include nav.html %}
