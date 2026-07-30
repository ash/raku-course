---
title: 'Oplossing: Een dansende robot'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

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

🦋 Je kunt de broncode vinden in het bestand [dancing-robot.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/dancing-robot.raku).

## Uitvoer

```
beep
beep
spinning around
```

## Opmerkingen

1. Anders dan in de eerdere voorbeelden vervangt `Dancing` geen bestaande methode — hij brengt een gloednieuwe methode `dance` mee waar `Robot` niets van weet.

1. `Robot.new but Dancing` mengt de rol tijdens het draaien in één enkel object, dus `$dancing` kan zowel `speak` (uit de klasse) als `dance` (uit de rol). De kale `$plain` heeft alleen ooit `speak` geleerd.

1. De extra mogelijkheid hoort bij dat ene object, niet bij de klasse `Robot`. `$plain.dance` aanroepen zou een fout zijn, omdat `$plain` de rol nooit gekregen heeft.

{% include nav.html %}
