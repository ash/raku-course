---
title: 'Solution: Una variabile our'
translations_gpt: true
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

```raku
package Config {
    our $port = 8080;
    my  $secret = 42;
}

say $Config::port;
say $Config::secret.defined;
```

🦋 Puoi trovare il codice sorgente nel file [our-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/our-variable.raku).

## Output

```
8080
False
```

## Commenti

1. `our $port` diventa parte del namespace `Config`, quindi è raggiungibile dall'esterno come `$Config::port`, stampando `8080`.

1. `my $secret` è lessicale — privata al blocco del package — quindi non fa parte del namespace. Il percorso `$Config::secret` non trova nulla, un valore indefinito, quindi `.defined` restituisce `False`. Questa è la differenza che fa `our`.

{% include nav.html %}
