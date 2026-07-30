---
title: Prototokens und Alternation
translations_gpt:
---

{% include menu.html %}

Manchmal hat ein Begriff mehrere Formen — eine Zahl kann eine ganze Zahl oder eine Dezimalzahl sein. Sie könnten eine Alternation mit `|` schreiben, doch Grammatiken bieten einen ordentlicheren Weg: ein _Prototoken_ mit benannten Spielarten.

Deklarieren Sie das übergeordnete Token als `proto token` und schreiben Sie dann jede Spielart als `token name:sym<label>`:

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<int>   { \d+ }
    token number:sym<float> { \d+ '.' \d+ }
}

say Number.parse('42').defined;   # True
say Number.parse('3.14').defined; # True
```

Die Zeile `proto token number {*}` sagt: „ein `number` ist eine der Spielarten unten“. Jede Spielart trägt ein Etikett `:sym<…>`, das sie benennt. Braucht die Grammatik ein `<number>`, probiert sie die Spielarten und wählt per longest-token matching diejenige, die passt — `int` für `42`, `float` für `3.14`.

Prototokens lesen sich besser als eine lange Kette von `|`-Alternativen, und die Etiketten `:sym<…>` geben jedem Fall einen Namen, auf den Sie später eingehen können, wenn Sie der Zerlegung Bedeutung geben. Sie sind die idiomatische Art, „eine dieser Arten“ in einer Grammatik auszudrücken.

{% include nav.html %}
