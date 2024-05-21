---
title: 'Viktorīna: Ko atgriež WHAT?'
---

{% include menu.html %}

Izvēlieties pareizo rezultātu, izsaucot `WHAT` metodi.

{:.quiz-select}

(Str) | `'String'.WHAT` atgriež (: (Int), (Rat), (Num), (Str) :)
(Int) | `500.WHAT` atgriež (: (Int), (Rat), (Num), (Str) :)
(Rat) | `3.14.WHAT` atgriež (: (Int), (Rat), (Num), (Str) :) | Divi punkti nedrīkst jūs sajaukt.
(Num) | `pi.WHAT` atgriež (: (Int), (Rat), (Num), (Str) :) | `pi` pēc definīcijas ir `Num`.
(Int) | `(-10).WHAT` atgriež (: (Int), (Rat), (Num), (Str) :)
(Int) | `(+10).WHAT` atgriež (: (Int), (Rat), (Num), (Str) :)
(Rat) | `(-1/2).WHAT` atgriež (: (Int), (Rat), (Num), (Str) :)
(Int) | `('3' + '4').WHAT` atgriež (: (Int), (Rat), (Num), (Str) :) | `'3' + '4'` veic skaitlisku saskaitīšanu, tāpēc rezultāts ir vesels skaitlis.
(Str) | `('3' ~ '4').WHAT` atgriež (: (Int), (Rat), (Num), (Str) :) | Virknes savienošana dod virkni.

{% include quiz.html %}
{% include nav.html %}