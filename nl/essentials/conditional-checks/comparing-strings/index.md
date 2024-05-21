---
title: Strings vergelijken
---

{% include menu.html %}

Het vergelijken van strings gebruikt zijn eigen set operators:

`eq` | Gelijk aan
`ne` | Niet gelijk aan
`gt` | Groter dan
`ge` | Groter dan of gelijk aan
`lt` | Kleiner dan
`le` | Kleiner dan of gelijk aan

## Voorbeelden

Bekijk een paar voorbeelden van het vergelijken van twee strings:

```raku
say 'alpha' lt 'beta'; # Waar
say 'word' ne 'Word';  # Waar
say 'xyz' gt 'xvw';    # Waar
```

{% include nav.html %}