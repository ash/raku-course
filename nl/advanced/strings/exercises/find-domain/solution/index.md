---
title: 'Oplossing: Het domeingedeelte'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $email = 'user@example.com';

my $at = $email.index('@');
say $email.substr($at + 1);
```

🦋 Je kunt de broncode vinden in het bestand [find-domain.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/find-domain.raku).

## Uitvoer

```
example.com
```

## Opmerkingen

1. `index('@')` geeft `4` terug — de vanaf nul getelde positie van het teken `@`.

1. `substr($at + 1)` begint één teken voorbij de `@` en loopt, zonder opgegeven lengte, door tot het einde van de string, wat `example.com` oplevert.

{% include nav.html %}
