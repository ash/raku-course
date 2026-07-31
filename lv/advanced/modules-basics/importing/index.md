---
title: Importēšana
translations_gpt:
---

{% include menu.html %}

Ir vairāk nekā viens veids, kā ienest moduli programmā. Trīs teikumi `use`, `need` un `require` atšķiras ar to, _kad_ modulis tiek ielādēts un _ko_ tas padara pieejamu.

## `use`

Ar `use` jau esat iepazinušies. Tas ielādē moduli kompilēšanas laikā un importē tā eksportētos nosaukumus, tāpēc tos var izsaukt tieši:

```raku
use Greeting;
say hello('Anna'); # Hello, Anna!
```

## `need`

Arī `need` ielādē moduli kompilēšanas laikā, taču tas _neimportē_ eksportētos nosaukumus. Moduļa `our` mainīgos joprojām sasniedzat caur moduļa nosaukumu:

```raku
need Greeting;
say $Greeting::version; # 1.0
```

Pēc `need Greeting` kails `hello(...)` netiktu atpazīts, jo nekas netika importēts — pieejami ir tikai kvalificētie nosaukumi, piemēram, `$Greeting::version`.

## `require`

`require` ielādē moduli _izpildes laikā_, nevis kompilēšanas laikā. Tas noder, kad līdz pat programmas izpildei nezināt, vai modulis būs vajadzīgs, — piemēram, kad tā nosaukumu nosaka lietotāja ievade.

Tā kā ielāde notiek izpildes laikā, nekas netiek importēts automātiski. Uzskaitot vēlamos simbolus leņķa iekavās aiz nosaukuma, tie tiek ievilkti, un tos var izsaukt tieši:

```raku
require Greeting <&hello>;
say hello('Anna'); # Hello, Anna!
```

Ikdienas lietošanai vajadzīgs `use`; `need` un `require` ir retāku gadījumu vajadzībām.

{% include nav.html %}
