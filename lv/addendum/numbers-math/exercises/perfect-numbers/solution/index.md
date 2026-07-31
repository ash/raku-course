---
title: 'Risinājums: Pilnīgie skaitļi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @perfect = (1..30).grep: -> $n {
    $n == [+] (1..^$n).grep($n %% *)
};

say @perfect;
```

🦋 Atrodiet programmu failā [perfect-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/perfect-numbers.raku).

## Izvade

```
[6 28]
```

## Komentāri

1. `(1..^$n).grep($n %% *)` patur skaitļus zem `$n`, kas to dala bez atlikuma, —
tā īstos dalītājus. `%% *` ir Whatever funkcija, kas pārbauda dalāmību.

1. `[+]` šos dalītājus saskaita, un ārējais `grep` patur tikai tos skaitļus, kas
ir vienādi ar šo summu.

{% include nav.html %}
