---
title: 'Solvo: Konektiĝu al gastiganto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $host = 'example.com';

if try IO::Socket::INET.new(:host($host), :port(80)) -> $conn {
    say "connected to $host";
    $conn.close;
}
else {
    say "could not connect to $host";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [connect-to-host.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/connect-to-host.raku).

## Eligo

```
connected to example.com
```

## Komentoj

1. `IO::Socket::INET.new(:host, :port)` malfermas la konekton tuj kaj ĵetas escepton, se la gastiganto estas neatingebla.

1. Envolvi ĝin en `try` transformas tiun escepton en `Nil` anstataŭ kraŝon. La `if … -> $conn` ligas la kontaktskatolon, kiam la konekto sukcesas, kaj plenumas la branĉon `else`, kiam ne — la fortika maniero provi konekton.

1. Por vidi la branĉon `else` en ago, ŝanĝu `$host` al nomo, kiu ne ekzistas, kiel `'example.comp'`. La DNS-serĉo tiam malsukcesas — sen la `try` vi ricevus eraron kiel `Failed to resolve host name 'example.comp'` — sed ĉi tie la `try` transformas ĝin en `Nil`, do la programo trankvile presas `could not connect to example.comp`.

{% include nav.html %}
