---
title: Obiecta introspicere
translations_gpt:
---

{% include menu.html %}

In [sectione de receptaculis](/la/advanced/containers) `.^name` adhibuisti ut valorem de genere suo interrogares. Eaedem metavocationes `.^` tibi permittunt classem eiusque obiecta inspicere: nomina eorum, attributa eorum, et ubi in hierarchia sedeant.

Metamethodus `.^name` nomen classis reddit:

```raku
class Dog {
    has Str $.name;
    method bark { 'Woof' }
}

say Dog.^name; # Dog
```

Metamethodus `.^attributes` attributa classis enumerat. Unumquodque cum genere suo et nomine privato interno ostenditur (forma `$!` quam apud [attributa privata](/la/oop/methods/private-attributes) invenisti):

```raku
say Dog.^attributes; # (Str $!name)
```

Introspectio utilis est instrumentis quae cum obiectis generaliter operantur — exempli gratia, ad omne attributum obiecti imprimendum sine classe eius ante nota. Argumentum sequens inspicit quomodo catenam hereditatis classis videas.

{% include nav.html %}
