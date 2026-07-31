---
title: 'Risinājums: Parsējiet laiku'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
grammar Time {
    token TOP    { <hour> ':' <minute> ':' <second> }
    token hour   { \d ** 2 }
    token minute { \d ** 2 }
    token second { \d ** 2 }
}

say Time.parse('09:30:45')<second>;
```

🦋 Atrodiet programmu failā [parse-a-time.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-time.raku).

## Izvade

```
｢45｣
```

## Komentāri

1. `TOP` apraksta visu laiku kā trīs marķierus, atdalītus ar koliem. Katra daļa ir `\d ** 2` — tieši divi cipari —, nevis nenoteikts `\d+`, tāpēc nepareiza vērtība, piemēram, `09:30:456`, tiek noraidīta. (Ja kāda daļa var būt bez vadošās nulles, piemēram, stunda `9:30:45`, rakstiet `\d ** 1..2`, lai atļautu vienu vai divus ciparus.)

1. Pēc parsēšanas katrs marķieris ir nosaukts tvērums, tāpēc sekundi nolasa kā `<second>` uz sakritības. Trešās daļas pievienošana ir tikai vēl viens marķieris un vēl viens kols — gramatika mērogojas dabiski.

{% include nav.html %}
