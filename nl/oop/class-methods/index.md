---
title: Klassemethoden
translations_gpt:
---

{% include menu.html %}

De meeste methoden worden aangeroepen op een object — een instantie van een klasse. Maar een methode kan ook op de klasse zelf aangeroepen worden, dat wil zeggen op het typeobject. Zo'n methode wordt vaak een _klassemethode_ genoemd. Ze is nuttig voor waarden en bewerkingen die bij de klasse als geheel horen in plaats van bij één bepaald object.

Je definieert een klassemethode precies als elke andere methode:

```raku
class Road {
    method speed-limit { 120 }
}
```

en roept haar aan op de naam van de klasse in plaats van op een instantie:

```raku
say Road.speed-limit; # 120
```

Je gebruikte al een klassemethode zonder haar zo te noemen: `new` is een methode die op de klasse wordt aangeroepen om een nieuw object te maken.

Een klassemethode heeft geen toegang tot de attributen van een instantie — er zit geen bepaald object achter — dus ze werkt alleen met informatie die voor elk object van de klasse gelijk is. Wanneer het werk van de gegevens van een specifiek object afhangt, gebruik je een gewone methode die op een instantie wordt aangeroepen; wanneer dat niet zo is, past een klassemethode van nature.

Merk op dat klassemethoden weliswaar geen instantie nodig hebben, maar dat je er nog steeds de gegevens van een object in kunt gebruiken als je wél een object hebt:

```raku
class Road {
    has $.name;
    method speed-limit { 120 }

    method info {
        "The maximum speed on $.name is " ~ self.speed-limit
    }
}

my $R404 = Road.new(name => 'Road 404');
say $R404.info;
```

Dit programma drukt het verwachte resultaat af:

```
The maximum speed on Road 404 is 120
```

Zonder het geïnstantieerde klasseobject zou een aanroep als `say Road.info` een fout opleveren.

{% include nav.html %}
