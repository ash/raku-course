---
title: De say routine
---

{% include menu.html %}

De ingebouwde routine `say` voert de volgende acties uit:

1. Roept de `gist` methode aan op zijn argumenten.
1. Voegt een nieuwe regel teken toe.
1. Converteert het resultaat naar UTF-8.
1. Stuurt het naar de `STDOUT` stream.

Vanuit het perspectief van de gebruiker, drukt `say` simpelweg de inhoud van een variabele af naar de terminal en voegt een nieuwe regel toe.

De eerste stap vereist enige uitleg. De `gist` methode is een methode die is gedefinieerd voor elk ingebouwd gegevenstype, zoals gehele getallen of strings. Voor zulke eenvoudige types is het retourresultaat een menselijk leesbare waarde die het item vertegenwoordigt.

```raku
say 42; # 42
say 'Raku'; # Raku
```

Voor complexere gegevens, zoals arrays of hashes, voegt de `gist` methode enige opmaak toe.

```raku
my @data = 'alpha', 'beta', 'gamma';
say @data; # [alpha beta gamma]

my %data = alpha => 1, beta => 2, gamma => 3;
say %data; # {alpha => 1, beta => 2, gamma => 3}
```

De `say` routine kan zowel als functie of als methode worden aangeroepen:

```raku
say 42;
say(42);
42.say;
```

Je kunt meer dan één argument doorgeven aan `say`. De uitvoerstukken worden zonder spaties ertussen samengevoegd.

```raku
say(100, 500); # 100500
```

{% include nav.html %}