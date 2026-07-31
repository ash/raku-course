---
title: Plures partes componere
translations_gpt:
---

{% include menu.html %}

Classis plus quam unam partem facere potest. Simpliciter unamquamque cum proprio `does` enumeras:

```raku
role Walk {
    method move { 'walking' }
}

role Swim {
    method dive { 'diving' }
}

class Duck does Walk does Swim {
}
```

Classis `Duck` nunc et methodum `move` ex `Walk` et methodum `dive` ex `Swim` habet:

```raku
say Duck.new.move; # walking
say Duck.new.dive; # diving
```

Partes ita coniungere _compositio_ appellatur. Tibi permittit classem ex pluribus independentibus agendi rationis partibus componere, quod saepe flexibilius est quam unam hereditatis catenam aedificare — classis exacte eas facultates quibus eget miscere potest, et nihil amplius.

{% include nav.html %}
