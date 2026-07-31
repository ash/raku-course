---
title: Partes
translations_gpt:
---

{% include menu.html %}

_Pars_ (_role_) est fasciculus agendi rationis (et interdum datorum) qui a pluribus classibus communicari potest. Ubi hereditas dicit classem genus quoddam alterius _esse_, pars describit id quod classis _facere potest_.

Partem per verbum `role` definis, fere sicut classem, et eam classi per proprietatem `does` das:

```raku
role Greet {
    method hello {
        'Hello from ' ~ self.name;
    }
}

class Person does Greet {
    has $.name;
}
```

Classis `Person` nunc methodum `hello` ex parte habet, ac si in ipsa classe scripta esset:

```raku
say Person.new(name => 'Anna').hello; # Hello from Anna
```

Classis quae partem facit ut illam partem habens agnoscitur:

```raku
say Person.new(name => 'Anna') ~~ Greet; # True
```

Animadverte methodum `hello` partis `self.name` adhibere, quamquam ipsa pars nullum attributum `name` habet. Hoc rectum est: methodus ut portio cuiuscumque classis partem componit exsequitur, et illa classis `name` praebet. Argumentum sequens ostendit classem plus quam unam partem simul suscipere posse.

{% include nav.html %}
