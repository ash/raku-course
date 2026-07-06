---
title: Methods with parameters
---

{% include menu.html %}

A method can take parameters, just like a subroutine. You list them in parentheses after the method name:

```raku
class Account {
    has $.balance is rw = 0;

    method deposit($amount) {
        $.balance += $amount;
    }
}
```

The `deposit` method takes one parameter, `$amount`, and adds it to the object’s balance:

```raku
my $a = Account.new;
$a.deposit(100);
$a.deposit(50);
say $a.balance; # 150
```

Each call works on the object it was called on, so the same method can update different objects independently. Methods can take positional and named parameters, default values, and everything else you have already seen in subroutine signatures.

{% include nav.html %}
