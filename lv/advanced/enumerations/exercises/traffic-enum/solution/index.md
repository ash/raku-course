---
title: 'Risinājums: Luksofora gaismas'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
enum Light <red amber green>;

my Light $current = red;
say "$current is {$current.value}";

$current = amber;
say "$current is {$current.value}";

$current = green;
say "$current is {$current.value}";
```

🦋 Atrodiet programmu failā [traffic-enum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/traffic-enum.raku).

## Izvade

```
red is 0
amber is 1
green is 2
```

## Komentāri

1. `my Light $current` ir parasts, maināms mainīgais — tikai ierobežots ar tipu `Light`. Piešķirot nākamo konstanti, gaisma pārslēdzas, un skaitlis katru reizi seko nosaukumam: `0`, `1`, `2`.

1. `$current++` izskatās tā, it kā tam vajadzētu pašam pāriet uz nākamo gaismu, taču tas neizdodas ar tipa pārbaudes kļūdu. `++` uztver konstanti kā tās kailo skaitli un atdod `Int` (`red` kļūst par `1`), un `Int` tipam `Light` vairs neder. Tāpēc gaismu pārslēdzat, piešķirot nākamo konstanti, kā parādīts augstāk.

1. Tipa ierobežojums attiecas uz katru piešķīrumu, ne tikai uz pirmo. `$current` pieņems `red`, `amber` vai `green`, taču kaut kā tāda piešķiršana, kas nav `Light` — kaila skaitļa vai virknes —, būtu tipa pārbaudes kļūda.

{% include nav.html %}
