---
title: 'Risinājums: Salīdzināt pēc tipa'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējamais uzdevuma risinājums.

## Kods

```raku
my $value = 3.14;

given $value {
    when Int { say 'integer' }
    when Rat { say 'rational' }
    when Str { say 'string' }
}
```

🦋 Jūs varat atrast pirmkodu failā [match-by-type.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/match-by-type.raku).

## Izvade

```
rational
```

## Komentāri

1. Kad salīdzināmā vērtība ir tips, gudrā salīdzināšana pārbauda, vai tēma *ir šī tipa*. `3.14` nav `Int`, tāpēc pirmais `when` tiek izlaists.

1. Decimālais literālis, piemēram, `3.14`, Raku valodā ir `Rat` (racionāls skaitlis), tāpēc otrais `when` atbilst un programma izdrukā `rational`.

{% include nav.html %}
