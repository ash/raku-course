---
title: La modulo Test
---

{% include menu.html %}

Importu la testadajn ilojn per `use Test`. La plej baza kontrolo estas `ok`, kiu sukcesas kiam ĝia kondiĉo estas vera. Ĉiu kontrolo akceptas nedevigan priskribon:

```raku
use Test;

ok 1 == 1, 'one equals one';
ok 2 > 1,  'two is greater';

done-testing;
```

Ruli tion presas, en la normiga testformato konata kiel _TAP_:

```
ok 1 - one equals one
ok 2 - two is greater
1..2
```

Ĉiu sukcesinta kontrolo estas raportita kiel `ok` kun sia numero kaj priskribo; malsukcesinta estus `not ok`. La fina `1..2` estas la _plano_, indikanta kiom da testoj ruliĝis. La alvoko `done-testing` ĉe la fino aŭtomate eligas tiun planon.

Kiam vi atendas specifan valoron, `is` estas pli klara ol `ok`, ĉar ĝi raportas kaj la atendatan kaj la realan valoron ĉe malsukceso:

```raku
use Test;

is 2 + 2, 4, 'addition works';

done-testing;
```

Tio presas `ok 1 - addition works`. Por vidi tiun raportadon en ago, donu al `is` malĝustan atendon:

```raku
use Test;

is 2 + 2, 5, 'addition works';

done-testing;
```

Nun la kontrolo malsukcesas, kaj la eligo klarigas precize kiel:

```
not ok 1 - addition works
# Failed test 'addition works'
# at test.raku line 3
# expected: '5'
#      got: '4'
1..1
# You failed 1 test of 1
```

La linio `not ok` markas la malsukceson, kaj la diagnozaj linioj sub ĝi montras kio estis atendata kontraŭ kio efektive aperis — tial `is` estas pli helpema ol nuda `ok` kiam specifa valoro gravas.

`ok`, `is`, kaj `done-testing` jam sufiĉas por skribi utilan testodosieron; la sekva temo aldonas [la aliajn komparojn](/eo/advanced/testing/comparisons).

{% include nav.html %}
