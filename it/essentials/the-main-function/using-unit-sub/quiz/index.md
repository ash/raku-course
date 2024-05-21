---
title: Quiz — Using the unit-scoped definition
---

{% include menu.html %}

## 1

Scegli uno dei dichiaratori per rendere il programma corretto.

{:.quiz-select}
unit | (: my, multi, unit :) `sub MAIN(Str $name);`
. | `say "Hello, $name!";`

## 2

Dì se il programma è corretto.

```raku
unit sub MAIN(Str $name) {
    say "Hello, $name!";
}
```

{:.quiz-select}
valid | Questo programma è&nbsp; (: valido, non valido :) | Nonostante la presenza di `unit`, puoi ancora aggiungere parentesi graffe, ma è superfluo.

## 3

Questo programma è corretto?

```raku
unit multi sub MAIN() {
    say 'Hello, everyone!';
}

unit multi sub MAIN($name) {
    say "Hello, $name!";
}
```

{:.quiz-select}
invalid | Questo programma è&nbsp; (: valido, non valido :) | Errore: `Cannot use 'unit' with individual multi candidates.`

{% include quiz.html %}

{% include nav.html %}