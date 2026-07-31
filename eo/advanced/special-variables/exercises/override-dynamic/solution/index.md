---
title: 'Solvo: Superregi la dinamikan'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub log-it($msg) {
    say "$*prefix: $msg";
}

sub task {
    log-it('working');
}

{
    my $*prefix = 'INFO';
    task();
}

{
    my $*prefix = 'DEBUG';
    task();
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [override-dynamic.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/override-dynamic.raku).

## Eligo

```
INFO: working
DEBUG: working
```

## Komentoj

1. `task` vokas `log-it` sed neniam mencias `$*prefix`. La valoro tamen atingas `log-it`, ĉar dinamika serĉado sekvas la vokan stakon eksteren — preter `task` — al tiu, kiu estas sur la stako en tiu momento.

1. La du blokoj agordas malsamajn valorojn, do la *sama* voko `task()` produktas malsaman prefikson ĉiufoje. Jen kio faras dinamikajn variablojn utilaj: kunteksto fluas en profunde nestitan kodon sen esti pasigita tra ĉiu meza subrutino kiel argumento.

{% include nav.html %}
