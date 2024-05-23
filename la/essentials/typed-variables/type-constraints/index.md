---
title: Vincula generis
---

{% include menu.html %}

Raku est lingua cum systemate generis gradualis sic dicto. In plerisque casibus, non opus est curare de genere variabilis specificando. In quibusdam autem casibus, genus variabilis restrictum esse velis, et id facere potes genus specificando ut infra monstratur:

```raku
my Int $var = 42;
```

Nunc, possibile est aliam valorem integri adsignare `$var`, sed conatus stringam vel etiam numerum fluitantem ponere exceptione finitur:

```raku
my Int $var = 42;
$var = '314E-2';
```

Hoc programma errorem sequentem emittit:

    Generis verificatio defecit in adsignatione ad $var; expectatum Int sed obtentum Str ("314E-2")
      in block <unit> at t.raku line 2

{% include nav.html %}