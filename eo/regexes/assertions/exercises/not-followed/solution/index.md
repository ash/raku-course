---
title: 'Solvo: Ne sekvata de'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say so '50 dollars' ~~ / \d+ >> <!before '%'> /;
```

🦋 Vi povas trovi la fontkodon en la dosiero [not-followed.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/not-followed.raku).

## Eligo

```
True
```

## Komentoj

1. `<!before '%'>` estas negativa antaŭrigardo: ĝi sukcesas nur, kiam la teksto tuj post la nombro **ne** estas `%`.

1. La `>>` estas vortlimo markanta la **finon** de la nombro, kaj ĝi gravas ĉi tie. Sen ĝi, la avida `\d+` retropaŝus: sur `50% off` ĝi rezignus la `0` kaj kongruus nur kun `5` — kiu *ne* estas sekvata de `%` — do la ŝablono malprave sukcesus. `>>` devigas `\d+` preni la tutan nombron, do la antaŭrigardo estas testata ĉe la vera fino. Rezulte `50 dollars` donas `True`, dum `50% off` ĝuste donas `False`.

{% include nav.html %}
