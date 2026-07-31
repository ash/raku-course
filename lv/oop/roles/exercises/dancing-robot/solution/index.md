---
title: 'Risinājums: Dejojošs robots'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
role Dancing {
    method dance {
        'spinning around';
    }
}

class Robot {
    method speak {
        'beep';
    }
}

my $plain   = Robot.new;
my $dancing = Robot.new but Dancing;

say $plain.speak;
say $dancing.speak;
say $dancing.dance;
```

🦋 Atrodiet programmu failā [dancing-robot.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/dancing-robot.raku).

## Izvade

```
beep
beep
spinning around
```

## Komentāri

1. Atšķirībā no iepriekšējiem piemēriem `Dancing` neaizstāj esošu metodi — tā atnes pavisam jaunu metodi `dance`, par kuru `Robot` neko nezina.

1. `Robot.new but Dancing` izpildes laikā iemaisa lomu vienā objektā, tāpēc `$dancing` prot gan `speak` (no klases), gan `dance` (no lomas). Vienkāršais `$plain` iemācījās vienīgi `speak`.

1. Papildu spēja pieder šim vienam objektam, nevis klasei `Robot`. Izsaukums `$plain.dance` būtu kļūda, jo `$plain` lomu nekad nesaņēma.

{% include nav.html %}
