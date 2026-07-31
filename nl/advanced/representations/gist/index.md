---
title: De `.gist`-methode
---

{% include menu.html %}

De `.gist`-methode geeft een **mensvriendelijke** representatie van een waarde terug — de vorm die je zou willen *lezen*. Dit is precies wat `say` (en `note`) afdrukken: ze roepen `.gist` aan op elk argument.

```raku
say 42.gist;     # 42
say 'Raku'.gist; # Raku
```

Voor eenvoudige waarden is de gist gewoon de waarde zelf. Voor samengestelde gegevens voegt `.gist` een beetje opmaak toe, zodat de structuur leesbaar blijft:

```raku
my @a = 'alpha', 'beta', 'gamma';
say @a.gist; # [alpha beta gamma]
```

Een type-object — een waarde die staat voor het type zelf — wordt door gist weergegeven als de naam tussen haakjes, waardoor het makkelijk te herkennen is in de uitvoer:

```raku
say Int.gist; # (Int)
```

{% include nav.html %}
