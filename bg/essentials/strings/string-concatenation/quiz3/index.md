---
title: 'Тест 1: Отново конкатениране на низове'
---

{% include menu.html %}

Кои редове са правилен Raku код за конкатениране на низове?

{:.quiz}
0 | &apos;alpha&apos; + &apos;beta&apos; | Операторът `+` не конкатенира низове.
0 | &apos;alpha&apos; . &apos;beta&apos; | Нито пък операторът `.`.
1 | &apos;alpha&apos; ~ &apos;beta&apos; | Само операторът `~` е за конкатениране на низове.
0 | &apos;alpha&apos; ~~ &apos;beta&apos; | Един тилда е достатъчен. Този ред е синтактично правилен, но не конкатенира низовете.
0 | α ~ β | Низовете трябва да бъдат в кавички.
1 | &apos;α&apos; ~ &apos;β&apos;

{% include quiz.html %}

{% include nav.html %}