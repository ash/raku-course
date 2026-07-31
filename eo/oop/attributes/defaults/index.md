---
title: Defaŭltaj valoroj
translations_gpt:
---

{% include menu.html %}

Atributo povas ricevi _defaŭltan valoron_, kiu estas uzata, kiam objekto estas kreita sen valoro por ĝi. Skribu la defaŭlton post la atributo, per `=`:

```raku
class Dog {
    has Str $.name;
    has Rat $.weight = 4.0;
}
```

Rimarku, ke simile al variabloj, eblas devigi la tipon de la atributoj.

Se vi ne transdonas `weight` al `new`, la atributo prenas la defaŭlton:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.weight; # 4
```

Vi ankoraŭ povas superregi la defaŭlton transdonante valoron:

```raku
my $lighty = Dog.new(name => 'Lighty', weight => 3.2);
say $lighty.weight; # 3.2
```

Sen defaŭlto, kaj sen valoro transdonita al `new`, atributo estas simple nedifinita, ekzakte kiel freŝa skalara variablo.

{% include nav.html %}
