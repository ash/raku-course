---
title: Viktorīna — Tipa ierobežojumi
---

{% include menu.html %}

Padariet mainīgos zemāk esošajā programmā tipa ierobežotus. Izvēlieties visšaurāko tipu, kas nepieciešams, lai saglabātu vērtību;

{:.quiz-code}
Int | my ␣␣␣ $a = 500;
Int | my ␣␣␣ $b = 304839573985398539853535353; | Garie skaitļi tiek atbalstīti pēc noklusējuma.
Rat | my ␣␣␣ $c = 3.5; | Tas ir `Rat`. Ņemiet vērā, ka `Num` vērtības tiek rakstītas zinātniskajā notācijā.
Rat | my ␣␣␣ $d = 17/19; | Tas arī ir `Rat`, nevis dalīšana.
Rat | my ␣␣␣ $e = <2/5>; | Šī ir viena no iespējamām `Rat` notācijām.
Num | my ␣␣␣ $f = pi; | Iebūvētā π vērtība ir `Num` vērtība.
Num | my ␣␣␣ $g = 3e-4;
Str | my ␣␣␣ $h = &apos;18&apos;;

{% include quiz.html %}

{% include nav.html %}