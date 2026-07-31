---
title: Hashes
translations_gpt:
---

{% include menu.html %}

_Jauktenis_ ir vēl viens asociatīvo datu tipu piemērs Raku valodā. Tas ir salikts datu tips, kas attēlo savu elementu nosaukumus uz to vērtībām. Iepazīsimies ar jauno sigilu, ko lieto jaukteņu mainīgie: `%`.

```raku
my %capitals;
```

Tagad jaukteni var izmantot un piešķirt tam kādas sākotnējās vērtības.

```raku
%capitals = France => 'Paris', Italy => 'Rome';
```

Tāpat kā citiem datu tipiem, abas darbības var izdarīt kopā:

```raku
my %capitals = France => 'Paris', Italy => 'Rome';
```

## Piekļuve elementiem

Elementu indeksēšana ir līdzīga tai, ko redzējām [pāriem](../pairs). Izmantojiet leņķa iekavu vai figūriekavu pāri ar virkni:

```raku
say %capitals<France>;
say %capitals{'Italy'};
```

Jaukteņi ir maināmi, tāpēc esošās vērtības var gan mainīt, gan pievienot jaunas:

```raku
%capitals<Germany> = 'Berlin';
```

## Atslēgas un vērtības

Divas iebūvētās metodes `keys` un `values` atgriež jaukteņa atslēgu un vērtību sarakstus:

```raku
say %capitals.keys;
say %capitals.values;
```

Lūk, šīs programmas izvades piemērs:

    (Germany Italy France)
    (Berlin Rome Paris)

Ievērojiet, ka jaukteņa elementi nav sakārtoti, taču atslēgu un vērtību secība, ko atgriež minētās metodes, ir vienāda.

{% include nav.html %}
