---
title: do un bloka vērtība
translations_gpt:
---

{% include menu.html %}

Bloks pats par sevi ir teikums, nevis izteiksme, tāpēc parasti to nevar piešķirt mainīgajam. Prefikss `do` pārvērš bloku par izteiksmi, kuras vērtība ir tā **pēdējā** teikuma vērtība:

```raku
my $x = do {
    my $a = 3;
    $a + 4;
};

say $x; # 7
```

Bloka iekšienē varat deklarēt mainīgos, izpildīt vairākus teikumus un aprēķināt rezultātu; `do` atdod to, uz ko bloks izrēķinās. Tas noder, kad vērtības radīšanai vajag vairāk nekā vienu izteiksmi.

`do` darbojas arī vadības plūsmas teikumu priekšā, ļaujot arī tiem atgriezt vērtību:

```raku
my $sign = do given 5 {
    when * > 0 { 'positive' }
    when * < 0 { 'negative' }
    default    { 'zero' }
};

say $sign; # positive
```

Šeit `do given` pārvērš visu `given`/`when` par izteiksmi, kas dod `positive`. Tas pats darbojas ar `do if` un `do for`. Īsi sakot, `do` ir veids, kā izmantot bloku vai vadības struktūru vietā, kur gaidīta vērtība.

{% include nav.html %}
