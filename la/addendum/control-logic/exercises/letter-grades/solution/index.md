---
title: 'Solutio: Notae litterales'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
for 95, 82, 71, 58 -> $score {
    my $grade = do given $score {
        when * >= 90 { 'A' }
        when * >= 80 { 'B' }
        when * >= 70 { 'C' }
        when * >= 60 { 'D' }
        default      { 'F' }
    }

    say "$score -> $grade";
}
```

🦋 Inveni codicem fontem in archivo [letter-grades.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/letter-grades.raku).

## Exitus

```
95 -> A
82 -> B
71 -> C
58 -> F
```

## Commentarii

1. `do given` totum `given`/`when` in expressionem vertit cuius valor est
blocus congruens — hic littera notae — qui in `$grade` reponitur.

1. Unumquodque `when * >= N` comparatio Whatever contra thema est. Prima quae
succedit vincit, itaque termini uno tantum limite inferiore egent.

{% include nav.html %}
