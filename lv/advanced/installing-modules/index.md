---
title: Moduļu instalēšana no tīmekļa
translations_gpt:
---

{% include menu.html %}

Papildus moduļiem, kurus rakstāt pats, pastāv liela kopienas publicēto moduļu kolekcija. Tie aptver visu, sākot no tīmekļa ietvariem līdz datu formātiem, un jūs varat tos instalēt un izmantot savās programmās.

## Instalētājs `zef`

Moduļi tiek instalēti ar `zef` — standarta moduļu pārvaldnieku, kas tiek piegādāts kopā ar Rakudo. Lai instalētu moduli, norādiet `zef` moduļa nosaukumu:

```console
$ zef install JSON::Fast
```

`zef` lejupielādē moduli kopā ar visām tā atkarībām, izpilda tā testus un instalē to. Pēc instalēšanas modulis automātiski atrodas meklēšanas ceļā, tāpēc programma var to ielādēt ar vienkāršu `use` — opcija `-I` nav nepieciešama:

```raku
use JSON::Fast;
```

Jūs varat arī meklēt ekosistēmā un atjaunināt vai noņemt moduļus:

```console
$ zef search Test
$ zef uninstall JSON::Fast
```

## No kurienes nāk moduļi

Publicētie moduļi atrodas Raku _ekosistēmā_. To var pārlūkot tīmekļa vietnē [raku.land](https://raku.land), kur ir uzskaitītas pieejamās distribūcijas un to dokumentācija.

## `META6.json`

Distribūcija, kas paredzēta kopīgošanai, ietver apraksta failu ar nosaukumu `META6.json`. Tajā ir ierakstīts distribūcijas nosaukums, versija, moduļi, kurus tā nodrošina, un citas distribūcijas, no kurām tā ir atkarīga. `zef` nolasa šo failu, lai zinātu, ko instalēt un kā daļas saskan kopā. Kad publicējat savu moduli, pareiza `META6.json` nodrošināšana ir tas, kas padara to instalējamu visiem pārējiem.

{% include nav.html %}
