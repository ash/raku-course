---
title: Savienojumu veidošana
translations_gpt:
---

{% include menu.html %}

Vienkāršākais veids, kā uzbūvēt savienojumu, ir savienojuma operatori. Operators `|` rada _any_ savienojumu:

```raku
my $j = 1 | 2 | 3;
say $j; # any(1, 2, 3)
```

Vērtība `$j` apzīmē «1 vai 2 vai 3». Savienojumu ir četru veidu, katram ir operators un atbilstoša funkcija:

* `any( … )` vai `a | b` — patiess, ja atbilst **jebkura** vērtība
* `all( … )` vai `a & b` — patiess, ja atbilst **visas** vērtības
* `one( … )` vai `a ^ b` — patiess, ja atbilst **tieši viena** vērtība
* `none( … )` — patiess, ja neatbilst **neviena** vērtība (šis ir vienīgais veids bez operatora formas — izmantojiet funkciju)

Funkciju formas ir ērtas ar sarakstu:

```raku
say all(3, 7, 2);  # all(3, 7, 2)
say none(1, 2, 3); # none(1, 2, 3)
```

Visnoderīgākais savienojums ir salīdzinājumā. Jautājums, vai skaitlis ir vienāds ar _any_ savienojumu, to pārbauda pret katru vērtību uzreiz:

```raku
say so 2 == any(1, 2, 3); # True
say so 5 == any(1, 2, 3); # False
```

Operatora forma lasās tikpat dabiski — `1 | 2 | 3` ir tieši tas pats _any_ savienojums:

```raku
say so 2 == 1 | 2 | 3; # True
say so 5 == 1 | 2 | 3; # False
```

`so` pārvērš savienojuma rezultātu par vienkāršu Būla vērtību. Nākamais temats aplūko, kas šajā brīdī notiek aizkulisēs.

{% include nav.html %}
