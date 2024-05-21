---
title: Mainīgais topic
---

{% include menu.html %}

`$_` ir īpašs mainīgais, ko sauc par _topic mainīgo_.

Apsveriet ciklu pār diapazonu:

```raku
for 1..5 -> $n {
    say $n;
}
```

Mainīgo `$n` var izlaist, un tādā gadījumā tas tiks aizstāts ar automātiski ģenerētu mainīgo `$_`. Programma būs ekvivalenta šādai:

```raku
for 1..5 {
    say $_;
}
```

Kā jūs [atceraties](/lv/essentials/hello-world/), ir iespējams izmantot `say` kā metodi:

```raku
for 1..5 {
    $_.say;
}
```

Izsaucot metodes uz `$_`, nav nepieciešams pieminēt pašu mainīgo. Tātad, mūsu ciklu var vēl vairāk vienkāršot:

```raku
for 1..5 {
    .say;
}
```

{% include nav.html %}