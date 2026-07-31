---
title: 'Solvo: Unua testo'
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
use Test;

ok 'Raku'.chars == 4, 'Raku has four letters';

done-testing;
```

🦋 Vi povas trovi la fontkodon en la dosiero [a-first-test.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/a-first-test.raku).

## Eligo

```
ok 1 - Raku has four letters
1..1
```

## Komentoj

1. `ok` sukcesas ĉar la kondiĉo `'Raku'.chars == 4` estas vera.

1. `done-testing` eligas la planlinion `1..1`, indikante, ke unu testo ruliĝis.

{% include nav.html %}
