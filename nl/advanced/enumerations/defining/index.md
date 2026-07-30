---
title: Een enum definiëren
translations_gpt: Dutch
---

{% include menu.html %}

Declareer een enum met het sleutelwoord `enum`, een naam en de lijst van constantenamen:

```raku
enum Colour <red green blue>;
```

Dit creëert een nieuw type, `Colour`, en drie constanten: `red`, `green` en `blue`. Je kunt de constanten direct bij naam gebruiken:

```raku
say red;   # red
say green; # green
```

Achter elke naam zit een nummer, automatisch toegekend vanaf nul in de volgorde waarin je ze hebt opgegeven — `red` is `0`, `green` is `1`, `blue` is `2`. Omdat de waarden geordend zijn, kun je de constanten vergelijken:

```raku
say red < blue; # True
```

Een variabele kan getypeerd worden met de enum, zodat deze alleen die constanten accepteert:

```raku
my Colour $c = green;
say $c; # green
```

Als een naam kan botsen met iets anders in je programma, kun je altijd naar een constante verwijzen via de naam van de enum met `::`:

```raku
say Colour::red; # red
```

Een enum geeft een verzameling gerelateerde constanten een naam en een type, waardoor code die ze gebruikt veel duidelijker is dan kale getallen. Het volgende onderwerp gaat over [de getallen achter de namen](/nl/advanced/enumerations/values-and-keys).

{% include nav.html %}
