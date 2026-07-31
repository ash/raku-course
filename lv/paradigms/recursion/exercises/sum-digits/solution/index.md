---
title: 'Risinājums: Ciparu summa'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub sum-digits($n) {
    $n < 10 ?? $n !! $n % 10 + sum-digits($n div 10);
}

say sum-digits(1234);
```

🦋 Atrodiet programmu failā [sum-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/sum-digits.raku).

## Izvade

```
10
```

## Komentāri

1. Bāzes gadījums ir viencipara skaitlis, kas ir savas paša ciparu summas vērtība.

1. Citādi `$n % 10` ir pēdējais cipars un `$n div 10` to nomet; `1 + 2 + 3 + 4` ir `10`.

{% include nav.html %}
