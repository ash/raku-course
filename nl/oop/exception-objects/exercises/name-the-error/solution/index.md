---
title: 'Oplossing: Noem de fout'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub risky {
    die 'sub failed';
}

{
    risky();

    CATCH {
        default {
            say .^name;
            say .message;
        }
    }
}
```

🦋 Je kunt de broncode vinden in het bestand [name-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/name-the-error.raku).

## Uitvoer

```
X::AdHoc
sub failed
```

## Opmerkingen

1. De `die` gebeurt binnen `risky`, maar de exceptie reist omhoog naar de aanroeper. De `CATCH` in het blok dat `risky` aanriep handelt hem af, en zo werkt foutafhandeling normaal gesproken: de mislukking en haar afhandelaar hoeven niet in dezelfde routine te zitten.

1. Een kale `die` met een string maakt een `X::AdHoc`-exceptie, wat `.^name` meldt, en `.message` geeft de tekst terug die aan `die` is meegegeven.

{% include nav.html %}
