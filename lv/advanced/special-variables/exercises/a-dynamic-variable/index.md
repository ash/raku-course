---
title: Dinamisks mainīgais
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Dinamisks mainīgais — tāds, kas rakstīts ar tvigilu `*` — tiek meklēts, virzoties uz āru pa izsaukumu steku, nevis pēc leksiskā redzamības apgabala. Tātad vērtība, ko apakšprogramma redz, ir atkarīga no tā, kas to izsaucis, un tas ļauj blokam izpildīt izsaukto kodu ar citu identitāti.

1. Deklarējiet dinamisku mainīgo `$*user` ar vērtību `'guest'`.
2. Uzrakstiet apakšprogrammu `whoami`, kas izdrukā `running as ` un tam sekojošu pašreizējo `$*user` (piemēram, `running as guest`). Tai `$*user` jānolasa tieši — tā neņem nevienu parametru.
3. Izsauciet `whoami` vienreiz augšējā līmenī: tā ziņo `guest`.
4. Pēc tam blokā, kas `$*user` pārdeklarē kā `'admin'`, izsauciet *to pašu* `whoami` vēlreiz: tagad tā ziņo `admin`.

## Piemērs

Programma izdrukā:

```
running as guest
running as admin
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
