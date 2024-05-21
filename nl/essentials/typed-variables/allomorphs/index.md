---
title: Allomorfen
---

{% include menu.html %}

Overweeg het volgende programma. Kun je, voordat je het uitvoert, aangeven welke invoerwaarden het zouden breken en op welke regel?

```raku
my $input = prompt 'Enter something: ';
my Int $i = $input;
my Str $s = $input;

say $i;
say $s;
```

Er worden hier drie scalairen variabelen aangemaakt. Twee daarvan, `$i` en `$s`, zijn getypeerde variabelen. Dat betekent dat `$i` alleen gehele getallen kan opslaan en `$s` alleen strings.

Het retourtype van `prompt` hangt af van de tekens die we hebben getypt. Als de invoerstring een geheel getal kan vertegenwoordigen, zal het resultaat van het type `IntStr` zijn, wat _zowel_ `Int` als `Str` is, en dus kan worden toegewezen aan zowel een `Int` als een `Str` variabele. Dus, als je bijvoorbeeld `1234` invoert, breekt het programma niet.

```
$ raku allomorphs.raku
Enter something: 1234
1234
1234
```

Het `IntStr` type is een voorbeeld van de zogenaamde _allomorf_ — een gegevenstype dat twee andere typen combineert. Hier zijn nog een paar voorbeelden.

Als je een string invoert die geen geheel getal kan zijn, breekt het programma op het moment dat we `$input` toewijzen aan `$i`:

```
$ raku allomorphs.raku
Enter something: Hello, World!
Type check failed in assignment to $i; expected Int but got Str ("Hello, World!")
  in block <unit> at allomorphs.raku line 2
```

Merk op dat je een foutmelding krijgt, zelfs als de invoerstring naar een getal kan worden gecast, maar geen geheel getal is. Aangezien het niet mogelijk is om een drijvend-komma of een rationeel getal in een geheel getal container op te slaan, zal Raku een uitzondering genereren:

```
$ raku allomorphs.raku
Enter something: 3.14
Type check failed in assignment to $i; expected Int but got RatStr (RatStr.new(3.14, "3....)
  in block <unit> at allomorphs.raku line 2
```

De tweede toewijzing, `$s = $input`, zal nooit breken omdat een string elke invoer kan accepteren.

🦋 Je kunt de broncode van dit programma vinden in het bestand [allomorphs.raku](https://github.com/ash/raku-course/blob/master/essentials/typed-variables/allomorphs/allomorphs.raku).

{% include nav.html %}