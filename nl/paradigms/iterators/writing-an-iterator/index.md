---
title: Een iterator schrijven
translations_gpt:
---

{% include menu.html %}

Een iterator is eenvoudigweg een object dat de ingebouwde rol `Iterator` doet en een methode `pull-one` levert. Die methode geeft de volgende waarde terug, of `IterationEnd` wanneer er niets meer over is. Hier is een afteliterator die een getal oplevert en naar nul toe stapt:

```raku
class Countdown does Iterator {
    has Int $.n is rw;

    method pull-one {
        return IterationEnd if $!n <= 0;
        return $!n--;
    }
}
```

Elke aanroep van `pull-one` controleert eerst of de telling op is; zo niet, dan geeft ze het huidige getal terug en verlaagt ze het. De postfix-decrementatie `$!n--` geeft de waarde terug *voordat* er afgetrokken wordt, dus komen de getallen er als `3, 2, 1` uit. Hem met de hand aandrijven ziet er net zo uit als bij elke andere iterator:

```raku
my $c = Countdown.new(n => 3);
say $c.pull-one; # 3
say $c.pull-one; # 2
say $c.pull-one; # 1
say $c.pull-one =:= IterationEnd; # True
```

Een iterator op zichzelf is niet iets wat een `for`-lus rechtstreeks kan aannemen — een lus verwacht iets *iterabels*. Wikkel de iterator in een `Seq` en hij wordt luspaar:

```raku
for Seq.new(Countdown.new(n => 3)) -> $x {
    say $x;
}
```

Dat drukt `3`, `2`, `1` af. In alledaagse code zou je in plaats daarvan naar `gather` / `take` grijpen — de [generator](/nl/paradigms/generators)vorm is voor hetzelfde resultaat veel korter. De rol `Iterator` rechtstreeks schrijven is het één keer waard om te zien, omdat het blootlegt waar `gather`, `map` en elke `for`-lus op gebouwd zijn: een object dat één enkele vraag beantwoordt — "wat is de volgende waarde?"

{% include nav.html %}
