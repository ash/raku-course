---
title: Атрибути за четене и писане
translations_gpt:
---

{% include menu.html %}

По подразбиране аксесорът, създаден от `has $.name`, е _само за четене_. Стойността се задава в конструктора, след което можете да я четете, но не и да я променяте отвън. Присвояването ѝ е грешка:

```raku
class Dog {
    has $.name;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
```

Това спира с:

```
Cannot modify an immutable Str (Rex)
```

За да позволите стойността да се променя през аксесора, отбележете атрибута с трейта `is rw`:

```raku
class Dog {
    has $.name is rw;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
say $rex.name; # Max
```

Сега аксесорът връща записваем контейнер, така че присвояването работи и `name` на обекта става `Max`.

{% include nav.html %}
