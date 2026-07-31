---
title: Du tempigiloj
translations_gpt:
---

{% include menu.html %}

Ĉiu ĝisnuna ekzemplo pri react uzis `Supply.from-list`, kiu puŝas ĉiujn siajn valorojn en la momento, kiam oni konektiĝas al ĝi. Tial ĉiu fluo presiĝis plene antaŭ ol la sekva komenciĝis — nenia atendo estis implikita. Veraj event-fluoj ne estas tiaj: iliaj valoroj alvenas disaj en la **tempo**, kaj bloko `react` interplektas ilin laŭ ilia alveno.

Tempigilo estas la plej simpla fluo, kiu kondutas tiel. `Supply.interval($period)` eligas kreskantan nombrilon — `0, 1, 2, …` — unufoje ĉiujn `$period` sekundojn. Plenumu du el ili je malsamaj rapidecoj ene de unu `react`, kaj iliaj valoroj kunplektiĝas:

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

Tipa plenumo presas:

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

La rapida `tick` ekfunkcias ĉiujn `0.3` sekundojn; la pli malrapida `TOCK` ĉiujn `0.5`, komencante kvaronsekundon poste (la dua argumento al `interval` estas tiu komenca prokrasto). Neniu atendas la alian — la bloko `react` simple plenumas tiun korpon `whenever`, kiu apartenas al la valoro, kiu alvenis, do la du fluoj **interkruciĝas** anstataŭ alterni.

Ĉar tempigiloj neniam finiĝas per si mem, tria `whenever` provizas la eliron: `Promise.in(1.4)` estas plenumata post 1,4 sekundoj, kaj ĝia korpo vokas `done` por fini la blokon `react`. Sen ĝi, la react tiktakus eterne.

La preciza interplektado dependas de la tempado, do pli malfrua plenumo povas ordigi la liniojn iomete alie — sed tia estas la naturo de reagi al vivaj eventoj: vi respondas al ĉiu laŭ ĝia okazo, kiam ajn ĝi okazas.

{% include nav.html %}
