---
title: Über diesen Kurs
---

{% assign course_title = site.data.toc["de"].title %}

[{{course_title}}](/de/)

# Über diesen Kurs

Willkommen zum Kurs der Programmiersprache Raku!

Dieser Kurs deckt alle Hauptaspekte der Sprache ab, die Sie in Ihrer täglichen Praxis benötigen. Der Kurs besteht aus fünf Teilen, die die Theorie erklären und viele praktische Aufgaben bieten. Es wird davon ausgegangen, dass Sie versuchen, die Aufgaben selbst zu lösen, bevor Sie sich die Lösung ansehen.

Wenn Sie gerade erst anfangen, Raku zu lernen, wird empfohlen, alle Teile in der Reihenfolge durchzugehen, in der sie im Inhaltsverzeichnis aufgeführt sind. Wenn Sie bereits etwas Übung haben und spezifisches Training wünschen, können Sie mit dem gewünschten Abschnitt beginnen.

## Struktur

Der Kurs ist in fünf Teile unterteilt, von denen jeder mehrere Abschnitte umfasst, die wiederum eine Reihe von Themen enthalten (oder, einfach gesagt, verschiedene Seiten mit ihrer eigenen URL).

Der Kurs umfasst Materialien der folgenden vier Typen:

* — Theorie, die das aktuelle Thema abdeckt
* — Quizfragen, die Ihr Verständnis der Theorie des Themas und/oder des Abschnitts testen
* — Übungen für das Material des gesamten Abschnitts
* — Antworten zu den Übungen

Manchmal bieten praktische Aufgaben (sowohl Quizfragen als auch Übungen) zusätzliche Informationen zum Thema, daher wird empfohlen, sie nicht zu überspringen, um das Beste aus dem Kurs herauszuholen.

Unter jeder Seite befindet sich ein Navigationsblock, den Sie verwenden können, um den gesamten Kurs zu durchlaufen. Sie können auch jederzeit über das Breadcrumb-Menü oben auf der Seite zum gewünschten Abschnitt springen.

Während die Navigation Sie in einer bestimmten Reihenfolge durch die Aufgaben führt, können Sie diese mehr oder weniger in zufälliger Reihenfolge innerhalb des aktuellen Abschnitts oder Themas lösen.

## Inhalte

Der Kurs umfasst fünf Teile:

| N | Name | Status
| 1 | [Raku-Grundlagen](/de/essentials) | Veröffentlicht
| 2 | [Fortgeschrittene Raku-Themen](/de/advanced) | In Bearbeitung<span id="ProgressBar">...</span>
| 3 | Objektorientierte Programmierung in Raku | 
| 4 | Regexes und Grammatiken | 
| 5 | Funktionale, parallele und reaktive Programmierung | 

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

Derzeit ist der erste Teil vollständig geschrieben und veröffentlicht. Die anderen Teile sind in Bearbeitung. Beachten Sie, dass sich die URLs der verschiedenen Teile des Kurses in Zukunft leicht ändern können, da der Kurs noch in Entwicklung ist.

Der erste Teil, „Raku-Grundlagen“, enthält:

- 91 Themen
- 73 Quizfragen
- 65 Übungen

Neue Übungen und Quizfragen können in den bereits veröffentlichten Themen erscheinen, ebenso können die theoretischen Teile leicht modifiziert werden, um den besten Fluss des Kurses zu erreichen.

## Voraussetzungen

Um dem Kurs zu folgen und Übungen durchzuführen, benötigen Sie einen funktionierenden Compiler. Es gibt eine Reihe von Optionen:

* — Installieren Sie den Rakudo-Compiler oder das Rakudo Star-Paket oder
* — Verwenden Sie Online-Dienste oder
* — Verwenden Sie Docker-Container

Die verschiedenen Installationsoptionen werden zu Beginn des ersten Teils beschrieben.

## Über den Autor

Der Kurs wurde von [Andrew Shitov](https://andrewshitov.com) geschrieben, der die Entwicklung von Raku seit etwa 2000 verfolgt (als es noch als Perl 6 bekannt war). Er ist Autor einer Reihe von [Büchern über das Programmieren in Raku](https://andrewshitov.com/books). Das Kursmaterial basiert auf täglicher Erfahrung, insbesondere auf Beiträgen zur [The Weekly Challenge](https://perlweeklychallenge.org) und der Überprüfung der Lösungen anderer Teilnehmer sowie auf der Erfahrung, Raku als Hauptsprache für die Website [Covid Observer](https://covid.observer) zu verwenden.

## Beitrag, Nutzungsbedingungen und Feedback

Die Erstellung des Kurses wird durch ein Stipendium der [The Perl Foundation](https://www.perlfoundation.org) unterstützt. Sie können den Kurs für das Selbststudium oder als eine Reihe von gebrauchsfertigen Materialien zum Unterrichten anderer verwenden. Die kommerzielle Nutzung in Klassen ist ohne Genehmigung erlaubt. Die Veröffentlichung des Kurses als separates Produkt muss zuerst mit dem Autor verhandelt werden.

Die Quelldateien sind auf GitHub verfügbar: [github.com/ash/raku-course](https://github.com/ash/raku-course). Zögern Sie nicht, einen Pull-Request einzureichen, um mögliche Fehler oder Tippfehler zu korrigieren, oder erstellen Sie ein Issue auf GitHub, wenn Sie ein breiteres Thema diskutieren möchten. Sie können den Autor auch per [E-Mail](mailto:andy@shitov.ru) kontaktieren.

## Kursnavigation

← [Start](/de/) 
&nbsp;&nbsp;|&nbsp;&nbsp;
[Was ist Raku](/de/essentials/what-is-raku) →

{% include languages.html %}
{% include translations.html %}
