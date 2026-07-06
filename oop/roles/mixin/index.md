---
title: Adding a role to an object
---

{% include menu.html %}

A role does not have to be baked into a class. You can also give one to an object that already exists, using the `but` operator. It mixes the role into a single object at run time and returns a new object that plays the role:

```raku
role Loud {
    method greet {
        callsame().uc;
    }
}

class Greeter {
    method greet {
        'Hello';
    }
}

my $quiet = Greeter.new;
my $loud  = Greeter.new but Loud;

say $quiet.greet; # Hello
say $loud.greet;  # HELLO
```

Only `$loud` gained the role. The `Greeter` class and every other `Greeter` object are untouched, so `$quiet` still greets in the ordinary way. When the role and the class both define a method with the same name, the role’s version wins, and `callsame` calls the one it overrode — here the original `greet` from `Greeter`, whose result is then upper-cased.

An object that has a role mixed in is recognised as doing that role:

```raku
say $quiet ~~ Loud; # False
say $loud  ~~ Loud; # True
```

`but` leaves the original object as it was and hands you a new one. If you would rather change an existing object in place, use the `does` operator instead:

```raku
my $speaker = Greeter.new;
$speaker does Loud;
say $speaker.greet; # HELLO
```

Mixing roles into individual objects lets you decide, one object at a time, which extra behaviour it should take on — without defining a separate class for every combination.

{% include nav.html %}
