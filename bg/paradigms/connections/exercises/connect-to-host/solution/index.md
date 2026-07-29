---
title: 'Решение: Свържете се с хост'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $host = 'example.com';

if try IO::Socket::INET.new(:host($host), :port(80)) -> $conn {
    say "connected to $host";
    $conn.close;
}
else {
    say "could not connect to $host";
}
```

🦋 Намерете програмата във файла [connect-to-host.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/connect-to-host.raku).

## Изход

```
connected to example.com
```

## Коментари

1. `IO::Socket::INET.new(:host, :port)` отваря връзката незабавно и хвърля изключение, ако хостът е недостижим.

1. Обвиването му в `try` превръща това изключение в `Nil` вместо в срив. Конструкцията `if … -> $conn` свързва сокета, когато връзката успее, и изпълнява клона `else`, когато не успее — надеждният начин да се опита връзка.

1. За да видите клона `else` в действие, сменете `$host` с име, което не съществува, например `'example.comp'`. Тогава търсенето в DNS се проваля — без `try` бихте получили грешка от рода на `Failed to resolve host name 'example.comp'`, — но тук `try` я превръща в `Nil` и програмата спокойно отпечатва `could not connect to example.comp`.

{% include nav.html %}
