---
title: Allomorfi
---

{% include menu.html %}

Apsveriet šādu programmu. Pirms to palaist, vai jūs varat pateikt, kuri ievades vērtības to salauzīs un kurā rindā?

```raku
my $input = prompt 'Enter something: ';
my Int $i = $input;
my Str $s = $input;

say $i;
say $s;
```

Šeit tiek izveidoti trīs skalārie mainīgie. Divi no tiem, `$i` un `$s`, ir tipizēti mainīgie. Tas nozīmē, ka `$i` var glabāt tikai veselus skaitļus un `$s` var glabāt tikai virknes.

`prompt` atgriešanas tips ir atkarīgs no ievadītajiem rakstzīmēm. Ja ievades virkne var pārstāvēt veselu skaitli, rezultāts būs `IntStr` tips, kas ir _gan_ `Int`, gan `Str`, un tādējādi to var piešķirt gan `Int`, gan `Str` mainīgajam. Tātad, ja ievadāt, piemēram, `1234`, programma nesalauzīsies.

```
$ raku allomorphs.raku
Enter something: 1234
1234
1234
```

`IntStr` tips ir tā saucamā _allomorfa_ piemērs — datu tips, kas apvieno divus citus tipus. Šeit ir vēl daži piemēri.

Ja ievadāt virkni, kas nevar būt vesels skaitlis, programma salūzīs brīdī, kad mēs piešķiram `$input` uz `$i`:

```
$ raku allomorphs.raku
Enter something: Hello, World!
Type check failed in assignment to $i; expected Int but got Str ("Hello, World!")
  in block <unit> at allomorphs.raku line 2
```

Pamaniet, ka jūs saņemat kļūdu pat tad, ja ievades virkne var tikt pārveidota par skaitli, bet ne par veselu skaitli. Tā kā nav iespējams glabāt peldošā punkta vai racionālu skaitli vesela skaitļa konteinerā, Raku izmetīs izņēmumu:

```
$ raku allomorphs.raku
Enter something: 3.14
Type check failed in assignment to $i; expected Int but got RatStr (RatStr.new(3.14, "3....)
  in block <unit> at allomorphs.raku line 2
```

Otrā piešķiršana, `$s = $input`, nekad nesalauzīsies, jo virkne var pieņemt jebkuru ievadi.

🦋 Jūs varat atrast šīs programmas avota kodu failā [allomorphs.raku](https://github.com/ash/raku-course/blob/master/essentials/typed-variables/allomorphs/allomorphs.raku).

{% include nav.html %}