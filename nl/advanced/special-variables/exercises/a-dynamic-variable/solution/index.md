---
title: 'Solution: Een dynamische variabele'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

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

🦋 Je kunt de broncode vinden in het bestand [a-dynamic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/a-dynamic-variable.raku).

## Uitvoer

```
running as guest
running as admin
```

## Opmerkingen

1. De `*`-twigil maakt `$*user` dynamisch. `whoami` neemt het nooit als parameter — het vindt de waarde door naar buiten te zoeken via de call stack, dus de eerste aanroep rapporteert de standaardwaarde `guest`.

1. Het binnenste blok declareert `$*user` opnieuw als `admin` voor de duur van dat blok. Dezelfde `whoami` ziet nu `admin`, omdat dynamisch opzoeken volgt wie er momenteel op de stack staat. Het overschrijven van een dynamische variabele in een scope is hoe je verhoogde context verleent aan alles wat van daaruit wordt aangeroepen — zonder `whoami` zelf te wijzigen.

{% include nav.html %}
