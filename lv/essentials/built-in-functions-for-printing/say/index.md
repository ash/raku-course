---
title: Say rutīna
---

{% include menu.html %}

Iebūvētā `say` rutīna veic šādas darbības:

1. Izsauc `gist` metodi uz tās argumentiem.
1. Pievieno jaunas rindas rakstzīmi.
1. Pārvērš rezultātu uz UTF-8.
1. Nosūta to uz `STDOUT` plūsmu.

No lietotāja perspektīvas, `say` vienkārši izdrukā mainīgā saturu terminālā un pievieno jaunu rindu.

Pirmais solis prasa dažus paskaidrojumus. `gist` metode ir metode, kas ir definēta katram iebūvētajam datu tipam, piemēram, veseliem skaitļiem vai virkām. Šādiem vienkāršiem tipiem atgrieztā vērtība ir cilvēkam lasāma vērtība, kas pārstāv objektu.

```raku
say 42; # 42
say 'Raku'; # Raku
```

Sarežģītākiem datiem, piemēram, masīviem vai vārdnīcām, `gist` metode pievieno kādu formatējumu.

```raku
my @data = 'alpha', 'beta', 'gamma';
say @data; # [alpha beta gamma]

my %data = alpha => 1, beta => 2, gamma => 3;
say %data; # {alpha => 1, beta => 2, gamma => 3}
```

`Say` rutīnu var izsaukt gan kā funkciju, gan kā metodi:

```raku
say 42;
say(42);
42.say;
```

Jūs varat nodot vairāk nekā vienu argumentu `say`. Izejas daļas tiek savienotas bez atstarpēm starp tām.

```raku
say(100, 500); # 100500
```

{% include nav.html %}