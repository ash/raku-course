---
title: Het matchobject
translations_gpt:
---

{% include menu.html %}

Wanneer een regex matcht, geeft de smartmatch een _matchobject_ terug. Datzelfde object wordt ook automatisch bewaard in de bijzondere variabele `$/`, die soms "de matchvariabele" genoemd wordt.

Het matchobject is veel meer dan een ja-of-nee-antwoord. Als string is het de tekst die matchte — via de methode `.Str` of via het voorvoegsel `~`, de operator voor stringcoercie, die precies hetzelfde doet:

```raku
my $m = 'concatenate' ~~ /cat/;
say $m.Str; # cat
say ~$m;    # cat
```

Het weet ook **waar** in de string de match gevonden is. De methode `.from` geeft de positie waar hij begint, en `.to` de positie net na het einde:

```raku
my $m = 'room 7 left' ~~ /\d/;
say $m.Str;  # 7
say $m.from; # 5
say $m.to;   # 6
```

Posities worden vanaf nul geteld, dus het cijfer `7` staat op index `5`.

Wanneer de regex **niet** matcht, is het resultaat helemaal geen matchobject — het is de bijzondere waarde `Nil`. `Nil` aan een scalair toekennen laat die ongedefinieerd:

```raku
my $m = 'abc' ~~ /z/;
say $m.defined; # False
```

Je kunt dus altijd `.defined` controleren (of de waarde gewoon in een booleaanse context gebruiken) voordat je de gematchte tekst leest.

{% include nav.html %}
