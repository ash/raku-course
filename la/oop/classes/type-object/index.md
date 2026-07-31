---
title: Obiecta generis et exempla
translations_gpt:
---

{% include menu.html %}

Cum nomen classis qualis est `Dog` scribis, ad _obiectum generis_ classis spectas. Obiectum generis ipsum genus repraesentat, non aliquod certum obiectum illius generis. _Exemplar_, per `new` creatum, est obiectum actuale.

Raku utrumque discernere potest. Methodus `defined` pro obiecto generis `False` reddit et pro exemplari `True`:

```raku
class Dog {
}

say Dog.defined;     # False
say Dog.new.defined; # True
```

Obiectum generis _indefinitum_ habetur quia nulla data concreta continet — mera descriptio generis est. Exemplar _definitum_ est: obiectum verum est.

Utrumque idem genus per `WHAT` nuntiat, quod in [sectione de receptaculis](/la/advanced/containers) invenisti:

```raku
class Dog {
}

say Dog.WHAT;     # (Dog)
say Dog.new.WHAT; # (Dog)
```

Parentheses circa `(Dog)` sunt modus quo Raku genus ostendit. Itaque `Dog` et `Dog.new` genus `Dog` communicant; differentia est quod alterum ipsum genus est, alterum obiectum illius generis.

{% include nav.html %}
