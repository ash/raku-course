---
title: Importare
translations_gpt:
---

{% include menu.html %}

Plus quam uno modo modulus in programma adduci potest. Tria enuntiata `use`, `need` et `require` differunt in eo _quando_ modulus oneretur et _quid_ praesto faciat.

## `use`

`use` iam invenisti. Modulum tempore compilationis onerat et nomina eius exportata importat, ita ut directe vocari possint:

```raku
use Greeting;
say hello('Anna'); # Hello, Anna!
```

## `need`

`need` quoque modulum tempore compilationis onerat, sed nomina exportata _non_ importat. Variabiles `our` moduli adhuc per nomen moduli attingis:

```raku
need Greeting;
say $Greeting::version; # 1.0
```

Post `need Greeting`, nudum `hello(...)` non agnosceretur, quia nihil importatum est — sola nomina qualificata, ut `$Greeting::version`, praesto sunt.

## `require`

`require` modulum _tempore exsecutionis_ potius quam tempore compilationis onerat. Hoc utile est cum ante cursum nescis an modulus necessarius futurus sit, exempli gratia cum nomen eius ab introitu utentis decernitur.

Quia oneratio tempore exsecutionis fit, nihil sponte importatur. Symbola quae vis in uncis angularibus post nomen enumerans ea adducis, ita ut directe vocari possint:

```raku
require Greeting <&hello>;
say hello('Anna'); # Hello, Anna!
```

Ad usum cotidianum `use` est quod desideras; `need` et `require` adsunt pro casibus rarioribus.

{% include nav.html %}
