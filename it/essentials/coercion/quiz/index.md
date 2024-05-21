---
title: 'Quiz: Qual è il suo tipo?'
---

{% include menu.html %}

Seleziona il tipo corretto per ciascuno dei letterali elencati.

{:.quiz-select}
Str | `"Hello, World!"` è (: Int, Rat, Num, Str :)
Str | `'Hello, World!'` è (: Int, Rat, Num, Str :)
Int | `12345` è (: Int, Rat, Num, Str :)
Str | `'12345'` è (: Int, Rat, Num, Str :)
Rat | `123.45` è (: Int, Rat, Num, Str :) | Questo è un numero razionale in Raku, non un numero a virgola mobile.
Rat | `500.000` è (: Int, Rat, Num, Str :) | Anche se il numero non ha una parte decimale effettiva, il suo tipo non è `Int`.
Int | `500_000` è (: Int, Rat, Num, Str :) | `_` è un separatore di migliaia per una lettura più facile da parte di un essere umano.
Str | `'3.14e2'` è (: Int, Rat, Num, Str :) | Questa è una sequenza di caratteri quotata, quindi è una stringa.
Rat | `3.14` è (: Int, Rat, Num, Str :)
Num | `3.14e0` è (: Int, Rat, Num, Str :)

{% include quiz.html %}
{% include nav.html %}