---
title: Subprogrammata reddere
translations_gpt:
---

{% include menu.html %}

Subprogramma etiam subprogramma **reddere** potest. Hoc tibi permittit novas functiones statim aedificare, ad argumenta quae das accommodatas:

```raku
sub adder($n) {
    sub ($x) { $x + $n };
}

my &add5 = adder(5);
say add5(3); # 8
```

`adder(5)` subprogramma anonymum aedificat et reddit quod `5` argumento suo addit. Illud in `&add5` servamus et sicut quodlibet aliud subprogramma vocamus. `adder(10)` vocans alium additorem acciperes qui decem addit.

Animadverte subprogramma redditum valorem `$n` ex vocatione quae illud creavit meminisse — `add5` suum `5` servat etiam postquam `adder` finivit. Subprogramma quod valores ex circumscriptione ubi creatum est capit [_clausura_](/la/paradigms/closures) appellatur, argumentum sectionis sequentis.

Functiones reddere modus compendiosus est familias operationum cognatarum producendi sine te repetendo: una definitio `adder` numerum infinitum additorum certorum dat.

{% include nav.html %}
