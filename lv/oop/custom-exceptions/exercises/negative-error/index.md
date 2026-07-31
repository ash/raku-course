---
title: Negatīva skaitļa kļūda
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Definējiet paša izņēmuma klasi `Negative`, kas manto no `Exception`, kam ir atribūts `n` un kuras metode `message` atgriež `<n> is negative`.

Uzrakstiet apakšprogrammu `check($n)`, kas izmet `Negative` (nesot līdzi šo `n`), kad tās arguments ir zem nulles, un citādi atgriež argumentu. Pēc tam blokā izsauciet `check(-5)` un izmantojiet fāzeri `CATCH` ar `when Negative`, lai izdrukātu izņēmuma paziņojumu.

Visbeidzot aiz bloka izmetiet vēl vienu `Negative` (ar `n` vērtību `-10`), lai parādītu, ka izņēmums, kas izmests tur, kur to nesargā neviens `CATCH`, beidz programmu.

## Piemērs

Programma izdrukā:

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
