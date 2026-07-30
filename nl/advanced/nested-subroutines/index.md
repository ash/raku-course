---
title: Geneste subroutines
translations_gpt:
---

{% include menu.html %}

Een subroutine kan _binnen_ een andere subroutine worden gedefinieerd. Een geneste subroutine is een normale subroutine, maar is alleen zichtbaar binnen de subroutine die haar bevat.

```raku
sub outer {
    sub inner {
        say 'I am the inner subroutine';
    }

    inner;
}

outer;
```

Het programma drukt af:

```
I am the inner subroutine
```

Hier wordt `inner` gedeclareerd binnen `outer`, en `outer` roept haar aan. Dit werkt omdat `inner` binnen het bereik van het hele lichaam van `outer` valt.

Buiten `outer` bestaat de naam `inner` echter niet. Het volgende programma kan niet worden gecompileerd:

```raku
sub outer {
    sub inner { 42 }
}

inner; # error: Undeclared routine: inner
```

Nesten is handig wanneer een hulproutine slechts door een enkele subroutine nodig is. Door deze erin te plaatsen wordt duidelijk dat het een privédetail is en wordt voorkomen dat ze per ongeluk van elders wordt aangeroepen.

{% include nav.html %}
