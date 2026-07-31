---
title: 'Risinājums: Eratostena siets'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $limit = 30;
my %composite;

for 2 .. $limit -> $i {
    next if %composite{$i};
    for ($i², $i² + $i ... $limit) -> $multiple {
        %composite{$multiple} = True;
    }
}

say (2..$limit).grep({ !%composite{$_} });
```

🦋 Atrodiet programmu failā [sieve.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/sieve.raku).

## Izvade

```
(2 3 5 7 11 13 17 19 23 29)
```

## Komentāri

1. Karodziņu saraksta vietā `%composite` atceras, kuri skaitļi ir izsvītroti.
Skaitlis, kura tur vēl nav, kad pienāk tā kārta, ir pirmskaitlis.

1. Katram pirmskaitlim `$i` tā reizinājumi tiek radīti kā virkne
`$i², $i² + $i ... $limit` un atzīmēti kā salikti. Sākot ar `$i²`, tiek izlaisti
reizinājumi, ko jau apstrādājuši mazāki pirmskaitļi.

1. Šī ir viena [virkne](/lv/paradigms/lazy/sequence-operator), nevis C stila
`for` galvene. Operators `...` paņem pirmās divas vērtības, izrēķina soli
starp tām un turpina līdz robežai. Ja `$i` ir `3`, tas nozīmē sākumu
pie `9`, tad `12`, tātad solis ir `3`, un cikls izstaigā visu sarakstu:

    ```raku
    my $i = 3;
    say ($i², $i² + $i ... 30); # (9 12 15 18 21 24 27 30)
    ```

    Tātad `for` saņem vienu sarakstu, pa ko iet, — `9, 12, 15, …` —, nevis trīs
atsevišķas daļas.

1. `$i²` skaitli kāpina kvadrātā ar Unikoda augšrakstu. Raku pieņem visus trīs —
`$i * $i`, `$i ** 2` un `$i²` — tie aprēķina tieši vienu un to pašu vērtību, tāpēc
izvēlieties to, kas jums lasās vislabāk. Augšraksta cipari (`²`, `³`, …) ir
parastas rakstzīmes, ko var ierakstīt vai ielīmēt tieši pirmkodā.

{% include nav.html %}
