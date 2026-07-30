---
title: Methoden toevoegen tijdens het draaien
translations_gpt:
---

{% include menu.html %}

Het MOP is niet alleen voor inspectie — het kan een type ook **veranderen** terwijl het programma draait. De metamethode `.^add_method` voegt een nieuwe methode aan een klasse toe:

```raku
class Empty {
}

Empty.^add_method('greet', method { 'hi' });

say Empty.new.greet; # hi
```

De klasse `Empty` is gedefinieerd zonder ook maar één methode. `Empty.^add_method('greet', …)` hangt er vervolgens een methode met de naam `greet` aan, gegeven als een anonieme `method { … }`. Vanaf dat punt reageert elk `Empty`-object op `.greet`, precies alsof de methode in de klasse geschreven was.

Dit is echte metaprogrammering: het metaobject voor `Empty` krijgt te horen dat het een nieuwe methode moet laten groeien. Hetzelfde protocol ligt onder mogelijkheden die je al gebruikt hebt — conceptueel bouwt de compiler, wanneer je `class`, `role`, `has` of `method` schrijft, jouw type namens jou op via MOP-methoden als `.^add_method` en `.^add_attribute`.

"Conceptueel", omdat dit een model van de taal is, geen belofte over een bepaalde compiler. Het MOP is datgene waarin het objectsysteem *gespecificeerd* is; of een gegeven implementatie werkelijk elke declaratie via die metamethoden leidt — en of je dat kunt waarnemen — is aan die implementatie. Om dezelfde reden is het *zelf aanroepen* van deze metamethoden implementatieafhankelijk: welke een compiler blootstelt, en hoe die zich precies gedragen, kan verschillen, dus code die naar `.^add_method` en verwanten grijpt draait misschien niet op elke Raku hetzelfde.

Methoden toevoegen tijdens het draaien is een krachtig en zelden nodig gereedschap. De meeste programma's grijpen er nooit naar, maar het is wat Raku's objectsysteem open maakt: de regels van klassen zijn zelf in termen van het MOP geschreven, dus je kunt ze uitbreiden. Voor alledaagse code zijn de inspecterende metamethoden uit het vorige onderwerp het deel van het MOP dat je werkelijk zult gebruiken.

{% include nav.html %}
