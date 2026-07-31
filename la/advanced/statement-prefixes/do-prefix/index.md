---
title: do et valor bloci
---

{% include menu.html %}

Copia per se sententia est, non expressio, ergo eam normaliter variabili assignare non potes. Praefixum `do` copiam in expressionem convertit cuius valor est valor **ultimae** sententiae eius:

```raku
my $x = do {
    my $a = 3;
    $a + 4;
};

say $x; # 7
```

Intra copiam variabiles declarare potes, plures sententias currere, et resultatum computare; `do` reddit quidquid copia evaluat. Hoc commodum est cum valor producendus plus quam singulam expressionem requirit.

`do` etiam ante sententias fluxus controllandi operatur, sinens eas quoque valorem reddere:

```raku
my $sign = do given 5 {
    when * > 0 { 'positive' }
    when * < 0 { 'negative' }
    default    { 'zero' }
};

say $sign; # positive
```

Hic `do given` totum `given`/`when` in expressionem convertit quae `positive` producit. Idem operatur cum `do if` et `do for`. Breviter, `do` est quomodo copiam, vel structuram controllandi, in loco qui valorem expectat uteris.

{% include nav.html %}
