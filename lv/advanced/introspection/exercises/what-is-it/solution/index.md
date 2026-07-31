---
title: 'Risinājums: Kas tas ir'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams uzdevuma risinājums.

## Kods

```raku
my $a = 42;
my $b = 'x';

say $a.WHAT === Int;
say $b.WHAT === Int;
```

🦋 Avota kodu var atrast failā [what-is-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/what-is-it.raku).

## Izvade

```
True
False
```

## Komentāri

1. `$a.WHAT` nav virkne `Int`, bet gan pats `Int` tipa objekts, tāpēc `=== Int` salīdzina to ar pašu tipu un atgriež `True`.

1. `$b` satur virkni, tāpēc tā `WHAT` ir `Str`; salīdzinot to ar `Int`, iegūstam `False`. Tieši tāpēc `WHAT` ir noderīgs nosacījumos, ne tikai izvadē.

{% include nav.html %}
