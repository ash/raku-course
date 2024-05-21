---
title: Quiz — if, elsif, else
---

{% include menu.html %}

Vervollständigen Sie das folgende Programm. Hier ist eine Passwortüberprüfungsprozedur. Füllen Sie die fehlenden Teile aus. (Betrachten Sie es nur als Übung.)

{:.quiz-code}
. | my $password = prompt &apos;Geben Sie Ihr Passwort ein: &apos;;
if | ␣␣␣␣␣ $password eq &apos;12345&apos; {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Wirklich?&apos;;
. | }
elsif | ␣␣␣␣␣ $password.chars &lt; 3 {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Zu kurz&apos;;
. | }
elsif | ␣␣␣␣␣ $password eq &apos;*&(#&$#Y&apos; {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Korrektes Passwort&apos;;
. | }
else | ␣␣␣␣␣ {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Passwort ist falsch&apos;;
. | }

{% include quiz.html %}

{% include nav.html %}