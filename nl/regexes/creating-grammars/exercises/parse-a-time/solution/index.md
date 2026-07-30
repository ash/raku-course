---
title: 'Oplossing: Ontleed een tijd'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar Time {
    token TOP    { <hour> ':' <minute> ':' <second> }
    token hour   { \d ** 2 }
    token minute { \d ** 2 }
    token second { \d ** 2 }
}

say Time.parse('09:30:45')<second>;
```

🦋 Je kunt de broncode vinden in het bestand [parse-a-time.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-time.raku).

## Uitvoer

```
｢45｣
```

## Opmerkingen

1. `TOP` beschrijft de hele tijd als drie tokens gescheiden door dubbele punten. Elk deel is `\d ** 2` — precies twee cijfers — in plaats van een open `\d+`, zodat een misvormde waarde als `09:30:456` afgewezen wordt. (Als een deel niet opgevuld kan zijn, zoals het uur in `9:30:45`, schrijf dan `\d ** 1..2` om een of twee cijfers toe te staan.)

1. Na het ontleden is elk token een benoemde capture, dus wordt de seconde als `<second>` van de match gelezen. Een derde deel toevoegen is slechts één token en één dubbele punt extra — de grammatica schaalt vanzelf mee.

{% include nav.html %}
