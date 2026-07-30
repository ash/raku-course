---
title: 'Oplossing: Draai een commando'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
run 'echo', 'home:', '$HOME';
```

🦋 Je kunt de broncode vinden in het bestand [run-a-command.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/run-a-command.raku).

## Uitvoer

```
home: $HOME
```

## Opmerkingen

1. `run` start `echo` rechtstreeks en geeft elke string als afzonderlijk argument mee. Zonder `:out` gaat de uitvoer van het programma regelrecht naar het scherm.

1. Het argument bereikt `echo` precies zoals geschreven: `$HOME` wordt letterlijk afgedrukt en niet door je thuismap vervangen, omdat er geen shell bij betrokken is om het te expanderen. Daarom is `run` de veilige standaardkeuze — hetzelfde commando aan `shell` gegeven zou zich heel anders kunnen gedragen.

1. Om de thuismap werkelijk af te drukken, laat je een shell de expansie doen: `shell 'echo home: $HOME'` drukt zoiets af als `home: /home/anna`. (Houd de enkele aanhalingstekens ook aan de Raku-kant — een `"$HOME"` met dubbele aanhalingstekens zou Raku zelf een variabele met de naam `$HOME` laten interpoleren voordat `echo` ook maar draait.)

{% include nav.html %}
