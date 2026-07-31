---
title: 'Risinājums: END secība'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams uzdevuma risinājums.

## Kods

```raku
END say 'first END';
END say 'second END';

say 'body';
```

🦋 Šīs programmas pirmkodu var atrast failā [end-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/end-order.raku).

## Izvade

```
body
second END
first END
```

## Komentāri

1. Abi `END` fāzeri izpildās pēc galvenā koda, tāpēc `body` tiek izdrukāts pirmais.

1. Vairāki `END` fāzeri izpildās pēc principa "pēdējais iekšā, pirmais ārā": `second END`, kas deklarēts vēlāk, izpildās pirms `first END`. Tas atspoguļo to, kā tīrīšana parasti atceļ jaunāko iestatījumu vispirms.

{% include nav.html %}
