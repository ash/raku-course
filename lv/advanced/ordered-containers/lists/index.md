---
title: Saraksti
translations_gpt:
---

{% include menu.html %}

Saraksts arī ir sakārtota vērtību kolekcija, bet atšķirībā no masīva tas ir _nemainīgs_: jūs nevarat mainīt, pievienot vai noņemt tā elementus. Sarakstu raksta kā ar komatiem atdalītu vērtību virkni, bieži ievietotu iekavās:

```raku
my $colours = ('red', 'green', 'blue');
```

Jūs varat nolasīt saraksta elementus pēc to indeksa un noskaidrot, cik to ir, tieši tāpat kā masīvam:

```raku
my $colours = ('red', 'green', 'blue');
say $colours[0];    # red
say $colours.elems; # 3
```

Atšķirība parādās, kad mēģināt mainīt elementu. Masīvam tas darbojas, jo katrs elements ir konteineris:

```raku
my @array = 1, 2, 3;
@array[0] = 10;
say @array; # [10 2 3]
```

Sarakstam tā ir kļūda, jo saraksta elementi ir vienkāršas vērtības, nevis konteineri:

```raku
my $list = (1, 2, 3);
$list[0] = 10;
```

Otrā programma apstājas ar paziņojumu:

```
Cannot modify an immutable List ((1 2 3))
  in block <unit> at t.raku line 2
```

Tāpēc izmantojiet masīvu (sigilu `@`), kad nepieciešams mainīt saturu, un sarakstu, kad nepieciešams tikai saglabāt fiksētu vērtību secību.

{% include nav.html %}
