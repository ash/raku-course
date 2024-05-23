---
title: Cave ne spatium
---

{% include menu.html %}

Usus functionum in Raku plerumque intuitivus est et nullas difficultates affert, sed de sequenti aspectu monendus es.

## TL;DR

Noli addere spatium inter nomen functionis et parenthesin cum argumentis eius. Sed utere spatio post `for` et `if`.

## Longa fabula

Simplicem functionem accipiamus:

```raku
sub f($x, $y) {
    return $x + $y;
}
```

Primum omnium, nota absentiam spatii inter nomen functionis et parenthesin apertam quae parametros continet. Aliquae styli codicis in aliis linguis spatium ibi requirere possunt. Raku hoc admittit, sed non est praxis sequenda:

```raku
sub f ($x, $y) {
    return $x + $y;
}
```

In parte vocandi, absentia spatii est momenti. Si functionem vocas et parenthesin omittis, tunc spatium post nomen functionis inevitabile est:

```raku
f 5, 6;
```

Sed si parenthesin addis, non potes habere spatium ante eas. Haec est vocatio correcta:

```raku
f(5, 6);
```

Et haec vocatio est falsa:

```raku
f (5, 6);
```

Talis codex exceptionem causat:

    Too few positionals passed; expected 2 arguments but got 1
      sub f at t.raku line 1
      in block <unit> at t.raku line 5

Raku videt vocationem cum spatio `f (5, 6)` ut conatum tradendi unum argumentum `(5, 6)` functioni. Facile potes typum huius argumenti explorare si functionem rescribas ut solum unum argumentum accipiat:

```raku
sub f($param) {
    say $param.WHAT;
}

f (5, 6); # (List)
```

Itaque, vocatio `f (5, 6)` significat nos tradere [indicem](/la/essentials/positionals/lists) functioni. Index ut una entitas.

## Quando spatium necessarium est

In aliquibus casibus, character spatii necessarius est. Id fit cum uteris parenthesin cum uno ex verbis clavibus, ut `if` vel `for` vel `loop`. Sequens codex est falsus:

```raku
if(True != False) {
    say 'OK';
}
```

Nuntius erroris explicat quid sit falsum:

    ===SORRY!===
    The word 'if' is interpreted as a 'if()' function call.  Please use
    whitespace instead of parentheses.
    at /Users/ash/raku-course/t.raku:1
    ------> if⏏(True != False) {
    Unexpected block in infix position (two terms in a row)
    at /Users/ash/raku-course/t.raku:1
    ------> if(True != False)⏏ {

In casu `if`, parenthesin omnino non requiruntur, ita problema nullas occasiones habet apparendi si non uteris eis. Sed in aliquibus casibus, ut, exempli gratia, cum `loop`, necesse est eas habere, et spatium fit mandatorius:

```for
loop(my $c = 0; $c != 10; $c++) { say $c }
```

In hoc codice, idem fit: `loop(...)` a compilatore intellegitur ut vocatio functionis. Addere spatium ad solvendum problema. Vel melius rescribe fragmentum utendo `for`.

## Conclusio

Conclusio: ut tales quaestiones evites, noli addere spatium inter nomen functionis et parenthesin cum argumentis functionis et conare evitare parenthesin si possibile est cum aliis structuris linguae ut fluxus imperii.

{% include nav.html %}