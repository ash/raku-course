---
title: 'Oplossing: Tel een kanaal op'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $c = Channel.new;

my $producer = start {
    $c.send($_) for 1..6;
    $c.close;
};

my $consumer = start {
    [+] $c.list;
};

my ($sent, $sum) = await $producer, $consumer;
say $sum;
```

🦋 Je kunt de broncode vinden in het bestand [channel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-sum.raku).

## Uitvoer

```
21
```

## Opmerkingen

1. De promise van de producent verstuurt de zes waarden op de ene thread en sluit het kanaal. De promise van de consument, op een andere thread, gebruikt `.list` om alles tot aan de sluiting te verzamelen en geeft de som terug (`[+]` telt `1 + 2 + … + 6` op).

1. `await $producer, $consumer` wacht op **beide** promises en geeft hun resultaten op volgorde terug. Het resultaat van de producent is hier niet nodig (`$sent`); dat van de consument is de som, `21`. Het kanaal is wat de waarden veilig van de producentthread naar de consumentthread draagt.

{% include nav.html %}
