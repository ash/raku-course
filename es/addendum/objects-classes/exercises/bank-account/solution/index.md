---
title: 'Solución: Una cuenta bancaria'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

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

🦋 Puedes encontrar el código fuente en el archivo [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/bank-account.raku).

## Salida

```
declined: insufficient funds
70
```

## Comentarios

1. `has $!balance = 0` declara el atributo como *privado*: con el tigilo `!` no tiene
ningún accesor generado, así que la única manera de cambiar el saldo es a través de los
métodos que la clase proporciona. Un `method balance` le da al mundo exterior una forma
de leerlo, pero ninguna de asignarlo.

1. Esto es deliberado. Si hubiéramos escrito `has $.balance`, el tigilo `.` añadiría un
accesor público —de solo lectura por omisión, pero un descuidado `is rw` sobre él
expondría la asignación directa, como `$account.balance = 1_000_000`, permitiendo a
cualquiera mover dinero sin pasar por `deposit` ni `withdraw`. Mantener el atributo
privado lo descarta por construcción: el saldo solo puede cambiar según las reglas de la
propia cuenta, como la comprobación de fondos insuficientes de `withdraw`.

1. La segunda retirada pide más de lo que hay en el saldo, así que se rechaza y el saldo
se queda en `70`.

{% include nav.html %}
