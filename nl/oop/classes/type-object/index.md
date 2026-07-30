---
title: Typeobjecten en instanties
translations_gpt:
---

{% include menu.html %}

Als je een klassenaam als `Dog` schrijft, verwijs je naar het _typeobject_ van de klasse. Het typeobject stelt het type zelf voor, niet een bepaald object van dat type. Een _instantie_, gemaakt met `new`, is een echt object.

Raku kan de twee uit elkaar houden. De methode `defined` geeft `False` terug voor een typeobject en `True` voor een instantie:

```raku
class Dog {
}

say Dog.defined;     # False
say Dog.new.defined; # True
```

Een typeobject geldt als _ongedefinieerd_ omdat het geen concrete gegevens bevat — het is slechts de beschrijving van een type. Een instantie is _gedefinieerd_: het is een echt object.

Beide melden hetzelfde type via `WHAT`, dat je tegenkwam in de [sectie over containers](/nl/advanced/containers):

```raku
class Dog {
}

say Dog.WHAT;     # (Dog)
say Dog.new.WHAT; # (Dog)
```

De haakjes om `(Dog)` zijn Raku's manier om een type te tonen. Dus `Dog` en `Dog.new` delen het type `Dog`; het verschil is dat het ene het type zelf is en het andere een object van dat type.

{% include nav.html %}
