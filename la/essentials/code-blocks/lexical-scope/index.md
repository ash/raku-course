---
title: Lexical scope
---

{% include menu.html %}

Clausula codicis creat quod vocatur ambitus lexicalis. Variabiles in clausula currenti declaratae intra eam visibiles sunt, sed non postquam programma clausulam exierit. Considera exemplum:

```raku
{
    my $x = 42;
    say $x;
}

say $x;
```

Variabilis `$x` in clausula codicis creata est. Prima vocatio `say $x` valorem variabilis imprimit ut visibilis sit intra clausulam. Secunda `say $x` deficit quia nomen `$x` extra clausulam non existit et post finem eius non cognoscitur. Programma non compilatur et errorem accipis:

    ===SORRY!=== Error while compiling /Users/ash/raku-course/t.raku
    Variabilis '$x' non declarata est
    at /Users/ash/raku-course/t.raku:6
    ------> say ⏏$x;

{% include nav.html %}