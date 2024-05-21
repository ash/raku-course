---
title: 'Postfix form of "for"'
---

{% include menu.html %}

Mēs jau esam redzējuši citus paziņojumu modifikatorus: [`if` un `else`](/lv/essentials/conditional-checks/modifiers) un [`while` un `until`](/lv/essentials/loops/modifiers). Un tas ir iemesls nelielai svinēšanai, jo Raku dizains ir ļoti konsekvents.

Ar īsu cikla ķermeni, `for` ciklu var uzrakstīt postfix formā:

```raku
.say for 1..7;
```

Kā redzat, diapazoni ir ļoti dabiski, ja tos izmanto ar `for` postfix formu.

Šī programma ir ekvivalenta tradicionālākajam variantam:

```raku
for 1..7 -> $n {
    say $n;
}
```

Vai, ja tiek izmantots noklusējuma cikla mainīgais, tad:

```raku
for 1..7 {
    .say;
}
```

Šeit, `.say` ir īsā forma `$_.say`.


{% include nav.html %}