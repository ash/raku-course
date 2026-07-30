---
title: Begin en einde van de string
translations_gpt:
---

{% include menu.html %}

Twee ankers markeren de uiteinden van de string:

* `^` matcht helemaal aan het **begin** van de string
* `$` matcht helemaal aan het **einde**

Gebruik `^` om te eisen dat de match bij het begin begint:

```raku
say so 'http://example' ~~ /^ http /; # True
say so 'see http://x'   ~~ /^ http /; # False
```

De tweede string bevat `http`, maar niet aan het begin, dus het verankerde patroon mislukt.

`^` en `$` om een patroon zetten dwingt het de **hele** string te matchen, zonder dat er aan weerskanten iets overblijft:

```raku
say so 'hello'       ~~ /^ hello $/; # True
say so 'hello world' ~~ /^ hello $/; # False
```

Dit is een heel gebruikelijk idioom voor validatie — bijvoorbeeld "is deze string precies een getal?":

```raku
say so '2025' ~~ /^ \d+ $/; # True
say so '20a5' ~~ /^ \d+ $/; # False
```

## Regelankers

Wanneer een string uit meerdere regels bestaat, matchen de partners `^^` en `$$` aan het begin en einde van **elke regel** in plaats van van de hele string. Het verschil met `^` en `$` blijkt zodra de tekst die je zoekt niet op de eerste regel staat: de enkele ankers zien alleen de hele string en mislukken, terwijl de verdubbelde op elke regel matchen.

```raku
say so "cat\ndog" ~~ /^  dog  $/;  # False
say so "cat\ndog" ~~ /^^ dog $$/;  # True
```

Hier begint `\n` een tweede regel. De `^^` eist dat `dog` aan het begin van een regel staat en `$$` aan het einde van een regel; beide gelden op de tweede regel, dus slagen de verdubbelde ankers waar de enkele dat niet kunnen.

{% include nav.html %}
