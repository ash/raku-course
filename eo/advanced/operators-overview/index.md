---
title: Revizio de operatora konduto
translations_gpt:
---

{% include menu.html %}

Kiam esprimo enhavas plurajn operatorojn, Raku devas decidi, en kiu ordo apliki ilin. Du reguloj regas tion: _prioritato_ kaj _asocieco_.

## Prioritato

Prioritato decidas, kiu operatoro ligas pli forte. Multipliko havas pli altan prioritaton ol adicio, do ĝi okazas unue:

```raku
say 2 + 3 * 4; # 14
```

La esprimo estas legata kiel `2 + (3 * 4)`, donante `14` anstataŭ `20`. Vi ĉiam povas uzi krampojn por devigi alian ordon:

```raku
say (2 + 3) * 4; # 20
```

## Asocieco

Asocieco decidas la ordon inter operatoroj de la _sama_ prioritato. Subtraho estas maldekstre-asocia, do ĝi grupiĝas de maldekstre:

```raku
say 8 - 3 - 2; # 3
```

Tio estas `(8 - 3) - 2`, kio estas `3`. Potencigo, aliflanke, estas dekstre-asocia:

```raku
say 2 ** 3 ** 2; # 512
```

Ĉi tie la esprimo grupiĝas kiel `2 ** (3 ** 2)`, tio estas `2 ** 9`, kio estas `512`.

## Ĉenitaj komparoj

Komparaj operatoroj povas esti _ĉenitaj_, kio legiĝas nature kaj faras tion, kion vi atendas el matematiko:

```raku
say 1 < 2 < 3; # True
say 1 < 5 < 3; # False
```

La meza valoro estas komparata kun ambaŭ najbaroj: `1 < 2 < 3` estas vera, ĉar `1 < 2` kaj `2 < 3` ambaŭ estas veraj.

{% include nav.html %}
