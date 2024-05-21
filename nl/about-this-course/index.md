---
title: Over deze cursus
---

{% assign course_title = site.data.toc["nl"].title %}

[{{course_title}}](/nl/)

# Over deze cursus

Welkom bij de cursus van de Raku programmeertaal!

Deze cursus behandelt alle belangrijke aspecten van de taal die je nodig hebt in je dagelijkse praktijk. De cursus bestaat uit vijf delen die de theorie uitleggen en veel praktische opdrachten bieden. Het is de bedoeling dat je probeert de taken zelf op te lossen voordat je naar de oplossing kijkt.

Als je net begint met het leren van Raku, wordt je geadviseerd om alle delen in de volgorde te doorlopen zoals ze in de inhoudsopgave staan vermeld. Als je al wat ervaring hebt en specifieke training wilt, kun je beginnen met het gewenste gedeelte.

## Structuur

De cursus is verdeeld in vijf delen, elk met verschillende secties, die op hun beurt een aantal onderwerpen bevatten (of, simpel gezegd, verschillende pagina's met hun unieke URL).

De cursus bevat materialen van de volgende vier typen:

* — Theorie die het huidige onderwerp behandelt
* — Quizzen die je begrip van de theorie van het onderwerp en/of de sectie testen
* — Oefeningen voor het materiaal van de hele sectie
* — Antwoorden op de oefeningen

Soms geven praktische opdrachten (zowel quizzen als oefeningen) aanvullende informatie over het onderwerp, dus om het meeste uit de cursus te halen, wordt aanbevolen deze niet over te slaan.

Onder elke pagina bevindt zich een navigatieblok dat je kunt gebruiken om door de hele cursus te navigeren. Je kunt ook altijd naar de gewenste sectie springen met behulp van het broodkruimelmenu bovenaan de pagina.

Hoewel de navigatie je door de opdrachten in een bepaalde volgorde leidt, kun je ze min of meer in willekeurige volgorde binnen de huidige sectie of het onderwerp oplossen.

## Inhoud

De cursus bestaat uit vijf delen:

| N | Naam | Status
| 1 | [Raku essentials](/nl/essentials) | Gepubliceerd
| 2 | [Advanced Raku subjects](/nl/advanced) | In progress<span id="ProgressBar">...</span>
| 3 | Object-georiënteerd programmeren in Raku | 
| 4 | Regexes en grammatica's | 
| 5 | Functioneel, gelijktijdig en reactief programmeren | 

<script>
    let ProgressBar = document.getElementById('ProgressBar');
    let current_progress = 0;
    setInterval(function() {
        current_progress++;
        current_progress %= 6;

        let bar = '';
        for (let c = 0; c < current_progress; c++) {
            bar += ',';
        }
        bar += '...';
        for (let c = current_progress; c < 6; c++) {
            bar += ',';
        }
        
        bar = bar.substr(3, 3);
        bar = bar.replace(/,/g, '<span style="color: lightgray">.</span>');
        ProgressBar.innerHTML = bar;
    }, 200);
</script>

Op dit moment is het eerste deel volledig geschreven en gepubliceerd. De andere delen zijn in ontwikkeling. Merk op dat aangezien de cursus nog in ontwikkeling is, de URL's van de verschillende delen in de toekomst enigszins kunnen veranderen.

Het eerste deel, 'Raku essentials', bevat:

- 91 onderwerpen
- 73 quizzen
- 65 oefeningen

Nieuwe oefeningen en quizzen kunnen verschijnen in de reeds gepubliceerde onderwerpen, en de theoretische delen kunnen enigszins worden aangepast om de beste doorstroming van de cursus te bereiken.

## Vereisten

Om de cursus te volgen en oefeningen uit te voeren, heb je een werkende compiler nodig. Er zijn een aantal opties:

* — Installeer de Rakudo compiler of het Rakudo Star pakket of
* — Gebruik online diensten of
* — Gebruik docker containers

De verschillende installatieopties worden beschreven aan het begin van het eerste deel.

## Over de auteur

De cursus is geschreven door [Andrew Shitov](https://andrewshitov.com), die de ontwikkeling van Raku volgt sinds ongeveer 2000 (toen het bekend stond als Perl 6). Hij is de auteur van een aantal [boeken over programmeren in Raku](https://andrewshitov.com/books). Het cursusmateriaal is gebaseerd op dagelijkse ervaring, met name op bijdragen aan [The Weekly Challenge](https://perlweeklychallenge.org) en het beoordelen van de oplossingen van andere deelnemers, evenals op de ervaring die is opgedaan met het gebruik van Raku als de hoofdtaal voor de [Covid Observer](https://covid.observer) website.

## Bijdragen, gebruiksvoorwaarden en feedback

De creatie van de cursus wordt ondersteund door de subsidie van [The Perl Foundation](https://www.perlfoundation.org). Je kunt de cursus gebruiken voor zelfstudie of als een set kant-en-klare materialen om anderen les te geven. Commercieel gebruik in lessen is toegestaan zonder toestemming. Het uitbrengen van de cursus als een apart product moet eerst worden overlegd met de auteur.

De bronbestanden zijn beschikbaar op GitHub: [github.com/ash/raku-course](https://github.com/ash/raku-course). Voel je vrij om een pull request in te dienen om mogelijke fouten of typefouten te corrigeren of een issue aan te maken op GitHub als je een breder onderwerp wilt bespreken. Je kunt ook contact opnemen met de auteur via [e-mail](mailto:andy@shitov.ru).

## Cursusnavigatie

← [Start](/nl/) 
&nbsp;&nbsp;|&nbsp;&nbsp;
[Wat is Raku](/nl/essentials/what-is-raku) →

{% include languages.html %}
{% include translations.html %}
