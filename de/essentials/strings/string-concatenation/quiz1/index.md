---
title: 'Quiz 1: Zeichenketten verketten'
---

{% include menu.html %}

Bei den folgenden Operationen finden verschiedene Verkettungen statt. Vervollständigen Sie die fehlenden Teile.

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