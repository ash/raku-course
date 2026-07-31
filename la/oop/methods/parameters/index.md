---
title: Methodi cum parametris
translations_gpt:
---

{% include menu.html %}

Methodus parametros accipere potest, sicut subprogramma. Eos in parenthesibus post nomen methodi enumeras:

```raku
class Account {
    has $.balance is rw = 0;

    method deposit($amount) {
        $.balance += $amount;
    }
}
```

Methodus `deposit` unum parametrum, `$amount`, accipit eumque ad rationem obiecti addit:

```raku
my $a = Account.new;
$a.deposit(100);
$a.deposit(50);
say $a.balance; # 150
```

Unaquaeque vocatio in eo obiecto operatur in quo vocata est, itaque eadem methodus diversa obiecta independenter renovare potest. Methodi parametros positionales et nominatos, valores praedefinitos, et omnia cetera quae iam in signaturis subprogrammatum vidisti accipere possunt.

{% include nav.html %}
