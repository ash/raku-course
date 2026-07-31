---
title: Modulus Test
translations_gpt:
---

{% include menu.html %}

Instrumenta probandi per `use Test` adfer. Probatio simplicissima est `ok`, quae transit cum condicio eius vera est. Unaquaeque probatio descriptionem optionalem accipit:

```raku
use Test;

ok 1 == 1, 'one equals one';
ok 2 > 1,  'two is greater';

done-testing;
```

Hoc currens imprimit, in forma probationum vulgari quae _TAP_ nominatur:

```
ok 1 - one equals one
ok 2 - two is greater
1..2
```

Unaquaeque probatio transiens ut `ok` cum numero et descriptione nuntiatur; deficiens `not ok` esset. Ultima linea `1..2` est _consilium_, quot probationes cucurrerint declarans. Vocatio `done-testing` in fine illud consilium sponte emittit.

Cum valorem certum exspectas, `is` clarior est quam `ok`, quia in defectu et exspectatum et actualem valorem nuntiat:

```raku
use Test;

is 2 + 2, 4, 'addition works';

done-testing;
```

Hoc imprimit `ok 1 - addition works`. Ut illam relationem in actu videas, da `is` exspectationem falsam:

```raku
use Test;

is 2 + 2, 5, 'addition works';

done-testing;
```

Nunc probatio deficit, et exitus exacte explicat quomodo:

```
not ok 1 - addition works
# Failed test 'addition works'
# at test.raku line 3
# expected: '5'
#      got: '4'
1..1
# You failed 1 test of 1
```

Linea `not ok` defectum notat, et lineae diagnosticae infra ostendunt quid exspectatum sit contra id quod revera advenit — quapropter `is` utilior est quam nuda `ok` cum valor certus refert.

`ok`, `is` et `done-testing` iam sufficiunt ad archivum probationum utile scribendum; argumentum sequens [ceteras comparationes](/la/advanced/testing/comparisons) addit.

{% include nav.html %}
