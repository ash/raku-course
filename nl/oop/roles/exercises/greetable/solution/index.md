---
title: 'Oplossing: Een doos met een maat'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
role Sized {
    method describe {
        'size is ' ~ self.size;
    }
}

class Box does Sized {
    has $.size;
}

my $b = Box.new(size => 10);
say $b.describe;
say $b ~~ Sized;
```

🦋 Je kunt de broncode vinden in het bestand [greetable.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/greetable.raku).

## Uitvoer

```
size is 10
True
```

## Opmerkingen

1. De rol levert de methode `describe`, en de klasse stelt hem samen met `does Sized`. De methode steunt op `self.size`, dat door de klasse `Box` geleverd wordt — de rol en de klasse passen in elkaar tot het volledige object.

1. Omdat `Box` de rol doet, is de smartmatch `$b ~~ Sized` `True`: een object wordt herkend als hebbende elke rol die zijn klasse samenstelt, wat handig is om te controleren wat een object kan voordat je een methode van een rol aanroept.

{% include nav.html %}
