---
title: Multi MAIN functions
---

{% include menu.html %}

Sicut quaelibet alia functio in Raku, functio `MAIN` potest habere suas variantes `multi`. Hoc permittit programma ut singulariter respondeat ad diversum numerum vel diversos generum parametriorum input.

```raku
multi sub MAIN($a) {
    dic 2 * $a;
}

multi sub MAIN($a, $b) {
    dic $a + $b;
}
```

Hoc programma duplicat suum unicum argumentum vel addit illud ad secundum argumentum si praesens est:

```console
$ raku t.raku 21
42

$ raku t.raku 21 33
54
```

{% include nav.html %}