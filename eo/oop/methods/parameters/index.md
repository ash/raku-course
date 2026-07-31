---
title: Metodoj kun parametroj
translations_gpt:
---

{% include menu.html %}

Metodo povas preni parametrojn, same kiel subrutino. Vi listigas ilin en krampoj post la nomo de la metodo:

```raku
class Account {
    has $.balance is rw = 0;

    method deposit($amount) {
        $.balance += $amount;
    }
}
```

La metodo `deposit` prenas unu parametron, `$amount`, kaj aldonas ĝin al la saldo de la objekto:

```raku
my $a = Account.new;
$a.deposit(100);
$a.deposit(50);
say $a.balance; # 150
```

Ĉiu voko laboras sur la objekto, sur kiu ĝi estis vokata, do la sama metodo povas ĝisdatigi malsamajn objektojn sendepende. Metodoj povas preni poziciajn kaj nomitajn parametrojn, defaŭltajn valorojn, kaj ĉion alian, kion vi jam vidis en subskriboj de subrutinoj.

{% include nav.html %}
