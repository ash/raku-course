---
title: Cross, hyper, and negated meta-operators
---

{% include menu.html %}

Besides reduction and zip, Raku has several more meta-operators. Three of them are worth knowing here.

## Cross — `X`

The cross meta-operator `X` pairs **every** element of one list with **every** element of another — the cartesian product:

```raku
say <a b> X <1 2>; # ((a 1) (a 2) (b 1) (b 2))
```

Like zip, it can wrap an operator to act on each pair. `X~` joins each pair into a string, and `X*` multiplies:

```raku
say <a b> X~ <1 2>;         # (a1 a2 b1 b2)
say (1, 2, 3) X* (10, 100); # (10 100 20 200 30 300)
```

Where zip walks two lists in step, cross combines them in every possible way.

## Hyper — `»…«`

A hyper meta-operator applies an operator to **each element** of a list. The operator is wrapped in the pointy `»…«` (or the ASCII `>>…<<`). With two lists it works element by element, like zip; with a single value on one side, it stretches that value across the whole list:

```raku
say (1, 2, 3) »+» (10, 20, 30); # (11 22 33)
say (1, 2, 3) »*» 2;            # (2 4 6)
```

The two arrows need not point the same way, and their direction decides what happens when the lists differ in length — a tip pointing **at** a list lets that list be repeated to match the other. In the ASCII `<<`/`>>` spelling, the four combinations are:

* `>>op<<` — neither side stretches; the lists must already be the same length, or it is an error;
* `>>op>>` — the **right** list is repeated to match the left;
* `<<op<<` — the **left** list is repeated to match the right;
* `<<op>>` — the **shorter** list is repeated to match the longer.

```raku
say (1, 2, 3, 4) <<+>> (10, 20); # (11 22 13 24)  — 10, 20 repeats to 10, 20, 10, 20
```

There is a unary form too, which calls a method on every element. `>>.uc` upper-cases each string:

```raku
say <raku perl>>>.uc; # (RAKU PERL)
```

Hyper operations also signal that the work *may* be done in parallel — you will meet the related `.hyper` method later, in [the section on concurrent programming](/paradigms/hyper-race).

## Negated — `!`

Putting `!` in front of a comparison operator negates its result. The familiar `!=` (not equal) is exactly this meta-operator applied to `==`, and the same works for other Boolean operators such as `eq` and `%%`:

```raku
say 3 != 4;      # True
say 'a' !eq 'b'; # True  — not equal as strings
say 5 !%% 2;     # True  — 5 is not divisible by 2
```

In short, `$a !op $b` is just a tidier way of writing `!($a op $b)`.

This is on purpose. Unlike a deliberately minimal language such as Esperanto, which aims for one regular way to express each thing, Raku is happy to give you several — so the negated `!eq` lives right alongside the dedicated `ne` operator, and the two mean exactly the same:

```raku
say 'a' ne 'b'; # True — the same test as 'a' !eq 'b'
```

{% include nav.html %}
