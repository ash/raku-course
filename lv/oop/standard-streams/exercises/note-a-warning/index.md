---
title: 'Brīdinājums ar `note`'
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Programma apstrādā vērtību, kas izrādās negatīva. Izmantojiet `note`, lai nosūtītu brīdinājumu uz standarta kļūdu plūsmu, kad vērtība ir zem nulles, un `say`, lai uz standarta izvadi nosūtītu īsto rezultātu — tās absolūto vērtību. Izmantojiet vērtību `-3`.

## Piemērs

Ekrānā parādās abas rindas:

```
Warning: the value is negative
3
```

Ja standarta kļūdu plūsma tiek izmesta, paliek tikai rezultāts:

```
$ raku note-a-warning.raku 2>/dev/null
3
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
