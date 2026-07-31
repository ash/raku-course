---
title: Iebūvētās īpašības
---

{% include menu.html %}

_Īpašība_ tiek piemērota ar atslēgvārdu `is` uzreiz pēc deklarācijas. Tā tiek izpildīta kompilēšanas laikā un maina kādu fiksētu tās objekta īpašību. Raku nāk ar daudzām iebūvētām īpašībām; dažas jūs jau esat izmantojuši.

Pēc noklusējuma apakšprogrammas parametri ir **tikai lasāmi** — jūs nevarat tiem piešķirt vērtību apakšprogrammas iekšienē. Īpašība `is copy` dod jums privātu, modificējamu argumenta kopiju, kuru varat mainīt, neietekmējot izsaucēju:

```raku
sub greet($name is copy) {
    $name = "dear $name";
    say "Hello, $name!";
}

my $who = 'Anna';
greet($who); # Hello, dear Anna!
say $who;    # Anna — the caller's own variable is untouched
```

Īpašība `is rw` iet tālāk: tā sasaista parametru ar izsaucēja mainīgo, tāpēc izmaiņas apakšprogrammas iekšienē ir redzamas ārpusē:

```raku
sub bump($n is rw) {
    $n++;
}

my $x = 10;
bump($x);
say $x; # 11
```

Bez kādas no šīm īpašībām `$n++` radītu kompilēšanas laika kļūdu, jo parametrs būtu tikai lasāms.

Vēl viena izplatīta īpašība nosaka noklusējuma vērtību:

```raku
my $port is default(8080);
say $port; # 8080
```

Šeit `is default` piešķir mainīgajam vērtību, uz kuru atgriezties. Katra iebūvētā īpašība — `is rw`, `is copy`, `is default` un citas — pievieno vienu konkrētu kompilēšanas laika uzvedību deklarācijai. Nākamā tēma parāda, ka īpašības nav slēgta kopa: [jūs varat definēt savas](/lv/advanced/traits-pragmas/writing-a-trait).

{% include nav.html %}
