---
title: 'Quiz — Grammatiken erstellen'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
grammar Word {
    token TOP { \w+ }
}

say Word.parse('hello world').defined;
```

{:.quiz}
0 | True
1 | False
0 | ｢hello｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`.parse` gelingt nur, wenn die Grammatik die **ganze** Zeichenkette trifft. `\w+` trifft `hello`, dann bleiben aber ein Leerzeichen und `world` übrig, die Eingabe wird also nicht vollständig verbraucht: `.parse` liefert `Nil`, und `.defined` ist `False`.

</div>

{% include nav.html %}
