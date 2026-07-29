---
title: 'Розв''язання: Змінна our'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
package Config {
    our $port = 8080;
    my  $secret = 42;
}

say $Config::port;
say $Config::secret.defined;
```

🦋 Вихідний код можна знайти у файлі [our-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/our-variable.raku).

## Вивід

```
8080
False
```

## Коментарі

1. `our $port` стає частиною простору імен `Config`, тож до неї можна дістатися ззовні як `$Config::port`, що виводить `8080`.

1. `my $secret` є лексичною — приватною для блоку пакунка, — тож у просторі імен її немає. Шлях `$Config::secret` нічого не знаходить, це невизначене значення, тож `.defined` дає `False`. Ось у чому різниця, яку створює `our`.

{% include nav.html %}
