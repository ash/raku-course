---
title: 'Risinājums: Pilsēta un valsts'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
if 'London-UK' ~~ / $<city>=(\w+) '-' $<country>=(\w+) / {
    say ~$<city>;
    say ~$<country>;
}
```

🦋 Atrodiet programmu failā [city-and-country.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/city-and-country.raku).

## Izvade

```
London
UK
```

## Komentāri

1. `$<city>=( … )` un `$<country>=( … )` dod abiem tvērumiem nosaukumus numuru vietā.

1. Pēc sakritības tos nolasa atpakaļ kā `$<city>` un `$<country>`, kas lasās skaidrāk nekā `$0` un `$1`.

1. Prefikss `~` katru tvērumu ieliek virknes kontekstā, lai tas izdrukātos kā vienkāršs teksts; bez tā `say $<city>` rādītu sakritības objektu kā `｢London｣`.

{% include nav.html %}
