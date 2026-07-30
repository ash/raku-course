---
title: Rollen
translations_gpt:
---

{% include menu.html %}

Een _rol_ is een bundel gedrag (en soms gegevens) die door meerdere klassen gedeeld kan worden. Waar overerving zegt dat een klasse een soort van iets anders _is_, beschrijft een rol iets wat een klasse _kan doen_.

Je definieert een rol met het sleutelwoord `role`, vrijwel als een klasse, en je geeft hem aan een klasse met de trait `does`:

```raku
role Greet {
    method hello {
        'Hello from ' ~ self.name;
    }
}

class Person does Greet {
    has $.name;
}
```

De klasse `Person` heeft nu de methode `hello` uit de rol, alsof die in de klasse zelf geschreven was:

```raku
say Person.new(name => 'Anna').hello; # Hello from Anna
```

Een klasse die een rol doet, wordt herkend als hebbende die rol:

```raku
say Person.new(name => 'Anna') ~~ Greet; # True
```

Merk op dat de methode `hello` van de rol `self.name` gebruikt, ook al heeft de rol zelf geen attribuut `name`. Dat is prima: de methode draait als onderdeel van welke klasse de rol ook samenstelt, en die klasse levert `name`. Het volgende onderwerp laat zien dat een klasse meer dan één rol tegelijk kan aannemen.

{% include nav.html %}
