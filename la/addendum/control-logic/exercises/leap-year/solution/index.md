---
title: 'Solutio: Anni bissextiles'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
for 2000, 1900, 2024, 2023 -> $year {
    my $leap = $year %% 400 || ($year %% 4 && !($year %% 100));

    say "$year: { $leap ?? 'leap' !! 'common' }";
}
```

🦋 Inveni codicem fontem in archivo [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/leap-year.raku).

## Exitus

```
2000: leap
1900: common
2024: leap
2023: common
```

## Commentarii

1. Regula directe ut expressio Booleana legitur: annus bissextilis est qui per
400 dividitur, *vel* qui per 4 sed non per 100 dividitur. `%%` probatio divisibilitatis est.

1. `1900` per 100 sed non per 400 dividitur, itaque communis est; `2000` per
400 dividitur, itaque bissextilis est.

1. Genus [`Date`](/la/advanced/date-and-time) Raku hanc regulam iam novit. Illam
ut `.is-leap-year` exhibet — methodum in *obiecto diei*, itaque quemlibet diem anni
facis (hic Kalendas Ianuarias) et illum rogas:

    ```raku
    for 2000, 1900, 2024, 2023 -> $year {
        my $leap = Date.new($year, 1, 1).is-leap-year;
        say "$year: { $leap ?? 'leap' !! 'common' }";
    }
    ```

    Exercitatio, scilicet, de regula ipse scribenda est.

{% include nav.html %}
