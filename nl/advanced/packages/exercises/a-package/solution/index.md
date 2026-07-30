---
title: 'Solution: Een pakket'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
package Temperature {
    our $freezing = 0;
    our sub fahrenheit($c) { $c * 9/5 + 32 }
}

say $Temperature::freezing;
say Temperature::fahrenheit(100);
```

🦋 Je kunt de broncode vinden in het bestand [a-package.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/a-package.raku).

## Uitvoer

```
0
212
```

## Opmerkingen

1. Zowel de variabele als de subroutine zijn gedeclareerd met `our`, dus beide worden onderdeel van de `Temperature`-naamruimte en zijn van buitenaf bereikbaar.

1. De variabele wordt benaderd als `$Temperature::freezing` -- sigil, pakketnaam, dan variabelenaam -- terwijl de subroutine wordt aangeroepen als `Temperature::fahrenheit(100)`. Het omrekenen van `100` geeft `100 * 9/5 + 32`, wat `212` is.

1. Een gewoon `package` biedt alleen de naamruimte. Voor een herbruikbare bibliotheek zouden we `module` hebben gebruikt -- en zodra objecten in beeld komen, een `class` -- maar het naamruimtemechanisme is in elk geval hetzelfde.

{% include nav.html %}
