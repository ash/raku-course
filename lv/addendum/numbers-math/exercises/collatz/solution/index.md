---
title: 'Risinājums: Kolaca soļi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $n = 27;
my $steps = 0;

while $n != 1 {
    $n = $n %% 2 ?? $n div 2 !! 3 * $n + 1;
    $steps++;
}

say $steps;
```

🦋 Atrodiet programmu failā [collatz.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/collatz.raku).

## Izvade

```
111
```

## Komentāri

1. Trīsvērtīgais operators `?? !!` nākamo vērtību izvēlas vienā izteiksmē: samazina
`$n` uz pusi, kad tas ir pāra (`$n %% 2`), citādi piemēro `3 * $n + 1`.

1. `27` ir slavens mazs gadījums, kas veic pārsteidzoši garu līkumu — `111` soļus —,
pirms beidzot nosēžas pie `1`.

{% include nav.html %}
