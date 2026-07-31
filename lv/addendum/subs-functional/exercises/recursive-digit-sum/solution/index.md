---
title: 'Risinājums: Ciparu summa ar rekursiju'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub digit-sum($n) {
    return $n if $n < 10;
    return $n % 10 + digit-sum($n div 10);
}

say digit-sum(12345);
```

🦋 Atrodiet programmu failā [recursive-digit-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/recursive-digit-sum.raku).

## Izvade

```
15
```

## Komentāri

1. Bāzes gadījums ir viencipara skaitlis, kas pats ir sava ciparu summa. Citādi
procedūra ar `$n % 10` nolobī pēdējo ciparu un rekursīvi turpina ar atlikumu
`$n div 10`.

{% include nav.html %}
