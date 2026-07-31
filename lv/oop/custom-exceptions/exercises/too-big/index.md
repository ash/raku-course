---
title: Pārāk liels
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Definējiet paša izņēmuma klasi `TooBig`, kas manto no `Exception` un kam ir divi atribūti `value` un `limit`. Tās metodei `message` jāatgriež `Value <value> exceeds the limit of <limit>`.

Pēc tam palaidiet ciklu pāri vērtībām `30`, `99` un `60` ar robežu `50`. Katrai vērtībai izmetiet `TooBig` tikai tad, kad vērtība pārsniedz robežu, un izmantojiet fāzeri `CATCH` ar `when TooBig`, kas izdrukā paziņojumu **un** otrā rindā nolasa izņēmuma atribūtu `limit` tieši, lai izdrukātu `Try a value up to <limit>.`. Vērtībai robežas ietvaros vienkārši jāziņo, ka viss ir kārtībā.

Tas parāda, ka izņēmums tiek celts tikai neveiksmīgajiem skaitļiem; pārējie iziet cauri bez traucējumiem, un cikls jebkurā gadījumā turpinās.

## Piemērs

Programma izdrukā:

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
