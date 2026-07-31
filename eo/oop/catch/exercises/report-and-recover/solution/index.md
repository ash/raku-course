---
title: 'Solvo: Raportu kaj resaniĝu'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $timeout = 30;

{
    die 'config missing';
    $timeout = 60;

    CATCH {
        default {
            say "warning: {.message}; keeping default";
        }
    }
}

say "timeout is $timeout seconds";
```

🦋 Vi povas trovi la fontkodon en la dosiero [report-and-recover.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/report-and-recover.raku).

## Eligo

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Komentoj

1. Kiam la `die` ĵetas, la resto de la bloko estas forlasata — do la linio `$timeout = 60` neniam ruliĝas, kaj `$timeout` konservas sian defaŭlton de `30`.

1. La `CATCH` traktas la escepton (presante averton), do la programo ne haltas. Ĝi daŭras kun la defaŭlta valoro, kio estas ĝuste tio, kion *resaniĝi* de eraro signifas: noti la problemon, retiriĝi al io sekura, kaj daŭrigi.

{% include nav.html %}
