---
title: 'Oplossing: Controleer de exitcode'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $proc = run 'sh', '-c', 'exit 4';

say $proc.exitcode;
say $proc ?? 'success' !! 'failure';
```

🦋 Je kunt de broncode vinden in het bestand [check-exit-code.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/check-exit-code.raku).

## Uitvoer

```
4
failure
```

## Opmerkingen

1. `run` geeft een `Proc` terug. Hem in `$proc` bewaren — en er daarna uit lezen — is hier belangrijk: een mislukkend commando waarvan de `Proc` weggegooid wordt zou werpen, maar het resultaat bekijken telt als het afhandelen ervan.

1. `.exitcode` is het getal dat het commando teruggaf: `4`. De `Proc` als boolean testen beantwoordt de eenvoudiger vraag — hij is alleen waar wanneer de exitcode `0` is, dus hier is hij onwaar en drukt het programma `failure` af.

{% include nav.html %}
