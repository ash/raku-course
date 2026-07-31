---
title: 'Solvo: Variablo per our'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
package Config {
    our $port = 8080;
    my  $secret = 42;
}

say $Config::port;
say $Config::secret.defined;
```

🦋 Vi povas trovi la fontkodon en la dosiero [our-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/our-variable.raku).

## Eligo

```
8080
False
```

## Komentoj

1. `our $port` fariĝas parto de la nomspaco `Config`, do ĝi estas atingebla de ekstere kiel `$Config::port`, presante `8080`.

1. `my $secret` estas leksika — privata al la paka bloko — do ĝi ne estas en la nomspaco. La vojo `$Config::secret` trovas nenion, nedifinitan valoron, do `.defined` estas `False`. Jen la diferenco, kiun faras `our`.

{% include nav.html %}
