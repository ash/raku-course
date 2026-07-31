---
title: 'Risinājums: Sadalīšana pirmreizinātājos'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $n = 360;
my @factors;

for 2..$n -> $d {
    while $n %% $d {
        @factors.push($d);
        $n div= $d;
    }
}

say @factors;
```

🦋 Atrodiet programmu failā [prime-factors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/prime-factors.raku).

## Izvade

```
[2 2 2 3 3 5]
```

## Komentāri

1. Katram kandidātam `$d` iekšējais `while` to izdala no `$n` tik reižu, cik tas
ietilpst, katrreiz ieliekot `$d` masīvā. Tā kā mazākie reizinātāji tiek noņemti
pirmie, katrs `$d`, kas vēl dala `$n`, noteikti ir pirmskaitlis.

1. `$n div= $d` ir veselo skaitļu dalīšana atpakaļ `$n`; tā skaitli sarauj, līdz
paliek vairs tikai `1`.

{% include nav.html %}
