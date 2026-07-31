---
title: 'Risinājums: Kaste ar izmēru'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [greetable.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/greetable.raku).

## Izvade

```
size is 10
True
```

## Komentāri

1. Loma nodrošina metodi `describe`, un klase to komponē ar `does Sized`. Metode paļaujas uz `self.size`, ko nodrošina klase `Box` — loma un klase saderas kopā, veidojot pilnu objektu.

1. Tā kā `Box` dara lomu, gudrā sakritība `$b ~~ Sized` ir `True`: objekts tiek atpazīts kā tāds, kam ir katra loma, ko tā klase komponē, un tas noder, lai pārbaudītu, ko objekts prot, pirms izsaukt lomas metodi.

{% include nav.html %}
