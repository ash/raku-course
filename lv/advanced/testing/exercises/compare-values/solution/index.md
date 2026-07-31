---
title: 'Risinājums: Salīdzināt vērtības'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
use Test;

is 'a'.uc, 'A', 'uppercase';

done-testing;
```

🦋 Atrodiet programmu failā [compare-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/compare-values.raku).

## Izvade

```
ok 1 - uppercase
1..1
```

## Komentāri

1. `is` salīdzina faktisko vērtību `'a'.uc` ar gaidīto `'A'`.

1. Tās sakrīt, tāpēc tests izdodas; neveiksmes gadījumā `is` izdrukātu abas vērtības.

{% include nav.html %}
