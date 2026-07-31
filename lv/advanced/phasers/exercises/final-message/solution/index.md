---
title: 'Risinājums: Noslēdzošais ziņojums'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams uzdevuma risinājums.

## Kods

```raku
my $count = 0;

END say "processed $count items";

$count++ for 1..3;
```

🦋 Šīs programmas pirmkodu var atrast failā [final-message.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/final-message.raku).

## Izvade

```
processed 3 items
```

## Komentāri

1. `END` fāzeris ir uzrakstīts pirms cikla, bet tas izpildās pēdējais — pēc tam, kad galvenais kods ir pabeigts. Līdz tam `$count` ir palielināts trīs reizes.

1. Tā kā fāzeris aptver `$count`, tas nolasa mainīgā *galīgo* vērtību, nevis `0`, kas tam bija brīdī, kad fāzeris parādījās pirmkodā. Tas ir parastais iemesls, kāpēc kopsavilkumu ievieto `END`.

{% include nav.html %}
