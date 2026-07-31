---
title: 'Solutio: Variabilis our'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius operis.

## Codex

```raku
package Config {
    our $port = 8080;
    my  $secret = 42;
}

say $Config::port;
say $Config::secret.defined;
```

🦋 Codicem fontem in archivo [our-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/our-variable.raku) invenire potes.

## Exitus

```
8080
False
```

## Commentarii

1. `our $port` pars spatii nominum `Config` fit, itaque ab extra ut `$Config::port` attingibilis est, `8080` imprimendo.

1. `my $secret` lexicalis est — privata blocco fasciculi — itaque non in spatio nominum est. Via `$Config::secret` nihil invenit, valorem indefinitum, itaque `.defined` est `False`. Hoc est discrimen quod `our` efficit.

{% include nav.html %}
