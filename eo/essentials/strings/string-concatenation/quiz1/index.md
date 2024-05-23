---
title: 'Kviz 1: Kunigi kordojn'
---

{% include menu.html %}

En la subaj operacioj, okazas diversaj kuniĝoj. Kompletigu la mankantajn partojn.

{:.quiz-code}
. | my $unua-nomo = &apos;Edgar&apos;;
. | my $meza-nomo = &apos;Allan&apos;;
= | my $familia-nomo ␣ &apos;Poe&apos;;
~ ~ | my $nomo = $unua-nomo ␣ &apos; &apos; ␣ $familia-nomo;
- ~ ~ - ~ ~ - | my $plena-nomo = $unua␣nomo ␣ &apos; &apos; ␣ $meza␣nomo ␣ &apos; &apos; ␣ $familia␣nomo;
. | say $plena-nomo;
~ ~ | say $unua-nomo ␣ &apos; &apos; ␣ $familia-nomo;
~ | say &apos;E. &apos; ␣ $familia-nomo;

{% include quiz.html %}

{% include nav.html %}