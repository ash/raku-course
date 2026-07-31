---
title: 'Risinājums: Pārrakstīt dinamisko'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [override-dynamic.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/override-dynamic.raku).

## Izvade

```
INFO: working
DEBUG: working
```

## Komentāri

1. `task` izsauc `log-it`, taču `$*prefix` nekad nepiemin. Vērtība tomēr sasniedz `log-it`, jo dinamiskā meklēšana seko izsaukumu stekam uz āru — garām `task` — līdz tam, kas tajā brīdī ir stekā.

1. Abi bloki uzstāda dažādas vērtības, tāpēc *viens un tas pats* izsaukums `task()` katrreiz dod citu priedēkli. Tieši tas padara dinamiskos mainīgos noderīgus: konteksts ieplūst dziļi ligzdotā kodā, netiekot izvilkts cauri katrai starprutīnai kā arguments.

{% include nav.html %}
