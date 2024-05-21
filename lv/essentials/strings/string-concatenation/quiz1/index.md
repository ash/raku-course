---
title: '1. viktorīna: Virkņu savienošana'
---

{% include menu.html %}

Zemākajās operācijās notiek dažādas virkņu savienošanas. Aizpildiet trūkstošās daļas.

{:.quiz-code}
. | my $first-name = &apos;Edgar&apos;;
. | my $middle-name = &apos;Allan&apos;;
= | my $last-name ␣ &apos;Poe&apos;;
~ ~ | my $name = $first-name ␣ &apos; &apos; ␣ $last-name;
- ~ ~ - ~ ~ - | my $full-name = $first␣name ␣ &apos; &apos; ␣ $middle␣name ␣ &apos; &apos; ␣ $last␣name;
. | say $full-name;
~ ~ | say $first-name ␣ &apos; &apos; ␣ $last-name;
~ | say &apos;E. &apos; ␣ $last-name;

{% include quiz.html %}

{% include nav.html %}