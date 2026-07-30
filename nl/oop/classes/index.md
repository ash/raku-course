---
title: Klassen
translations_gpt:
---

{% include menu.html %}

Tot nu toe waren de gegevenstypen die je gebruikt hebt — getallen, strings, arrays enzovoort — allemaal in Raku ingebouwd. Met _objectgeoriënteerd programmeren_ kun je je eigen typen definiëren, _klassen_ genoemd, en waarden van die typen maken, _objecten_ genoemd.

Een klasse wordt gedefinieerd met het sleutelwoord `class`, gevolgd door een naam en een blok:

```raku
class Dog {
}
```

Deze klasse `Dog` is voorlopig leeg, maar het is al een nieuw type. Om een object van de klasse te maken — een _instantie_ — roep je de methode `new` aan op de naam van de klasse:

```raku
class Dog {
}

my $rex = Dog.new;
say $rex; # Dog.new
```

De variabele `$rex` bevat nu een `Dog`-object. Elke aanroep van `new` maakt een apart object:

```raku
my $rex = Dog.new;
my $fido = Dog.new;
```

`$rex` en `$fido` zijn twee verschillende honden, ook al heeft de klasse nog geen inhoud. In de volgende secties geef je een klasse haar eigen gegevens (_attributen_) en haar eigen gedrag (_methoden_). Het eerste onderwerp kijkt nauwkeuriger naar het verschil tussen een klasse en haar instanties.

{% include nav.html %}
