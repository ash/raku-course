---
title: Code interpolatie in Raku strings
---

{% include menu.html %}

Het volgende niveau van interpolatie is code interpolatie. Hiermee kunt u eenvoudige (en ook complexe!) code direct in een dubbel-quoted string plaatsen.

De geïnterpoleerde code wordt tussen accolades geplaatst:

```raku
my $a = 10;
my $b = 20;
say "De som van $a en $b is {$a + $b}.";
```

Het programma print:

```console
$ raku t.raku 
De som van 10 en 20 is 30.
```

## Opnieuw variabelen

Een van de toepassingen van deze methode is om te helpen situaties te ontwarren waarin een variabele gevolgd moet worden door een tekst die ten onrechte kan worden begrepen als de voortzetting van de naam van de variabele. Om dit te voorkomen, gebruikt u accolades om de variabele in te sluiten:

```raku
my $hoeveel = 5;
my $wat = 'pak';
say "Er zijn $hoeveel {$wat}ken."; # Er zijn 5 pakken.
```

Zonder accolades zou Raku proberen een niet-bestaande variabele `$watken` te interpoleren.

{% include nav.html %}