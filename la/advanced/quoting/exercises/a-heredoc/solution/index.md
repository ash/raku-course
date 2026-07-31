---
title: 'Solutio: Heredoc'
---

{% include menu.html %}

Hic est possibilis solutio huius exercitii.

## Codex

```raku
my $name  = 'Anna';
my $item  = 'Raku Book';
my $price = 25;
my $count = 3;

print qq:to/END/;
    Dear $name,
    You ordered $count copies of "$item".
    That comes to {$count * $price} dollars.
    Thank you!
    END
```

🦋 Inveni codicem fontem in archivo [a-heredoc.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/a-heredoc.raku).

## Exitus

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Commentarii

1. Heredoc cum `qq:to` incipit potius quam `q:to`, itaque interpolat. Sicut series `qq`, variabiles scalares — `$name`, `$count`, `$item` — implet *atque* codicem insertum exsequitur: clausura `{$count * $price}` computat `3 * 25`, itaque summa `75` in linea apparet.

1. Apostrophi duplices circa `"$item"` hic solum characteres ad litteram sunt; intra heredoc nullus delimitator effugiendus est, itaque ut scripti imprimuntur dum `$item` adhuc interpolatur.

1. Corpus et terminans `END` claudens iisdem quattuor spatiis indentantur. Indentatio terminatoris ab omni linea detrahitur, itaque illa quattuor spatia numquam ad seriem perveniunt — output a margine sinistra incipit.

1. Heredoc iam in lineae fine desinit, itaque `print` adhibetur potius quam `say` ad vitandam alteram lineam vacuam.

{% include nav.html %}
