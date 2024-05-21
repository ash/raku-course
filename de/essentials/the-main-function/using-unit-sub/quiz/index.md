---
title: Quiz — Verwendung der einheitsspezifischen Definition
---

{% include menu.html %}

## 1

Wählen Sie einen der Deklaratoren, um das Programm korrekt zu machen.

{:.quiz-select}
unit | (: mein, multi, unit :) `sub MAIN(Str $name);`
. | `say "Hallo, $name!";`

## 2

Geben Sie an, ob das Programm korrekt ist.

```raku
unit sub MAIN(Str $name) {
    say "Hallo, $name!";
}
```

{:.quiz-select}
gültig | Dieses Programm ist&nbsp; (: gültig, ungültig :) | Trotz der Anwesenheit von `unit` können Sie immer noch geschweifte Klammern hinzufügen, aber das ist überflüssig.

## 3

Ist dieses Programm korrekt?

```raku
unit multi sub MAIN() {
    say 'Hallo, alle zusammen!';
}

unit multi sub MAIN($name) {
    say "Hallo, $name!";
}
```

{:.quiz-select}
ungültig | Dieses Programm ist&nbsp; (: gültig, ungültig :) | Fehler: `Cannot use 'unit' with individual multi candidates.`

{% include quiz.html %}

{% include nav.html %}