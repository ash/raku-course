---
title: Kvizo — if, elsif, else
---

{% include menu.html %}

Kompletigu la sekvan programon. Jen estas pasvorta kontrolproceduro. Plenigu la mankantajn partojn. (Konsideru ĝin nur kiel ekzercon.)

{:.quiz-code}
. | my $password = prompt &apos;Enigu vian pasvorton: &apos;;
if | ␣␣␣␣␣ $password eq &apos;12345&apos; {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Ĉu vere?&apos;;
. | }
elsif | ␣␣␣␣␣ $password.chars &lt; 3 {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Tro mallonga&apos;;
. | }
elsif | ␣␣␣␣␣ $password eq &apos;*&(#&$#Y&apos; {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Ĝusta pasvorto&apos;;
. | }
else | ␣␣␣␣␣ {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Pasvorto estas malĝusta&apos;;
. | }

{% include quiz.html %}

{% include nav.html %}