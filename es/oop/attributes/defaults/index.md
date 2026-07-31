---
title: Valores por defecto
translations_gpt:
---

{% include menu.html %}

A un atributo se le puede dar un _valor por defecto_, que se usa cuando se crea un objeto sin darle un valor. Escribe el valor por defecto después del atributo, con `=`:

```raku
class Dog {
    has Str $.name;
    has Rat $.weight = 4.0;
}
```

Fíjate en que, igual que con las variables, es posible imponer el tipo de los atributos.

Si no pasas `weight` a `new`, el atributo toma el valor por defecto:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.weight; # 4
```

Puedes anular el valor por defecto pasando un valor:

```raku
my $lighty = Dog.new(name => 'Lighty', weight => 3.2);
say $lighty.weight; # 3.2
```

Sin valor por defecto y sin un valor pasado a `new`, un atributo simplemente queda sin definir, exactamente como una variable escalar recién declarada.

{% include nav.html %}
