---
title: Nosauktas regulārās izteiksmes
translations_gpt:
---

{% include menu.html %}

Līdz šim jūs raksturus rakstījāt tieši `/ … /` iekšienē. Raksturam var arī dot **nosaukumu** un to atkārtoti izmantot, gluži kā apakšprogrammu. Deklarējiet tādu ar `my regex` (vai `my token`, ar ko pienācīgi iepazīsieties drīz):

```raku
my regex number { \d+ }
```

Lai nosauktu regulāro izteiksmi izmantotu citā raksturā, rakstiet tās nosaukumu leņķa iekavās — `<number>`:

```raku
my regex number { \d+ }

if '42 cats' ~~ / <number> / {
    say $<number>; # ｢42｣
}
```

Izsaucot `<number>`, raksturs tiek gan piemeklēts, **gan** satverts ar šo nosaukumu, tāpēc sakritušais teksts ir pieejams kā `$<number>` — nosaukts tvērums, ko iegūstat par velti.

Nosauktu regulāro izteiksmi vienā raksturā var izmantot vairākas reizes. Kad tā parādās vairāk nekā vienu reizi, tvērumi kļūst par sarakstu, kas sasniedzams pēc indeksa:

```raku
my regex num { \d+ }

if '3-4' ~~ / <num> '-' <num> / {
    say $<num>[0]; # ｢3｣
    say $<num>[1]; # ｢4｣
}
```

Nosauktas regulārās izteiksmes patur raksturus lasāmus un ļauj lielākus uzbūvēt no mazākiem, labi nosauktiem gabaliem. Tieši to lielākā mērogā dara gramatika.

{% include nav.html %}
