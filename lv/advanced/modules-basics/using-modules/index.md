---
title: Moduļu izmantošana
translations_gpt:
---

{% include menu.html %}

Lai izmantotu moduli, ielādējiet to ar teikumu `use`. Pēc tam nosaukumi, ko modulis eksportē, ir pieejami tā, it kā jūs pats tos būtu uzrakstījis.

Ņemot failu `Greeting.rakumod` no iepriekšējā temata, programma to izmanto šādi:

```raku
use Greeting;

say hello('Anna');
```

Tā kā `hello` bija atzīmēta ar `is export`, teikums `use` to padara pieejamu, un programma to izsauc tieši:

```
Hello, Anna!
```

Lai Raku moduli atrastu, tam jābūt uz moduļu meklēšanas ceļa. Kad moduļa fails atrodas tajā pašā direktorijā, kur jūsu programma, jūs Raku liekat meklēt tur ar opciju `-I.` (punkts nozīmē «pašreizējā direktorija»):

```console
$ raku -I. program.raku
Hello, Anna!
```

Instalētie moduļi (aplūkoti vēlāk sadaļā [Moduļu instalēšana no tīmekļa](/lv/advanced/installing-modules)) tiek atrasti automātiski, tāpēc opcija `-I` vajadzīga tikai moduļiem, kas dzīvo blakus jūsu paša programmai.

{% include nav.html %}
