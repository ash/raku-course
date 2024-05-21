---
title: 'Quiz 1: Concatenating strings again'
---

{% include menu.html %}

Які рядки є правильним кодом Raku для конкатенації рядків?

{:.quiz}
0 | &apos;alpha&apos; + &apos;beta&apos; | Оператор `+` не конкатенує рядки.
0 | &apos;alpha&apos; . &apos;beta&apos; | Оператор `.` також не конкатенує рядки.
1 | &apos;alpha&apos; ~ &apos;beta&apos; | Тільки оператор `~` є оператором конкатенації рядків.
0 | &apos;alpha&apos; ~~ &apos;beta&apos; | Однієї тильди достатньо. Цей рядок синтаксично правильний, але він не конкатенує рядки.
0 | α ~ β | Рядки повинні бути в лапках.
1 | &apos;α&apos; ~ &apos;β&apos;

{% include quiz.html %}

{% include nav.html %}