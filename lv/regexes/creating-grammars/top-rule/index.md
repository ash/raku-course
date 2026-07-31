---
title: Likums TOP
translations_gpt:
---

{% include menu.html %}

Kad virkni parsējat ar gramatiku, Raku sāk no marķiera ar nosaukumu `TOP`. Tas ir ieejas punkts — **visas** ievades apraksts. Viss pārējais gramatikā eksistē, lai to atbalstītu.

Marķieris `TOP` parasti atsaucas uz citiem marķieriem pēc nosaukuma, sadalot uzdevumu mazākās daļās:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}
```

Nolasiet `TOP` skaļi: «atslēga, tad vienādības zīme, tad vērtība». Marķieri `key` un `value` pasaka, kā katra no šīm daļām izskatās. Šis sadalījums ir visa gramatikas jēga — katram marķierim ir viens mazs, skaidri nosaukts uzdevums, un `TOP` tos saliek kopā.

`TOP` ir tikai vienošanās, ko ievēro `.parse`; pārējos marķierus varat nosaukt, kā vēlaties. Izvēlētie nosaukumi kļūst arī par nosauktajiem tvērumiem rezultātā, tāpēc labi nosaukta gramatika rada sevi aprakstošu sakritību koku, kā drīz redzēsiet.

{% include nav.html %}
