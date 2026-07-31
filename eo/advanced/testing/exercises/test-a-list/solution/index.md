---
title: 'Solvo: Plani du kontrolojn'
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
use Test;

plan 2;

my @sorted = (3, 1, 2).sort;
is-deeply @sorted, [1, 2, 3], 'sorted';

is 10 % 3, 1, 'remainder';
```

🦋 Vi povas trovi la fontkodon en la dosiero [test-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/test-a-list.raku).

## Eligo

```
1..2
ok 1 - sorted
ok 2 - remainder
```

## Komentoj

1. `plan 2` deklaras la kalkulon antaŭ ol iu ajn testo ruliĝas, do la linio `1..2` aperas unue. Se la dosiero poste rulus alian nombron da kontroloj, la testoserio estus raportita kiel malsukcesinta — protekto, kiun `done-testing` ne povas doni al vi.

1. `is-deeply` komparas la du listojn por preciza, tipokonscia egaleco. Ordigo de `3, 1, 2` donas `1, 2, 3`, kio kongruas.

1. `is` komparas du valorojn por simpla egaleco kaj raportas ambaŭ ĉe malsukceso. Ĉi tie `10 % 3` estas `1`, kio kongruas kun la atendata valoro, do la dua testo ankaŭ sukcesas.

{% include nav.html %}
