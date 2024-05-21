---
title: Nosacījumu pārbaudes ar if
---

{% include menu.html %}

`if` nosacījuma pārbaude pārbauda nosacījumu un, ja tas ir `True`, izpilda koda bloku.

```raku
if 10 > 4 {
    say 'Matemātika darbojas!';
}
```

Pamaniet, ka jums nav nepieciešams ievietot nosacījumu iekavās (bet varat, ja vēlaties).

Protams, mainīgie ir vairāk nekā laipni gaidīti pārbaudēs:

```raku
my $flag = False;
if $flag {
    # . . . dari kaut ko
}
```

Gadījumā, ja vairāk nekā viena pārbaude izmanto to pašu mainīgo, ir iespējams izmantot ķēdveida salīdzinājumus:

```raku
my $x = 42;
if 40 < $x < 45 {
    say "Pareizā atbilde $x ir dota.";
}
```

Ja nosacījums nav izpildīts, saistītais koda bloks netiek izpildīts, un programmas plūsma turpinās.

```raku
say 'Sākums';
if False {
    say 'Šis nekad netiek izdrukāts.';
}
say 'Beigas';
```

Šī programma vienkārši izdrukā `Sākums` un `Beigas`.

{% include nav.html %}