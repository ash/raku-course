---
title: Apakšprogrammas un metodes
translations_gpt:
---

{% include menu.html %}

Tagad jums ir divi veidi, kā iepakot kādu uzvedību: _apakšprogramma_ un _metode_. Tās izskatās līdzīgi, taču tiek lietotas dažādi.

Apakšprogramma stāv pati par sevi. Jūs to izsaucat pēc nosaukuma un padodat tai visu vajadzīgo kā argumentus:

```raku
sub area-of($radius) {
    π * $radius * $radius;
}

say area-of(2); # 12.566370614359172
```

Metode pieder klasei, un to izsauc uz objekta ar punktu. Tā var izmantot objekta paša datus caur `self` un atribūtu piekļuves metodēm, tāpēc šos datus jums nav jāpadod:

```raku
class Circle {
    has $.radius;

    method area {
        π * $.radius * $.radius;
    }
}

say Circle.new(radius => 2).area; # 12.566370614359172
```

Abas aprēķina to pašu skaitli. Atšķirība ir tur, no kurienes nāk dati: apakšprogramma rādiusu saņem kā argumentu, bet metode to nolasa no objekta, uz kura tā tika izsaukta.

Kā īkšķa likums: izmantojiet apakšprogrammu patstāvīgai darbībai, kas vienkārši pārveido savus argumentus, un metodi tad, kad uzvedība dabiski pieder objektam un strādā ar šī objekta paša stāvokli. Klasei specifiskām, bet vispārīgām rutīnām izmantojiet klases metodes.

{% include nav.html %}
