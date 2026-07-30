---
title: 'Solution: Eine our-Variable'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
package Config {
    our $port = 8080;
    my  $secret = 42;
}

say $Config::port;
say $Config::secret.defined;
```

🦋 Du findest den Quellcode in der Datei [our-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/our-variable.raku).

## Ausgabe

```
8080
False
```

## Kommentare

1. `our $port` wird Teil des `Config`-Namensraums und ist daher von außen als `$Config::port` erreichbar, was `8080` ausgibt.

1. `my $secret` ist lexikalisch — privat für den Package-Block — und gehört daher nicht zum Namensraum. Der Pfad `$Config::secret` findet nichts, einen undefinierten Wert, sodass `.defined` `False` ergibt. Das ist der Unterschied, den `our` ausmacht.

{% include nav.html %}
