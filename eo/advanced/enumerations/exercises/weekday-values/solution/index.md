---
title: 'Solvo: Semajnotagaj nombroj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Day(5);
say Day(1);
```

🦋 Vi povas trovi la fontkodon en la dosiero [weekday-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/weekday-values.raku).

## Eligo

```
Fri
Mon
```

## Komentoj

1. Skribi la konstantojn kiel parojn permesas al vi elekti la nombrojn, ĉi tie komencante de `1`.

1. Voki la enumeracian tipon kiel `Day(5)` faras la inversan serĉon: ĝi trovas la konstanton, kies valoro estas `5`, kio estas `Fri`. Same `Day(1)` donas `Mon`. Tio estas la inverso de `Fri.value`, kiu irus de la nomo al la nombro.

{% include nav.html %}
