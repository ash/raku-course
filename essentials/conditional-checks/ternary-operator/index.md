---
title: Ternary operator
---

{% include menu.html %}

Ternary operator in Raku is a two-part construction `??` ... `!!`. A Boolean test is followed by two expressions, one of which is executed depending on the result of the test.

```raku
my $shines = 'Sun';
my $day-time = $shines eq 'Sun' ?? 'day' !! 'night';
say $day-time;
```

With the current value of the `$shines` variable, this program prints `day`. If you change it to `Moon`, the result will be `night`.

It is possible to ‘nest’ ternary expressions. Just make sure it does get too complicated.

```raku
my $hours = 20;
my $day-time =
    $hours <= 6 ?? 'Night' !!
    $hours <= 12 ?? 'Morning' !! 
    $hours <= 18 ?? 'Afternoon' !! 'Evening';
say $day-time;
```

Here, depending on the value that is contained in `$hours`, a different par of day will be reported.

{% include nav.html %}
