---
title: Exists un delete
translations_gpt:
---

{% include menu.html %}

Apstākļvārds `:exists` pārvērš indeksu par jautājumu: vai pie šīs atslēgas vai indeksa ir vērtība? Tas atgriež Būla vērtību, neko nepaņemot:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:exists; # True
say %h<plum>:exists;  # False
```

Šis ir pareizais veids, kā pārbaudīt atslēgu, jo vienkārša `%h<plum>` nolasīšana vai nu atgrieztu nedefinētu vērtību, vai — atkarībā no datiem — noslēptu atšķirību starp «nav» un «ir, bet nedefinēta».

Apstākļvārds `:delete` noņem ierakstu un atgriež vērtību, ko tas saturēja:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:delete; # 1
say %h.keys;          # (pear)
say %h;               # {pear => 2}
```

Ieraksta `apple` vairs nav, un dzēstā vērtība `1` tiek atdota atpakaļ, lai to varētu izmantot.

Abi apstākļvārdi darbojas arī ar masīviem — pēc indeksa:

```raku
my @a = 10, 20, 30;

say @a[1]:exists; # True
say @a[5]:exists; # False

say @a[1]:delete; # 20
say @a[1]:exists; # False
```

Ja jums interesē, kā masīvs izskatīsies pēc tam, kad noņemts elements no vidus, lūk, atbilde:

```raku
say @a; # [10 (Any) 30]
```

Tātad viens vienots pieraksts ļauj konteinerus izprašņāt un pārveidot uz vietas, nevis ķerties pie atsevišķām metodēm.

{% include nav.html %}
