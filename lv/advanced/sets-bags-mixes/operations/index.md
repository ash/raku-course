---
title: Kopu operācijas
translations_gpt:
---

{% include menu.html %}

Kopas var apvienot ar ierastajām kopu teorijas operācijām. Katram operatoram ir Unikoda simbols un ASCII pieraksts; varat lietot to, kurš labāk patīk.

_Apvienojums_ `∪` (vai `(|)`) savāc visas vērtības, kas ir kaut vienā no kopām:

```raku
say (set(1, 2, 3) ∪ set(3, 4, 5)).elems; # 5
```

Abām kopām ir kopīga vērtība `3`, tāpēc apvienojumā ir pieci atšķirīgi elementi: `1, 2, 3, 4, 5`.

_Šķēlums_ `∩` (vai `(&)`) patur tikai tās vērtības, kas ir abās kopās:

```raku
my $common = set(1, 2, 3) ∩ set(2, 3, 4);
say $common;       # Set(2 3) — note that sets are unordered
say $common.elems; # 2
say 2 ∈ $common;   # True
```

Šeit šķēlumā ir `2` un `3` — vērtības, kas klāt abās kopās. Kopai nav iedzimtas secības, tāpēc izdrukājot abi elementi var parādīties jebkurā kārtībā.

Šo operāciju rezultāts pats ir kopa, tāpēc tai var uzdot tos pašus jautājumus: cik tai ir elementu un vai tai pieder konkrēta vērtība.

{% include nav.html %}
