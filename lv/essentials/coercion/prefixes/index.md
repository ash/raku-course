---
title: Tipu pārvēršana ar prefiksa operatoriem
---

{% include menu.html %}

Vēl viens veids, kā pārvērst objekta tipu, ir izmantot prefiksa operatorus. Tie ir vienas rakstzīmes operatori, kas tiek novietoti tieši pirms vērtības (vai mainīgā).

`~` | Virknes piespiedu konvertēšana
`+` | Skaitliskā piespiedu konvertēšana
`?` | Loģiskā piespiedu konvertēšana

Apsveriet piemēru, kurā tiek izveidota loģiskā vērtība no vesela skaitļa:

```raku
say ?42; # True
```

Konvertēšana uz virkni ir līdzīga:

```raku
my $n = -30;
my $s = ~$n;
say $s.chars; # 3, jo "-30" ir 3 rakstzīmes
```

Pamaniet, ka ar skaitlisko konvertēšanu konvertētās vērtības tips atšķiras atkarībā no attiecīgā skaitļa. Salīdziniet šādas konvertēšanas no virknēm:

```raku
say (+'100').WHAT;   # (Int)
say (+'3.14').WHAT;  # (Rat)
say (+'27E-1').WHAT; # (Num)
```

Loģiskajām konvertēšanām ir vēl viena funkcija, ko sauc par `so`. To var izmantot kā prefiksa operatoru vai kā metodi:

```raku
my $value = 42;
say so $value; # True
say $value.so; # True
```

{% include nav.html %}