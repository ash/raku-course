---
title: Strings
translations_gpt:
---

{% include menu.html %}

In het deel Essentiëlen leerde je [hoe je strings opbouwt](/nl/essentials/strings) — concatenatie, interpolatie en de lengte van een string. Strings hebben daarnaast een rijke verzameling methoden. Deze sectie verzamelt de nuttigste ervan. (Zoeken met [reguliere expressies](/nl/regexes) is een apart, groter onderwerp, dat later een eigen deel krijgt.)

Drie methoden veranderen het lettertype van een string:

```raku
say 'raku'.uc; # RAKU  — hoofdletters
say 'RAKU'.lc; # raku  — kleine letters
say 'raku'.tc; # Raku  — beginhoofdletter
```

De methode `flip` keert de tekens van een string om:

```raku
say 'Raku'.flip; # ukaR
```

En de operator `x` herhaalt een string een gegeven aantal keren:

```raku
say 'ab' x 3; # ababab
```

De volgende onderwerpen laten zien hoe je in strings zoekt en hoe je ze in stukken splitst en weer aan elkaar plakt.

{% include nav.html %}
