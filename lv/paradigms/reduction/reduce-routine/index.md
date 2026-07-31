---
title: Procedūra reduce
translations_gpt:
---

{% include menu.html %}

Kad gribat reducēt ar pielāgotu darbību, nevis ar vienu nosauktu operatoru, izmantojiet procedūru `reduce`. Tā ņem divu argumentu bloku un piemēro to visam sarakstam, nesot uzkrāto rezultātu tālāk:

```raku
say (1..5).reduce(* + *); # 15
```

Blokā `* + *` ir divas [Whatever](/lv/advanced/whatever) zvaigznītes: pirmā ir līdzšinējais rezultāts, otrā — nākamais elements. Tātad `reduce` aprēķina `((((1 + 2) + 3) + 4) + 5)`, tas ir, `15` — tas pats, ko dara `[+]`, tikai uzrakstīts kā bloks.

Lai redzētu abus argumentus darbībā, dodiet tiem vārdus un izdrukājiet katru soli. Bultiņas bloks atdod savu pēdējo izteiksmi, tāpēc `$x + $y` ir gan tas, par ko bloks stāsta, gan vērtība, ko tas atgriež `reduce`:

```raku
say (1..5).reduce(
    -> $x, $y {
        say "$x + $y";
        $x + $y;
    }
);
```

Tas izdrukā:

```
1 + 2
3 + 3
6 + 4
10 + 5
15
```

Katra no pirmajām četrām rindām ir viens bloka izsaukums. `$x` ir līdz šim uzkrātais rezultāts, un `$y` ir nākamais elements no saraksta. Pats pirmais izsaukums saņem saraksta pirmās divas vērtības, `1` un `2`; katrs nākamais izsaukums saņem iepriekšējā soļa summu atpakaļ kā `$x` — `3`, tad `6`, tad `10` — pārī ar nākamo skaitli kā `$y`. Bloka vērtība kļūst par nākamā izsaukuma `$x`, un galīgā summa, `15`, ir tā, ko `reduce` atgriež un ko `say` izdrukā pēdējā rindā.

Tā kā bloks var būt jebkas, `reduce` ir vispārīgāka. Piemēram, vērtību var uzbūvēt soli pa solim:

```raku
say (1..4).reduce(-> $acc, $x { $acc * 10 + $x }); # 1234
```

Katrs solis uzkrājēju reizina ar desmit un pieskaita nākamo ciparu, pārvēršot atsevišķos ciparus `1, 2, 3, 4` par skaitli `1234`.

Tāpat kā citas metodes, kas ņem blokus, `reduce` labi lasās [kola izsaukuma](/lv/advanced/colon-calls) formā, kas atmet iekavas ap bloku:

```raku
say (1..5).reduce: * + *; # 15
```

Īsumā: `[op]` ir ātrā forma nosauktam operatoram, un `reduce` ir elastīgā forma patvaļīgam apvienojošam blokam. Abas saloka sarakstu līdz vienai vērtībai.

{% include nav.html %}
