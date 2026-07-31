---
title: Samazināšanas metaoperators
translations_gpt:
---

{% include menu.html %}

Ielieciet jebkuru infiksu operatoru kvadrātiekavās, un tas kļūst par _redukciju_: tas tiek iesprausts starp katriem diviem saraksta elementiem, savelkot sarakstu vienā vērtībā.

```raku
say [+] 1, 2, 3, 4, 5; # 15
say [*] 1, 2, 3, 4, 5; # 120
```

`[+]` saskaita sarakstu, it kā jūs būtu uzrakstījuši `1 + 2 + 3 + 4 + 5`; `[*]` to sareizina. Tas pats darbojas ar jebkuru infiksu operatoru:

```raku
say [max] 4, 9, 2, 7; # 9
say [min] 4, 9, 2, 7; # 2
say [~] 'a', 'b', 'c'; # abc
```

`[max]` reducē ar operatoru `max`, atrodot lielāko elementu, un `[~]` reducē ar virkņu savienošanas operatoru `~`, salīmējot gabalus kopā.

Redukcijas metaoperators darbojas ar jebkuru sarakstu, arī ar diapazonu:

```raku
say [+] 1..100; # 5050
```

Tā ir viena no kompaktākajām un izteiksmīgākajām Raku iespējām: vesela cikla vērtā uzkrāšana vienā iekavu pārī.

{% include nav.html %}
