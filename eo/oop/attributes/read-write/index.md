---
title: Leg- kaj skribeblaj atributoj
translations_gpt:
---

{% include menu.html %}

Defaŭlte, la atingilo kreita de `has $.name` estas _nur-legebla_. La valoro estas pravalorizita en la konstruilo, post kio vi povas legi la valoron sed ne ŝanĝi ĝin de ekstere de la objekto. Atribui al ĝi estas eraro:

```raku
class Dog {
    has $.name;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
```

Ĉi tio haltas kun:

```
Cannot modify an immutable Str (Rex)
```

Por permesi, ke la valoro estu ŝanĝata tra la atingilo, marku la atributon per la trajto `is rw`:

```raku
class Dog {
    has $.name is rw;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
say $rex.name; # Max
```

Nun la atingilo redonas skribeblan ujon, do la atribuo funkcias kaj la `name` de la objekto fariĝas `Max`.

{% include nav.html %}
