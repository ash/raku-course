---
title: Introspekti objektojn
translations_gpt:
---

{% include menu.html %}

En la [sekcio pri ujoj](/eo/advanced/containers) vi uzis `.^name` por demandi al valoro ĝian tipon. La samaj metavokoj `.^` permesas al vi inspekti klason kaj ĝiajn objektojn: iliajn nomojn, iliajn atributojn, kaj kie ili sidas en hierarkio.

La metametodo `.^name` redonas la nomon de la klaso:

```raku
class Dog {
    has Str $.name;
    method bark { 'Woof' }
}

say Dog.^name; # Dog
```

La metametodo `.^attributes` listigas la atributojn de la klaso. Ĉiu estas montrata kun sia tipo kaj sia interna privata nomo (la formo `$!`, kiun vi renkontis ĉe [privataj atributoj](/eo/oop/methods/private-attributes)):

```raku
say Dog.^attributes; # (Str $!name)
```

Introspekto estas utila por iloj, kiuj laboras kun objektoj ĝenerale — ekzemple, por presi ĉiun atributon de objekto sen scii ĝian klason anticipe. La sekva temo rigardas, kiel vidi la heredan ĉenon de klaso.

{% include nav.html %}
