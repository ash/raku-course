---
title: Put rutīna
---

{% include menu.html %}

Pēc noklusējuma, `put` rutīna veic to pašu darbu kā [`print`](../print), bet pievieno jaunu rindu beigās:

1. Pārvērš savus argumentus par virkni, izsaucot `Str` metodi uz tiem.
2. Pievieno jaunas rindas rakstzīmi.
3. Nosūta to uz `STDOUT` plūsmu.

Daži piemēri:

```raku
42.put;
put 'Alpha', 'Beta';

my @array = 3, 4, 5;
put @array;

my %hash = a => 'b', c => 'd';
%hash.put;
```

Programmas izvadi:

```console
$ raku t.raku
42
AlphaBeta
3 4 5
a	b
c	d
```

%%tipblock
## Jauna rinda `put`

Patiesās rakstzīmes, kas tiek pievienotas pēc izvades, tiek ņemtas no izvades plūsmas `nl-out` metodes. Tās noklusējuma vērtība ir `\n`.
%%/tipblock

{% include nav.html %}