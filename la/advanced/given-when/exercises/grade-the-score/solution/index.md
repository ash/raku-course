---
title: 'Solutio: Stadium vitae ex aetate'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $age = 30;

given $age {
    when $_ < 0 { say 'invalid' }
    when 0..12  { say 'child' }
    when 13..19 { say 'teenager' }
    when 20..64 { say 'adult' }
    default     { say 'senior' }
}
```

🦋 Inveni codicem fontem in archivo [grade-the-score.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/grade-the-score.raku).

## Exitus

```
adult
```

## Commentarii

1. Haec solutio duo genera `when` miscet. Primum est *condicio*, `$_ < 0` (ubi `$_` est topicum a `given` positum), quae aetates invalidas eliminat; reliquae sunt *intervalla* quae aetates validas in stadia dividunt.

1. Ordo refert. Custos aetatis negativae primus venit, ergo currit antequam ullum intervallum probatur. Valor `30` in `20..64` cadit, ergo programma imprimit `adult`.

1. Copia `default` omnem aetatem 65 et supra tegit, quae a nullo intervallorum enumeratorum capitur.

Hoc invertere possis et `default` ad captandum inputum *invalidum* uti. Enumera omne stadium agnitum — includens `senior` ut condicionem `$_ >= 65` — et tracta quidquid relictum est (sicut aetatem negativam) ut invalidum:

```raku
given $age {
    when 0..12    { say 'child' }
    when 13..19   { say 'teenager' }
    when 20..64   { say 'adult' }
    when $_ >= 65 { say 'senior' }
    default       { say 'invalid' }
}
```

Hic `default` vere est ramus "nihil ex supra dictis". Quae versio melius legitur, res gustus est: pone custodem primum cum casus invalidus exceptio est, vel fac eum subsidium cum stadia valida omnia clare enumerata sunt.

{% include nav.html %}
