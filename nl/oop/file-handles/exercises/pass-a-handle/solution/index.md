---
title: 'Oplossing: Geef een handle aan een functie'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub log-line($fh, $message) {
    $fh.say($message);
}

my $fh = open 'log.txt', :w;
log-line($fh, 'started');
log-line($fh, 'working');
log-line($fh, 'done');
$fh.close;

print slurp 'log.txt';
```

🦋 Je kunt de broncode vinden in het bestand [pass-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/pass-a-handle.raku).

## Uitvoer

```
started
working
done
```

## Opmerkingen

1. De handle die `open` teruggeeft is gewoon een waarde in `$fh`, dus hij kan net als elke string of elk getal als argument aan `log-line` meegegeven worden. Binnen de subroutine schrijft `$fh.say` via diezelfde open handle.

1. Omdat de handle over alle drie de aanroepen open blijft, plakt elke `log-line` er nog een regel aan hetzelfde bestand bij. `close` schrijft daarna alles weg, en `slurp` leest de drie regels terug.

1. Dit is wat handles samenstelbaar maakt: een functie kan een handle aannemen en ernaar schrijven (of eruit lezen) zonder zich te bekommeren om welk bestand hij aanwijst — dat beslist de aanroeper wanneer hij het bestand opent.

{% include nav.html %}
