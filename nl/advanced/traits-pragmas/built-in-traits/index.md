---
title: Ingebouwde traits
translations_gpt:
---

{% include menu.html %}

Een _trait_ wordt toegepast met het sleutelwoord `is`, direct na een declaratie. Hij draait tijdens het compileren en verandert een vaste eigenschap van datgene waaraan hij hangt. Raku levert er veel mee; een paar heb je al gebruikt.

Standaard zijn de parameters van een subroutine **alleen-lezen** — je kunt er binnen de routine niets aan toekennen. De trait `is copy` geeft je een eigen, wijzigbare kopie van het argument, die je kunt veranderen zonder de aanroeper te raken:

```raku
sub greet($name is copy) {
    $name = "dear $name";
    say "Hello, $name!";
}

my $who = 'Anna';
greet($who); # Hello, dear Anna!
say $who;    # Anna — de variabele van de aanroeper blijft ongemoeid
```

De trait `is rw` gaat verder: hij bindt de parameter aan de variabele van de aanroeper, zodat een wijziging binnen de routine ook buiten zichtbaar is:

```raku
sub bump($n is rw) {
    $n++;
}

my $x = 10;
bump($x);
say $x; # 11
```

Zonder een van deze traits zou `$n++` een compilatiefout zijn, omdat de parameter alleen-lezen zou zijn.

Een andere veelgebruikte trait stelt een standaardwaarde in:

```raku
my $port is default(8080);
say $port; # 8080
```

Hier geeft `is default` de variabele een waarde om op terug te vallen. Elke ingebouwde trait — `is rw`, `is copy`, `is default` en meer — hangt één specifiek gedrag tijdens het compileren aan een declaratie. Het volgende onderwerp laat zien dat traits geen gesloten verzameling zijn: [je kunt er zelf een definiëren](/nl/advanced/traits-pragmas/writing-a-trait).

{% include nav.html %}
