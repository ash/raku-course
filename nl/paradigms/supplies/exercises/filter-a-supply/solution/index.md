---
title: 'Oplossing: Filter een supply'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out;
```

🦋 Je kunt de broncode vinden in het bestand [filter-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/filter-a-supply.raku).

## Uitvoer

```
[2 4 6]
```

## Opmerkingen

1. `grep(* %% 2)` levert een nieuwe supply op die alleen de even waarden doorgeeft, net zoals `grep` een lijst filtert.

1. De tap verzamelt die waarden in `@out`, wat `[2 4 6]` geeft.

{% include nav.html %}
