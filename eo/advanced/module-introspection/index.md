---
title: Modula introspekto
translations_gpt:
---

{% include menu.html %}

La nomo de modulo enkondukas _pakaĵon_ — nomspacon, kiu enhavas la nomojn difinitajn en ĝi. Pli frue, en [la sekcio pri ujoj](/eo/advanced/containers), vi renkontis `WHO`, kiu redonas la `Stash` (la simboltabelon) de pakaĵo. Modula introspektado utiligas tion.

La subaj ekzemploj uzas la modulon `Greeting`, konstruitan en la antaŭaj temoj — eksportita subrutino kaj dividata `our`-variablo:

```raku
unit module Greeting;

our $version = '1.0';

sub hello($name) is export {
    return "Hello, $name!";
}
```

La pakaĵo de modulo estas skribata kun fina `::`. Aldono de `.keys` listigas la nomojn, kiujn ĝi enhavas:

```raku
use Greeting;

say Greeting::.keys.sort; # ($version EXPORT)
```

La modulo `Greeting` el la antaŭaj temoj difinas `our`-variablon, `$version`, do ĝia pakaĵo enhavas tiun nomon — inkluzive de la sigelo. Apud ĝi sidas `EXPORT`, kiu eble ŝajnas surpriza. Tio estas pakaĵo, kiun Raku kreas aŭtomate por enhavi ĉion, kion modulo markas per `is export`, kiel la subrutino `hello`. Eksportita nomo do _ne_ aperas rekte en la pakaĵo; ĝi loĝas ene de tiu sub-pakaĵo `EXPORT`. (La ŝlosiloj revenas en neniu fiksita ordo, do la ekzemplo ordigas ilin por stabila rezulto.)

Vi ankaŭ povas serĉi nomon en la pakaĵo uzante ĝin kiel ŝlosilon. Tio atingas la saman valoron kiel la kvalifikita `$Greeting::version`:

```raku
use Greeting;

say Greeting::{'$version'}; # 1.0
```

## Listigo de tio, kion modulo eksportas

La pakaĵo `EXPORT` vidita supre estas kie la eksportitaj nomoj efektive loĝas, do vi povas listigi ilin rigardante unu nivelon pli profunde. Eksportaĵoj sen etikedo iras en la grupon `DEFAULT` (vidu [Eksportaj etikedoj](/eo/advanced/modules-basics/export-tags)), kaj ĝiaj `.keys` estas la eksportitaj rutinoj:

```raku
use Greeting;

say Greeting::EXPORT::DEFAULT::.keys.sort; # (&hello)
```

Ĉiu ŝlosilo estas eksportita nomo kun sia sigelo — ĉi tie la sola subrutino `&hello`, montrita kun la `&`, kiu markas rutinon. Tiel vi povas malkovri, kion modulo disponebligas al siaj uzantoj sen legi ĝian fontkodon: demandu al ĝia pakaĵo `EXPORT::DEFAULT`, kion ĝi enhavas.

Introspekti pakaĵon tiamaniere estas oportuna, kiam vi volas malkovri, kion modulo provizas, aŭ atingi ĝiajn nomojn dinamike anstataŭ skribi ĉiun aparte en la fontkodo.

{% include nav.html %}
