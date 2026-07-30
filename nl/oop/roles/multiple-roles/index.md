---
title: Meerdere rollen samenstellen
translations_gpt:
---

{% include menu.html %}

Een klasse kan meer dan één rol doen. Je somt ze eenvoudig op, elk met een eigen `does`:

```raku
role Walk {
    method move { 'walking' }
}

role Swim {
    method dive { 'diving' }
}

class Duck does Walk does Swim {
}
```

De klasse `Duck` heeft nu zowel de methode `move` uit `Walk` als de methode `dive` uit `Swim`:

```raku
say Duck.new.move; # walking
say Duck.new.dive; # diving
```

Rollen zo combineren heet _compositie_. Het laat je een klasse samenstellen uit meerdere onafhankelijke stukken gedrag, wat vaak flexibeler is dan één keten van overerving bouwen — een klasse kan precies de mogelijkheden binnenhalen die ze nodig heeft, en niets meer.

{% include nav.html %}
