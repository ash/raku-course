---
title: 'Solution: Een our-variabele'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
package Config {
    our $port = 8080;
    my  $secret = 42;
}

say $Config::port;
say $Config::secret.defined;
```

🦋 Je kunt de broncode vinden in het bestand [our-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/our-variable.raku).

## Uitvoer

```
8080
False
```

## Opmerkingen

1. `our $port` wordt onderdeel van de `Config`-naamruimte, dus het is van buitenaf bereikbaar als `$Config::port`, wat `8080` afdrukt.

1. `my $secret` is lexicaal — priv&eacute; voor het pakketblok — dus het zit niet in de naamruimte. Het pad `$Config::secret` vindt niets, een ongedefinieerde waarde, dus `.defined` geeft `False`. Dit is het verschil dat `our` maakt.

{% include nav.html %}
