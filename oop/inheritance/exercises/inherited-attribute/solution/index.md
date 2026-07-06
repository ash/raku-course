---
title: The solution of ’An inherited attribute‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Vehicle {
    has $.wheels;
}

class Bike is Vehicle {
    has $.wheels = 2;
}

class Car is Vehicle {
    has $.wheels = 4;
}

say Bike.new.wheels;
say Car.new.wheels;
```

🦋 You can find the source code in the file [inherited-attribute.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/inherited-attribute.raku).

## Output

```
2
4
```

## Comments

1. `Bike` and `Car` both inherit the `wheels` attribute (and its accessor) from `Vehicle`. Neither redeclares the attribute from scratch — they only give the inherited one a default value, `2` and `4` respectively.

1. Because the default is baked into each class, you can create the objects with a plain `Bike.new` and `Car.new`, and the inherited accessor reads the right number of wheels back.

1. You can still pass the value explicitly, for example `Car.new(wheels => 3)`, and an explicit argument overrides the default. But since a bike or a car most likely already comes with its usual number of wheels, the defaults keep the common case simple while leaving room for the occasional exception.

{% include nav.html %}
