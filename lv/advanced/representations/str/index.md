---
title: 'Metode `.Str`'
---

{% include menu.html %}

Metode `.Str` atgriež **vienkāršu virknes** formu vērtībai. Tā tiek izsaukta ikreiz, kad vērtība tiek izmantota *virknes kontekstā*: ar `print` un `put`, ar `~` konkatenācijas operatoru un ar virknes interpolāciju dubultpēdiņās.

```raku
say 42.Str;    # 42
my @a = 'alpha', 'beta', 'gamma';
say @a.Str;    # alpha beta gamma
```

Ievērojiet, ka masīvs tika atgriezts **bez iekavām**, ar elementiem, kas vienkārši savienoti ar atstarpēm — tā ir redzamā atšķirība no [`.gist`](../gist), kas tās saglabā. Salīdziniet abus blakus:

```raku
my @data = 1, 2, 3;
say @data.gist; # [1 2 3]
say @data.Str;  # 1 2 3
```

Tā kā interpolācija izmanto `.Str`, masīvs, kas ievietots virknē, tiek parādīts vienkāršajā veidā:

```raku
my @data = 10, 20, 30;
say "data: @data[]"; # data: 10 20 30
```

{% include nav.html %}
