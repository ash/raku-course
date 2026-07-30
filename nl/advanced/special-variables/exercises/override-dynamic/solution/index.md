---
title: 'Solution: De dynamische overschrijven'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

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

🦋 Je kunt de broncode vinden in het bestand [override-dynamic.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/override-dynamic.raku).

## Uitvoer

```
INFO: working
DEBUG: working
```

## Opmerkingen

1. `task` roept `log-it` aan maar noemt nooit `$*prefix`. De waarde bereikt `log-it` toch, omdat dynamisch opzoeken de call stack naar buiten volgt — voorbij `task` — naar wie er op dat moment op de stack staat.

1. De twee blokken stellen verschillende waarden in, dus dezelfde `task()`-aanroep produceert elke keer een ander prefix. Dit is wat dynamische variabelen nuttig maakt: context stroomt naar diep geneste code zonder als argument door elke tussenliggende routine te worden geleid.

{% include nav.html %}
