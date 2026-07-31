---
title: Pārrakstīt dinamisko
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Parādiet, kā dinamisks mainīgais plūst cauri starprutīnai, kas par to neko nezina.

Uzrakstiet apakšprogrammu `log-it($msg)`, kas izdrukā paziņojumu ar priekšā liktu dinamisko mainīgo `$*prefix`. Uzrakstiet otru apakšprogrammu `task`, kas vienkārši izsauc `log-it('working')` — un pati `$*prefix` nekad nepiemin. Pēc tam izsauciet `task` divreiz, katru reizi no bloka, kas `$*prefix` uzstāda uz citu vērtību (`INFO`, tad `DEBUG`).

## Piemērs

Programma izdrukā:

```
INFO: working
DEBUG: working
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
