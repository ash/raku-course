---
title: Tipobjektoj kaj ekzempleroj
translations_gpt:
---

{% include menu.html %}

Kiam vi skribas klasan nomon kiel `Dog`, vi referencas la _tipobjekton_ de la klaso. La tipobjekto reprezentas la tipon mem, ne iun apartan objekton de tiu tipo. _Ekzemplero_, kreita per `new`, estas efektiva objekto.

Raku povas distingi ilin. La metodo `defined` redonas `False` por tipobjekto kaj `True` por ekzemplero:

```raku
class Dog {
}

say Dog.defined;     # False
say Dog.new.defined; # True
```

Tipobjekto estas konsiderata _nedifinita_, ĉar ĝi tenas neniujn konkretajn datumojn — ĝi estas nur la priskribo de tipo. Ekzemplero estas _difinita_: ĝi estas vera objekto.

Ambaŭ raportas la saman tipon per `WHAT`, kiun vi renkontis en la [sekcio pri ujoj](/eo/advanced/containers):

```raku
class Dog {
}

say Dog.WHAT;     # (Dog)
say Dog.new.WHAT; # (Dog)
```

La krampoj ĉirkaŭ `(Dog)` estas la maniero de Raku montri tipon. Do `Dog` kaj `Dog.new` kunhavas la tipon `Dog`; la diferenco estas, ke unu estas la tipo mem, kaj la alia estas objekto de tiu tipo.

{% include nav.html %}
