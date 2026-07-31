---
title: Fermaĵoj
translations_gpt:
---

{% include menu.html %}

_Fermaĵo_ estas subprogramo, kiu kaptas variablojn el la amplekso, en kiu ĝi estis difinita, kaj tenas ilin vivaj eĉ post kiam tiu amplekso finiĝis. Tio donas al la subprogramo sian propran privatan, daŭran staton.

La klasika ekzemplo estas nombrilo:

```raku
sub make-counter {
    my $n = 0;
    return sub { ++$n };
}

my &count = make-counter;
say count(); # 1
say count(); # 2
say count(); # 3
```

La variablo `$n` estas deklarita ene de `make-counter`. La redonita subprogramo referencas `$n`, do ĝi fermiĝas super ĝi: ĉiu voko de `count` inkrementas kaj redonas la **saman** `$n`, kvankam `make-counter` mem finiĝis antaŭ longe.

Ĉiu voko de `make-counter` kreas freŝan `$n`, do apartaj nombriloj estas sendependaj:

```raku
my &a = make-counter;
my &b = make-counter;
say a(); # 1
say a(); # 2
say b(); # 1
```

Fermaĵoj permesas al funkcio porti staton sen tutmonda variablo kaj sen objekto. Ili estas la funkci-programada maniero memori ion inter vokoj.

{% include nav.html %}
