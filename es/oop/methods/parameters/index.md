---
title: Métodos con parámetros
translations_gpt:
---

{% include menu.html %}

Un método puede recibir parámetros, igual que una subrutina. Se enumeran entre paréntesis después del nombre del método:

```raku
class Account {
    has $.balance is rw = 0;

    method deposit($amount) {
        $.balance += $amount;
    }
}
```

El método `deposit` recibe un parámetro, `$amount`, y lo suma al saldo del objeto:

```raku
my $a = Account.new;
$a.deposit(100);
$a.deposit(50);
say $a.balance; # 150
```

Cada llamada actúa sobre el objeto sobre el que se hizo, así que el mismo método puede actualizar objetos distintos de forma independiente. Los métodos pueden recibir parámetros posicionales y con nombre, valores por defecto y todo lo demás que ya has visto en las firmas de las subrutinas.

{% include nav.html %}
