---
title: Metodoj
translations_gpt:
---

{% include menu.html %}

Atributoj donas al objekto ĝiajn datumojn; _metodoj_ donas al ĝi konduton. Metodo estas subrutino, kiu apartenas al klaso kaj estas vokata sur objekto. Vi deklaras ĝin per la ŝlosilvorto `method`:

```raku
class Dog {
    has $.name;

    method bark {
        return $.name ~ ' says Woof!';
    }
}
```

Voku metodon sur objekto per la punkto, same kiel atingilon:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.bark; # Rex says Woof!
```

Ene de metodo, la objekto, sur kiu la metodo estis vokata, disponeblas kiel `self`. La atributoj estas atingataj tra iliaj atingiloj, skribataj `$.name`, `$.age` kaj tiel plu. Ĉi tiuj ankaŭ funkcias ene de interpolataj ĉenoj:

```raku
class Dog {
    has $.name;

    method greet {
        "Hello, my name is $.name";
    }
}

say Dog.new(name => 'Rex').greet; # Hello, my name is Rex
```

La sekvaj temoj traktas privatajn atributojn (nun kiam ni havas metodojn por uzi ilin), metodojn kiuj prenas parametrojn, kaj metodojn kiuj vokas aliajn metodojn.

{% include nav.html %}
