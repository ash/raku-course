---
title: Ternary operator
---

{% include menu.html %}

Ternārais operators Raku valodā ir divdaļīga konstrukcija `??` ... `!!`. Boolea tests tiek izpildīts, kam seko divi izteicieni, no kuriem viens tiek izpildīts atkarībā no testa rezultāta.

```raku
my $shines = 'Sun';
my $day-time = $shines eq 'Sun' ?? 'day' !! 'night';
say $day-time;
```

Ar pašreizējo `$shines` mainīgā vērtību šī programma izdrukā `day`. Ja to mainīsiet uz `Moon`, rezultāts būs `night`.

Ir iespējams ķēdēt ternāros izteicienus. Tikai pārliecinieties, ka tas nekļūst pārāk sarežģīti.

```raku
my $hours = 20;
my $day-time =
    $hours <= 6 ?? 'Night' !!
    $hours <= 12 ?? 'Morning' !! 
    $hours <= 18 ?? 'Afternoon' !! 'Evening';
say $day-time;
```

Šeit, atkarībā no `$hours` vērtības, tiks ziņots par dažādu dienas daļu.

{% include nav.html %}