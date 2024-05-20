---
title: 'Тест 3: Снова конкатенация строк'
---

{% include menu.html %}

Какие варианты являются правильным кодом Raku для конкатенации строк?

{:.quiz}
0 | &apos;alpha&apos; + &apos;beta&apos; | `+` не конкатенирует строки.
0 | &apos;alpha&apos; . &apos;beta&apos; | Как и `.`.
1 | &apos;alpha&apos; ~ &apos;beta&apos; | Только `~` является оператором конкатенации строк.
0 | &apos;alpha&apos; ~~ &apos;beta&apos; | Достаточно одной тильды. Эта строчка синтаксически правильная, но она не производит конкатенацию строк.
0 | α ~ β | Строки должны быть в кавычках.
1 | &apos;α&apos; ~ &apos;β&apos;

{% include quiz.html %}

{% include nav.html %}
