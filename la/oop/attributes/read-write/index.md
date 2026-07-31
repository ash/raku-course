---
title: Attributa legenda et scribenda
translations_gpt:
---

{% include menu.html %}

Ex more accessor per `has $.name` creatus _solum legendus_ est. Valor in constructore initiatur, post quod valorem legere potes sed eum ab exteriore obiecti mutare non potes. Ei assignare error est:

```raku
class Dog {
    has $.name;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
```

Hoc desinit cum:

```
Cannot modify an immutable Str (Rex)
```

Ut valor per accessorem mutari possit, attributum proprietate `is rw` nota:

```raku
class Dog {
    has $.name is rw;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
say $rex.name; # Max
```

Nunc accessor receptaculum scribendum reddit, itaque assignatio operatur et `name` obiecti fit `Max`.

{% include nav.html %}
