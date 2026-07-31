---
title: 'Solvo: Dinamika variablo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $*user = 'guest';

sub whoami {
    say "running as $*user";
}

whoami();

{
    my $*user = 'admin';
    whoami();
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [a-dynamic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/a-dynamic-variable.raku).

## Eligo

```
running as guest
running as admin
```

## Komentoj

1. La tvigilo `*` faras `$*user` dinamika. `whoami` neniam prenas ĝin kiel parametron — ĝi trovas la valoron per rigardado eksteren tra la voka stako, do la unua voko raportas la defaŭltan `guest`.

1. La interna bloko redeklaras `$*user` kiel `admin` dum la daŭro de tiu bloko. La *sama* `whoami` nun vidas `admin`, ĉar dinamika serĉado sekvas tiun, kiu nuntempe estas sur la stako. Anstataŭigi dinamikan variablon en amplekso estas kiel vi donas pliigitan kuntekston al ĉio, kio estas vokita el ĝi — sen ŝanĝi `whoami` entute.

{% include nav.html %}
