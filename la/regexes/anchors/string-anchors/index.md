---
title: Initium et finis catenae
translations_gpt:
---

{% include menu.html %}

Duae ancorae fines catenae notant:

* `^` in ipso **initio** catenae congruit
* `$` in ipso **fine**

Utere `^` ut postules congruentiam ab initio incipere:

```raku
say so 'http://example' ~~ /^ http /; # True
say so 'see http://x'   ~~ /^ http /; # False
```

Secunda catena `http` continet, sed non in principio, itaque exemplar ancoratum deficit.

`^` et `$` circa exemplar ponens illud **totam** catenam congruere cogis, nullo utrimque relicto:

```raku
say so 'hello'       ~~ /^ hello $/; # True
say so 'hello world' ~~ /^ hello $/; # False
```

Hoc est idioma frequentissimum ad probandum — «estne haec catena exacte numerus?», exempli gratia:

```raku
say so '2025' ~~ /^ \d+ $/; # True
say so '20a5' ~~ /^ \d+ $/; # False
```

## Ancorae linearum

Cum catena plures lineas habet, socii `^^` et `$$` in initio et fine **uniuscuiusque lineae** congruunt potius quam totius catenae. Differentia a `^` et `$` apparet simul ac textus quem vis in prima linea non est: ancorae simplices solam totam catenam vident et deficiunt, dum duplicatae in qualibet linea congruunt.

```raku
say so "cat\ndog" ~~ /^  dog  $/;  # False
say so "cat\ndog" ~~ /^^ dog $$/;  # True
```

Hic `\n` secundam lineam incipit. `^^` postulat `dog` in initio lineae sedere et `$$` in fine unius; utrumque in secunda linea valet, itaque ancorae duplicatae succedunt ubi simplices non possunt.

{% include nav.html %}
