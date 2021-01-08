---
title: Quiz — Type constraints
---

{% include menu.html %}

Make the variables in the below program typed-restricted. Choose the most narrow type required to keep the value;

{:.quiz-code}
Int | my ␣␣␣ $a = 500;
Int | my ␣␣␣ $b = 304839573985398539853535353; | Long numbers are supported out of the box.
Rat | my ␣␣␣ $c = 3.5; | This is a `Rat`. Note that `Num` values are written in scientific notation.
Rat | my ␣␣␣ $d = 17/19; | This is also a `Rat`, and not a division.
Rat | my ␣␣␣ $e = <2/5>; | This is one of the possible notations for `Rat`s.
Num | my ␣␣␣ $f = pi; | The built-in value of π is a `Num` value.
Num | my ␣␣␣ $g = 3e-4;
Str | my ␣␣␣ $h = &apos;18&apos;;

{% include quiz.html %}

{% include nav.html %}
