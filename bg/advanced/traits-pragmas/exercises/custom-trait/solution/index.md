---
title: 'Solution: Потребителски трейт'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my %role;

multi sub trait_mod:<is>(Routine:D $r, :$role!) {
    %role{$r.name} = $role;
}

sub login() is role('admin') { }

say %role<login>;
```

🦋 Можете да намерите изходния код във файла [custom-trait.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/custom-trait.raku).

## Изход

```
admin
```

## Коментари

1. Трейтът е `multi sub trait_mod:<is>`, чийто именуван параметър `:$role!` го задейства при `is role(...)`. За разлика от трейт, който просто присъства, този *получава* аргумента: `is role('admin')` свързва `'admin'` с `$role`.

1. Тялото съхранява тази стойност под името на подпрограмата. Четенето на `%role<login>` след това дава `admin`. (Трейтовете се изпълняват по време на компилация, така че записът вече е там, когато програмата се стартира.)

{% include nav.html %}
