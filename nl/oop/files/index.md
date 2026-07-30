---
title: Met bestanden werken
translations_gpt:
---

{% include menu.html %}

De eenvoudigste manier om met een bestand te werken is het in één keer lezen of schrijven.

De routine `spurt` schrijft een string naar een bestand en maakt het bestand aan (of vervangt de inhoud als het al bestaat):

```raku
spurt 'greeting.txt', "Hello, file!\n";
```

De routine `slurp` leest de hele inhoud van een bestand terug in een string:

```raku
my $text = slurp 'greeting.txt';
print $text; # Hello, file!
```

Samen laten `spurt` en `slurp` je met twee korte aanroepen gegevens opslaan en weer inladen. (Hier wordt `print` gebruikt in plaats van `say`, omdat de tekst al op een newline eindigt.)

Deze bewerkingen op hele bestanden zijn ideaal wanneer een bestand klein genoeg is om comfortabel in het geheugen te houden. Voor grotere bestanden, of wanneer je een bestand regel voor regel wilt verwerken, gebruik je een [bestandshandle](/nl/oop/file-handles), behandeld aan het eind van deze sectie. Het volgende onderwerp laat zien hoe je aan een bestand toevoegt in plaats van het te vervangen.

{% include nav.html %}
