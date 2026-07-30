---
title: Spezielle und dynamische Variablen
---

{% include menu.html %}

Raku-Variablennamen können nach dem Sigil ein zweites Zeichen tragen, das _Twigil_ genannt wird. Das Twigil verrät dir etwas darüber, wo die Variable lebt und wie sie gefunden wird — ob sie dynamisch gescoped ist, vom Compiler bereitgestellt wird oder an ein Objekt gebunden ist.

Dieser Abschnitt erklärt Twigils, betrachtet die nützlichste Art genauer — _dynamische_ Variablen, die über den Aufrufstapel statt über den gewöhnlichen lexikalischen Geltungsbereich aufgelöst werden — und gibt einen Überblick über die speziellen Variablen, die Raku für dich vordefiniert.

{% include nav.html %}
