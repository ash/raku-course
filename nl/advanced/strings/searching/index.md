---
title: Zoeken in strings
translations_gpt:
---

{% include menu.html %}

Verschillende methoden beantwoorden vragen over wat een string bevat.

De methode `contains` vertelt of de ene string ergens in de andere voorkomt:

```raku
say 'Raku'.contains('ak'); # True
say 'Raku'.contains('xy'); # False
```

De methoden `starts-with` en `ends-with` controleren het begin en het einde van een string:

```raku
say 'Raku'.starts-with('Ra'); # True
say 'Raku'.ends-with('ku');   # True
```

Als je de precieze positie van een deelstring nodig hebt, gebruik je `index`. Die geeft de index van de eerste overeenkomst terug, geteld vanaf nul:

```raku
say 'Raku'.index('k'); # 2
```

Wordt de deelstring niet gevonden, dan geeft `index` `Nil` terug in plaats van een getal:

```raku
say 'Raku'.index('z'); # Nil
```

{% include nav.html %}
