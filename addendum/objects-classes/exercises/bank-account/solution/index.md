---
title: The solution of ’A bank account‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Account {
    has $!balance = 0;

    method deposit($amount) {
        $!balance += $amount;
    }

    method withdraw($amount) {
        if $amount > $!balance {
            say 'declined: insufficient funds';
        }
        else {
            $!balance -= $amount;
        }
    }

    method balance { $!balance }
}

my $account = Account.new;
$account.deposit(100);
$account.withdraw(30);
$account.withdraw(200);

say $account.balance;
```

🦋 You can find the source code in the file [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/bank-account.raku).

## Output

```
declined: insufficient funds
70
```

## Comments

1. `has $!balance = 0` declares the attribute *private* — with the `!` twigil it has
no generated accessor at all, so the only way to change the balance is through the
methods the class provides. A `method balance` gives the outside world a way to read
it, but no way to set it.

1. This is deliberate. Had we written `has $.balance`, the `.` twigil would add a
public accessor — read-only by default, but one careless `is rw` on it would expose
direct assignment like `$account.balance = 1_000_000`, letting anyone move money
without going through `deposit` or `withdraw`. Keeping the attribute private rules
that out by construction: the balance can only ever change by the account's own
rules, such as the insufficient-funds check in `withdraw`.

1. The second withdrawal asks for more than the balance, so it is declined and the
balance stays at `70`.

{% include nav.html %}
