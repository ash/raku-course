---
title: 'Risinājums: Palindroma pārbaude'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
for <level hello racecar> -> $word {
    say "$word: { $word eq $word.flip ?? 'yes' !! 'no' }";
}
```

🦋 Atrodiet programmu failā [palindrome.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/palindrome.raku).

## Izvade

```
level: yes
hello: no
racecar: yes
```

## Komentāri

1. `.flip` apgriež virknes rakstzīmes otrādi. Vārds ir palindroms tieši tad, kad
tas ir vienāds ar savu apgriezto, un trīsvērtīgais operators to pārvērš par `yes`
vai `no`.

{% include nav.html %}
