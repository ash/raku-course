---
title: 'Risinājums: Izmantot pārveidotāju'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

Programma `temperature.raku`:

```raku
use Temperature;

sub MAIN($celsius) {
    say c-to-f($celsius);
}
```

🦋 Abus pirmkoda failus atrodiet direktorijā [exercises/advanced/modules-basics/use-temperature](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/use-temperature).

## Izvade

```console
$ raku -I. temperature.raku 100
212
```

## Komentāri

1. `use Temperature` ielādē moduli un importē tā eksportēto apakšprogrammu `c-to-f`, tāpēc programma var to izsaukt tieši.

1. `sub MAIN($celsius)` saņem komandrindas argumentu, tāpēc pārvēršamā temperatūra tiek izvēlēta programmas palaišanas brīdī, nevis iekodēta. Palaista bez argumenta, Raku automātiski izdrukā lietošanas paziņojumu.

1. Modulim jābūt sasniedzamam, un tieši tāpēc programma tiek palaista ar `-I.`, lai Raku meklētu `Temperature.rakumod` pašreizējā direktorijā. `100` °C pārvēršana dod `212` °F.

{% include nav.html %}
