---
title: Attributa
translations_gpt:
---

{% include menu.html %}

Classis vacua non valde utilis est. Ut obiectum propria data ferat, classi _attributa_ das. Attributum intra classem per verbum `has` declaratur:

```raku
class Dog {
    has $.name;
    has $.age;
}
```

Unumquodque obiectum classis propriam horum attributorum copiam accipit. Valores eorum ponis cum obiectum creas, ea ad `new` ut argumenta nominata tradens:

```raku
class Dog {
    has $.name;
    has $.age;
}

my $rex = Dog.new(name => 'Rex', age => 3);
```

`$.` in `has $.name` duo simul agit: attributum declarat, et methodum eiusdem nominis creat — _accessorem_ — quae valorem attributi reddit:

```raku
say $rex.name; # Rex
say $rex.age;  # 3
```

Diversa obiecta proprios valores tenent, alia ab aliis independenter:

```raku
my $rex  = Dog.new(name => 'Rex',  age => 3);
my $fido = Dog.new(name => 'Fido', age => 5);

say $rex.name;  # Rex
say $fido.name; # Fido
```

Argumenta sequentia ostendunt quomodo attributa mutabilia reddas et quomodo eis valores praedefinitos des. (Est etiam modus attributa _privata_ declarandi, ab exteriore abscondita; ad illud redibimus cum methodi introductae erunt.)

{% include nav.html %}
