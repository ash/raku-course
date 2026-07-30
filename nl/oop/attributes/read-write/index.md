---
title: Lees-schrijfattributen
translations_gpt:
---

{% include menu.html %}

Standaard is de accessor die `has $.name` maakt _alleen-lezen_. De waarde wordt in de constructor geïnitialiseerd, waarna je de waarde kunt lezen maar niet van buiten het object kunt veranderen. Eraan toekennen is een fout:

```raku
class Dog {
    has $.name;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
```

Dit stopt met:

```
Cannot modify an immutable Str (Rex)
```

Om de waarde via de accessor te kunnen wijzigen, markeer je het attribuut met de trait `is rw`:

```raku
class Dog {
    has $.name is rw;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
say $rex.name; # Max
```

Nu geeft de accessor een schrijfbare container terug, dus de toekenning werkt en de `name` van het object wordt `Max`.

{% include nav.html %}
