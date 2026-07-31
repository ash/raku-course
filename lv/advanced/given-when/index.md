---
title: '`given` un `when`'
translations_gpt:
---

{% include menu.html %}

Kad programmai jāizvēlas starp vairākām alternatīvām, `if` un `elsif` pārbaužu ķēde var kļūt gara un atkārtojoša. Šādā situācijā `given`/`when` konstrukcija bieži vien ir skaidrāka. Tā ir līdzīga `switch` priekšrakstam, kas sastopams citās programmēšanas valodās.

`given` bloks pieņem vērtību un padara to par _tēmu_ — īpašo mainīgo `$_`. Katrs `when` bloks tiek salīdzināts ar šo tēmu, un pirmais, kas atbilst, tiek izpildīts:

```raku
my $n = 2;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    when 3 { say 'three' }
}
```

Šī programma izdrukā:

```
two
```

Atšķirībā no `switch` dažās citās valodās, šeit nav "caurkritšanas" (fall-through): tiklīdz kāds `when` atbilst, tā bloks tiek izpildīts un `given` bloks ir pabeigts. Pārējie `when` bloki netiek pārbaudīti.

## `default` bloks

`default` bloks tiek izpildīts, ja neviens no `when` blokiem neatbilda. Tam ir tāda pati loma kā `else` atzaram `if` priekšrakstā:

```raku
my $n = 5;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    default { say 'many' }
}
```

Tā kā `$n` nav ne `1`, ne `2`, programma izdrukā:

```
many
```

{% include nav.html %}
