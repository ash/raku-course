---
title: Class methods
---

{% include menu.html %}

Most methods are called on an object — an instance of a class. But a method can also be called on the class itself, that is, on the type object. Such a method is often called a _class method_. It is useful for values and operations that belong to the class as a whole, rather than to one particular object.

You define a class method exactly like any other method:

```raku
class Road {
    method speed-limit { 120 }
}
```

and call it on the class name instead of on an instance:

```raku
say Road.speed-limit; # 120
```

You have already been using a class method without naming it: `new` is a method called on the class to create a new object.

A class method has no access to instance attributes — there is no particular object behind it — so it works only with information that is the same for every object of the class. When the work depends on a specific object’s data, use an ordinary method called on an instance; when it does not, a class method is a natural fit.

Note that while class methods do not need an instance, it is still possible to use object’s data in them when you do have an object:

```raku
class Road {
    has $.name;
    method speed-limit { 120 }

    method info {
        "The maximum speed on $.name is " ~ self.speed-limit
    }
}

my $R404 = Road.new(name => 'Road 404');
say $R404.info;
```

This program prints the expected result:

```
The maximum speed on Road 404 is 120
```

Without the instantiated class object, a call like `say Road.info` would produce an error.

{% include nav.html %}
