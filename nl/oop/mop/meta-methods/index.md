---
title: Metamethoden
translations_gpt:
---

{% include menu.html %}

Een _metamethode_ wordt met `.^` in plaats van `.` aangeroepen. De gewone `.method` draait een methode van het object; de `.^method` roept een methode aan op het **metaobject** van het object — hij vraagt iets óver het type in plaats van als het type op te treden.

Je bent `.^name` tegengekomen, die de naam van het type teruggeeft:

```raku
say 42.^name; # Int
```

Andere metamethoden inspecteren de structuur van een type. `.^attributes` somt de attributen op, en `.^find_method` vertelt je of een methode bestaat:

```raku
class Animal {
    has $.name;
    method speak { 'generic' }
}

say Animal.^attributes.elems;          # 1
say so Animal.^find_method('speak');   # True
say so Animal.^find_method('fly');     # False
```

`.^mro` geeft de _method resolution order_ terug — de keten van typen die Raku in volgorde doorzoekt bij het opzoeken van een methode. Het is de overervingslijn van een klasse:

```raku
class A {}
class B is A {}

say B.^mro.map(*.^name); # (B A Any Mu)
```

`B` erft van `A`, en elk type uiteindelijk van `Any` en `Mu`, dus een methodeaanroep op een `B` wordt precies langs dat pad gezocht. Deze metamethoden maken van de structuur van je typen gegevens die je tijdens het draaien kunt bevragen.

{% include nav.html %}
