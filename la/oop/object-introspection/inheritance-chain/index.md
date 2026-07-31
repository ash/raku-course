---
title: Catena hereditatis
translations_gpt:
---

{% include menu.html %}

Cum una classis ab altera heredat, totam catenam generum super quae aedificata est petere potes. Metamethodus `.^mro` hanc catenam reddit — nomen pro _method resolution order_ stat, ordine quo Raku methodum quaerit.

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^mro; # ((Dog) (Animal) (Any) (Mu))
```

A sinistra legens: `Dog` primum ipse est, deinde `Animal` (parens eius), deinde `Any` et `Mu` — duo genera a quibus omne obiectum Raku in ipso summo heredat. Cum methodum in `Dog` vocas, Raku hunc indicem a sinistra ad dextram perquirit et prima methodo conveniente utitur. Ea est exacte ratio cur methodus filiae parentis superscribat: filia prius in catena apparet.

Pro classe sine parente expresso catena brevior est — ipsa classis tantum, quam `Any` et `Mu` sequuntur.

{% include nav.html %}
