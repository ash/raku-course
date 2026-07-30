---
title: 'Oplossing: Twee whenevers'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $deposits    = Supply.from-list(100, 50, 200);
my $withdrawals = Supply.from-list(30, 120);

my $balance = 0;

react {
    whenever $deposits    { $balance += $_ }
    whenever $withdrawals { $balance -= $_ }
}

say $balance;
```

🦋 Je kunt de broncode vinden in het bestand [two-whenevers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/two-whenevers.raku).

## Uitvoer

```
200
```

## Opmerkingen

1. De twee `whenever`-blokken bekijken de twee benoemde supplies en reageren **verschillend**: stortingen worden opgeteld, opnames afgetrokken. Eén react-blok, twee stromen, twee onderscheiden reacties — daar draait het om bij een `whenever` per bron.

1. Het react-blok is pas klaar wanneer beide supplies klaar zijn, dus het saldo staat vast voordat het afgedrukt wordt: `100 + 50 + 200 - 30 - 120` geeft `200`. Omdat optellen en aftrekken commuteren, beïnvloedt de dooreenvlechting van de twee stromen het resultaat niet.

1. Hier leveren beide supplies hun waarden onmiddellijk, de ene stroom na de andere. In het echt komen de gebeurtenissen van een bankrekening over de tijd verspreid binnen — nu een storting, een uur later een opname — en vlechten de twee stromen zich dooreen, zoals in de demo [Twee timers](/nl/paradigms/react-whenever/two-timers). De code blijft precies hetzelfde: het react-blok draait de `whenever`-body die bij elke binnenkomende gebeurtenis past.

{% include nav.html %}
