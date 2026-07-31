---
title: 'Risinājums: Taisnstūra perimetrs'
---

{% include menu.html %}

Šai programmai jāspēj pieņemt vienu vai divus komandrindas argumentus. Risinājumā tiek parādīts jauns triks. Otrā mainīgā noklusējuma vērtība tiek iestatīta uz pirmā mainīgā vērtību: `sub MAIN($a, $b = $a)`. Tātad, tā vietā, lai izveidotu divas multi-funkcijas, mums ir vispārēja funkcija, kas nosaka otrās malas izmēru, ja figūra ir kvadrāts.

## Kods

Šeit ir risinājums:

```raku
sub MAIN($a, $b = $a) {
    my $perimeter = 2 * ($a + $b);

    my $shape = $a == $b ?? 'square' !! 'rectangle';
    say "The perimeter of a $shape is $perimeter.";
}
```

🦋 Atrodiet programmu failā [perimeter.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/the-main-function/perimeter.raku).

## Izvade

Izmēģiniet dažādas ievades vērtības, lai pārbaudītu gan kvadrātus, gan taisnstūrus.

```console
$ raku exercises/the-main-function/perimeter.raku 1    
The perimeter of a square is 4.

$ raku exercises/the-main-function/perimeter.raku 1 2
The perimeter of a rectangle is 6.
```

Ņemiet vērā, ka ir arī trešais gadījums, kas būtu jāpārbauda. Ja tiek ievadīti divi vienādi skaitļi, programmai joprojām vajadzētu saprast, ka tas ir kvadrāts:

```console
$ raku exercises/the-main-function/perimeter.raku 2 2
The perimeter of a square is 8.
```

{% include nav.html %}