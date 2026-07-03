---
title: Writing a trait
---

{% include menu.html %}

Traits are ordinary multi-subroutines with a special name, so you can write your own. To add a trait spelled `is something`, define a `multi sub trait_mod:<is>` whose parameters say what it applies to and name the trait:

This is one of the more advanced corners of Raku, so do not worry if it feels intricate. You can use the built-in traits perfectly well without knowing how they are made, and you will rarely need to write one yourself — treat this page as a look under the hood.

```raku
my @traced;

multi sub trait_mod:<is>(Routine:D $r, :$traced!) {
    @traced.push($r.name);
}

sub foo() is traced { }
sub bar() is traced { }

say @traced; # [foo bar]
```

Read the signature: the first parameter, `Routine:D $r`, is the thing the trait is attached to — here a subroutine. The `:D` is a type _smiley_ that demands a **defined** value — an actual routine object, not the bare, undefined `Routine` type itself. (Its partners are `:U`, which requires the undefined type object, and `:_`, which accepts either.) The named parameter `:$traced!` is the trait’s own name; its presence is what makes `is traced` call this sub. Because traits run at **compile time**, both `foo` and `bar` are registered as they are declared, so `@traced` already lists them by the time the program runs — you could even move the `say @traced` line up above the two `sub` definitions and it would still print `[foo bar]`.

This tiny trait only records names, but the same mechanism can do much more: wrap a routine to add logging, validate an attribute, or attach metadata. Writing the first parameter as an `Attribute` or `Variable` instead of a `Routine` lets a trait apply to attributes or variables. Traits are how Raku keeps its declaration syntax open — `is rw` and your own `is traced` are built the same way.

{% include nav.html %}
