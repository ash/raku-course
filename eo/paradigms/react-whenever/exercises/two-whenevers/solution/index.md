---
title: 'Solvo: Du whenever'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $deposits    = Supply.from-list(100, 50, 200);
my $withdrawals = Supply.from-list(30, 120);

my $balance = 0;

react {
    whenever $deposits    { $balance += $_ }
    whenever $withdrawals { $balance -= $_ }
}

say $balance;
```

🦋 Vi povas trovi la fontkodon en la dosiero [two-whenevers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/two-whenevers.raku).

## Eligo

```
200
```

## Komentoj

1. La du blokoj `whenever` observas la du nomitajn supply kaj reagas **malsame**: enpagoj estas aldonataj, elpagoj subtrahataj. Unu bloko react, du fluoj, du apartaj reagoj — jen la celo havi unu `whenever` por ĉiu fonto.

1. La bloko react finiĝas nur kiam ambaŭ supply estas finitaj, do la saldo estas fina antaŭ ol ĝi estas presata: `100 + 50 + 200 - 30 - 120` donas `200`. Ĉar adicio kaj subtraho estas komutaj, la interplektado de la du fluoj ne influas la rezulton.

1. Ĉi tie ambaŭ supply liveras siajn valorojn tuj, unu fluo post la alia. En la vera vivo la eventoj de banka konto alvenas disaj en la tempo — enpago nun, elpago horon poste — kaj la du fluoj interplektiĝas, kiel en la demonstro [Du tempigiloj](/eo/paradigms/react-whenever/two-timers). La kodo restas precize la sama: la bloko react plenumas tiun korpon `whenever`, kiu kongruas kun ĉiu evento laŭ ĝia alveno.

{% include nav.html %}
