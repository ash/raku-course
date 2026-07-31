---
title: Izsaukšana ar kolu 🆕
translations_gpt:
---

{% include menu.html %}

Izsaucot metodi vai apakšprogrammu, tās argumentus parasti liekat iekavās: `@a.grep(* > 5)`. Raku piedāvā otru formu — aiz nosaukuma lieciet **kolu**, un viss, kas seko kolam, kļūst par argumentu sarakstu, pavisam bez iekavām:

```raku
say (1..10).grep: * %% 2; # (2 4 6 8 10)
```

Kols `grep:` dara to pašu darbu, ko darītu iekavas: `(1..10).grep: * %% 2` nozīmē tieši `(1..10).grep(* %% 2)`. Abas formas ir savstarpēji aizvietojamas:

```raku
say <a b c>.join('-'); # a-b-c
say <a b c>.join: '-'; # a-b-c
```

Kola forma ir vispatīkamākā ar metodēm, kas ņem **bloku** vai [Whatever](/lv/advanced/whatever) izteiksmi, jo tā noņem vienu ligzdošanas slāni. Salīdziniet:

```raku
my @a = 3, 1, 2;

say @a.sort({ $^b <=> $^a }); # parentheses around the block
say @a.sort: { $^b <=> $^a }; # colon — no closing paren to match
```

Abas izdrukā `(3 2 1)`, taču versija ar kolu lasās tīrāk, jo īpaši tad, ja bloks ir garš.

Šis ir metožu izsaukumu radinieks tam izsaukumam bez iekavām, ko jau lietojat ar saraksta operatoriem, piemēram, `say 1, 2, 3` — tur `say` ņem visu, kas seko, par saviem argumentiem. Vienīgais likums, kas jāatceras, ir tas, ka kola forma par argumentiem paņem **atlikušo instrukcijas daļu**, tāpēc tai jābūt izsaukumu ķēdes **beigās**. Tieši tāpēc `('a' .. 'z')».uc».ord.grep: 60 < * < 70` darbojas: `grep` ir pēdējais izsaukums, un aiz tā nav ko ķēdēt. Ja jāturpina izsaukt vēl metodes, izmantojiet iekavu formu vai sagrupējiet izteiksmes daļas, lai būtu skaidrs:

```raku
say (('a' .. 'z')».uc».ord.grep: 60 < * < 70)».chr # (A B C D E)
```

Kam jāpaskatās: nekombinējiet kolu **un** iekavas kā `.grep:( … )`. Šāds pieraksts saduras ar parakstu literāļu sintaksi `:( … )` un neparsējas. Izmantojiet vai nu `.grep( … )`, vai `.grep: …` — vienu vai otru, ne abus.

{% include nav.html %}
