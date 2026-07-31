---
title: 'Solutio: Septimanae usque ad Natalem'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $days = Date.new(2026, 12, 25) - Date.new(2026, 6, 27);
say "{$days div 7} weeks and {$days % 7} days";
```

🦋 Inveni codicem fontem in archivo [days-until-christmas.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/days-until-christmas.raku).

## Exitus

```
25 weeks and 6 days
```

## Commentarii

1. Subtrahendo unum `Date` ab altero redditur numerus dierum inter eos — hic `181` — ergo nulla computatio manualis dierum cuiusque mensis necessaria est. Dies posterior primo scribitur, ut resultatum positivum sit.

1. Divisio integra `div` dat numerum integrum hebdomadum (`181 div 7` est `25`), et operator moduli `%` dat dies reliquos (`181 % 7` est `6`).

{% include nav.html %}
