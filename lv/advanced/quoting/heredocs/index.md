---
title: Heredoc
---

{% include menu.html %}

_Heredoc_ ir citēšanas forma daudzrindu tekstam. Tā vietā, lai lietotu norobežotājus ap tekstu, jūs norādāt terminatora vārdu ar `:to`, un virkne turpinās no nākamās rindas līdz rindai, kas satur tikai šo vārdu:

```raku
my $text = q:to/END/;
Hello,
World!
END

print $text;
```

Tas izdrukā:

```
Hello,
World!
```

Terminators (`END` šeit — jebkurš vārds derēs) atzīmē, kur teksts beidzas. Ievērojiet `print`: teksts saglabā jaunrindu, kas atrodas pirms terminatora, tāpēc tas jau beidzas ar rindu pārtraukumu — izmantojot `say`, tiktu pievienota vēl viena un paliktu tukša rinda beigās. Tā kā heredoc sākas ar `q:to`, teksts netiek interpolēts; izmantojiet `qq:to`, lai interpolētu mainīgos:

```raku
my $name = 'Anna';

my $greeting = qq:to/EOF/;
Dear $name,
Welcome!
EOF

print $greeting;
```

Noderīga detaļa: **aizverošā terminatora atkāpe** tiek noņemta no katras teksta rindas. Tas ļauj atkāpēt heredoc, lai tas atbilstu apkārtējam kodam, un šī atkāpe nenonāk virknē:

```raku
sub greeting {
    return q:to/END/;
        Hello,
        World!
        END
}

print greeting;
```

Tas izdrukā to pašu `Hello,` un `World!` kā pirmajā piemērā. Šeit aizverošais `END` ir atkāpēts par astoņām atstarpēm, tāpēc astoņas atstarpes tiek noņemtas no katras rindas, un atgrieztā virkne ir vienkārši `Hello,\nWorld!` bez vadošajām atstarpēm.

Aizverošais terminators nosaka, cik daudz tiek noņemts, tāpēc katrai teksta rindai jābūt atkāpētai vismaz tik daudz. Ja kādai rindai ir mazāk vadošo atstarpes, Raku nevar noņemt pilnu apjomu un brīdina — *Asked to remove 8 spaces, but the shortest indent is 4 spaces*. Turiet terminatoru ne dziļāk par vismazāk atkāpēto rindu, lai no tā izvairītos. Heredoc ir dabiska izvēle veidnēm, ziņojumiem un jebkuram teksta blokam, kas aptver vairākas rindas.

{% include nav.html %}
