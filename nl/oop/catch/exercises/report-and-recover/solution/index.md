---
title: 'Oplossing: Melden en herstellen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $timeout = 30;

{
    die 'config missing';
    $timeout = 60;

    CATCH {
        default {
            say "warning: {.message}; keeping default";
        }
    }
}

say "timeout is $timeout seconds";
```

🦋 Je kunt de broncode vinden in het bestand [report-and-recover.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/report-and-recover.raku).

## Uitvoer

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Opmerkingen

1. Wanneer de `die` werpt, wordt de rest van het blok opgegeven — dus de regel `$timeout = 60` draait nooit en houdt `$timeout` zijn standaardwaarde `30`.

1. De `CATCH` handelt de exceptie af (door een waarschuwing af te drukken), dus het programma stopt niet. Het gaat verder met de standaardwaarde, en dat is precies wat *herstellen* van een fout betekent: het probleem noteren, terugvallen op iets veiligs, en doorgaan.

{% include nav.html %}
