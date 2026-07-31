---
title: Divi taimeri
translations_gpt:
---

{% include menu.html %}

Visi līdzšinējie `react` piemēri izmantoja `Supply.from-list`, kas visas savas vērtības iestumj tajā pašā mirklī, kad tai pieslēdzas. Tieši tāpēc katra straume izdrukājās pilnībā, pirms sākās nākamā — nekādas gaidīšanas nebija. Īstas notikumu straumes tādas nav: to vērtības pienāk izklaidus **laikā**, un `react` bloks tās savij kopā, kā tās nāk.

Taimeris ir vienkāršākā šādi uzvedošās straumes. `Supply.interval($period)` reizi `$period` sekundēs izstaro augošu skaitītāju — `0, 1, 2, …`. Palaidiet divus tādus ar dažādu ātrumu vienā `react`, un to vērtības savijas:

```raku
react {
    whenever Supply.interval(0.3) {
        say "tick $_";
    }
    whenever Supply.interval(0.5, 0.25) {
        say "TOCK $_";
    }
    whenever Promise.in(1.4) {
        done;
    }
}
```

Tipiska izpilde izdrukā:

```
tick 0
TOCK 0
tick 1
tick 2
TOCK 1
tick 3
tick 4
TOCK 2
```

Ātrais `tick` nostrādā reizi `0.3` sekundēs; lēnākais `TOCK` — reizi `0.5`, sākot ceturtdaļsekundi vēlāk (`interval` otrais arguments ir šī sākotnējā aizture). Neviens negaida otru — `react` bloks vienkārši izpilda to `whenever` ķermeni, kas iet kopā ar pienākušo vērtību, tāpēc abas straumes **krustojas**, nevis mijas pēc kārtas.

Tā kā taimeri paši no sevis nekad nebeidzas, izeju nodrošina trešais `whenever`: `Promise.in(1.4)` tiek turēts pēc 1,4 sekundēm, un tā ķermenis izsauc `done`, izbeidzot `react` bloku. Bez tā `react` tikšķētu un takšķētu mūžīgi.

Precīzais savijums ir atkarīgs no laika, tāpēc vēlāka izpilde rindas var sakārtot mazliet citādi — bet tāda jau ir reaģēšana uz dzīviem notikumiem: jūs atsaucaties uz katru, kad tas notiek, kad vien tas notiek.

{% include nav.html %}
