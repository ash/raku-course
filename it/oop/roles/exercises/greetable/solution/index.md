---
title: 'Soluzione: Una scatola con una misura'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [greetable.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/greetable.raku).

## Output

```
size is 10
True
```

## Commenti

1. Il ruolo fornisce il metodo `describe`, e la classe lo compone con `does Sized`. Il metodo si appoggia a `self.size`, che è fornito dalla classe `Box`: il ruolo e la classe si incastrano per formare l'oggetto completo.

1. Poiché `Box` assume il ruolo, lo smartmatch `$b ~~ Sized` è `True`: un oggetto viene riconosciuto come portatore di ogni ruolo che la sua classe compone, il che è utile per controllare che cosa sa fare un oggetto prima di chiamare un metodo del ruolo.

{% include nav.html %}
