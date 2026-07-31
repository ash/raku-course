---
title: 'Solvo: Inter krampoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say '$50' ~~ / <?after '$'> \d+ >> <!before '.'> /;
```

🦋 Vi povas trovi la fontkodon en la dosiero [whole-dollar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/whole-dollar.raku).

## Eligo

```
｢50｣
```

## Komentoj

1. `<?after '$'>` estas pozitiva malantaŭrigardo — ĝi postulas `$` tuj antaŭ la nombro — kaj `<!before '.'>` estas negativa antaŭrigardo — ĝi postulas, ke `.` **ne** sekvu. Nek la `$` nek la ĉirkaŭaĵo fariĝas parto de la kongruo, do la rezulto estas nur `50`.

1. La `>>` estas vortlimo markanta la finon de la nombro. Sen ĝi, avida `\d+` povus retropaŝi: sur `$39.99` ĝi rezignus la `9` kaj kongruus kun `3` (kiu ne estas sekvata de `.`). `>>` devigas preni la tutan nombron, do `$3.99` kaj `$39.99` ĝuste kongruas kun nenio.

1. Jen kazo, kie antaŭrigardo pravigas sian ekziston: vi ne povas esprimi «ne sekvata de dekuma punkto» per ordinara kaptanta grupo, ĉar estas nenio tie por kapti — nur kondiĉo por kontroli.

{% include nav.html %}
