---
title: Zip metaoperatori
translations_gpt:
---

{% include menu.html %}

Zip metaoperators `Z` paņem divus (vai vairākus) sarakstus un sapāro to elementus pēc pozīcijas:

```raku
say (1, 2, 3) Z (4, 5, 6); # ((1 4) (2 5) (3 6))
```

Rezultāts ir grupu saraksts: pirmie elementi no katra saraksta kopā, tad otrie no katra un tā tālāk.

Vēl interesantāk — `Z` var apvienot ar operatoru, lai darbotos ar katru pāri. Piemēram, `Z+` saskaita elementus pa pozīcijām:

```raku
say (1, 2, 3) Z+ (10, 20, 30); # (11 22 33)
```

Šis ir zip metaoperators, kas ietver `+` operatoru: tas aprēķina `1 + 10`, `2 + 20` un `3 + 30`. Tāpat `Z*` sareizina atbilstošos elementus:

```raku
say (1, 2, 3) Z* (10, 20, 30); # (10 40 90)
```

Un `Z~` savieno atbilstošās virknes:

```raku
say <a b c> Z~ <1 2 3>; # (a1 b2 c3)
```

{% include nav.html %}
