---
title: Proc objekts
translations_gpt:
---

{% include menu.html %}

Katrs `run` vai `shell` izsaukums atdod `Proc` objektu — nelielu pierakstu par to, kura programma izpildījās un kā tā beidza darbu. Iepriekšējie temati izmantoja tā turi `.out`, lai nolasītu izvadi; `Proc` nes vairāk.

Noderīgākā daļa ir **izejas kods**. Programma pasaka tam, kas to palaidis, vai tā izdevusies, ar nelielu veselu skaitli: `0` nozīmē veiksmi, un jebkurš cits skaitlis ir pašas programmas izvēlēts neveiksmes kods. `.exitcode` dod šo skaitli:

```raku
my $proc = run 'sh', '-c', 'exit 3';
say $proc.exitcode; # 3
```

Ierastajam jā/nē jautājumam — vai izdevās? — `Proc` vienkārši ir patiess, kad izejas kods ir `0`, un aplams citādi, tāpēc to var pārbaudīt tieši:

```raku
my $proc = run 'ls', '/', :out;
$proc.out.slurp(:close);
say $proc ?? 'ok' !! 'failed'; # ok
```

`Proc` atceras arī komandu, ko palaida, laukā `.command`:

```raku
my $proc = run 'echo', 'hi', :out;
$proc.out.slurp(:close);
say $proc.command; # (echo hi)
```

Kam jāpaskatās: ja komanda neizdodas un jūs atgriezto `Proc` vienkārši **ignorējat**, Raku ceļ izņēmumu, nevis ļauj neveiksmei paiet nepamanītai:

```raku
run 'sh', '-c', 'exit 1';
# dies: The spawned command 'sh' exited unsuccessfully (exit code: 1, signal: 0)
```

Tā kā nenulles izeja parasti nozīmē, ka kaut kas noticis greizi, neveiksmīgs `Proc`, kas tiek izmests, izmet izņēmumu, kad iziet no redzamības apgabala. Sprūds ir rezultāta *izmešana*, nevis izejas koda ignorēšana: ar to vien, ka `Proc` saglabājat mainīgajā, pietiek, lai izvairītos no izņēmuma, pat ja tajā vairs nekad neieskatāties.

```raku
my $proc = run 'sh', '-c', 'exit 1'; # no error, even though it failed
# …and $proc is never used again
```

Tātad, ja *gaidāt*, ka komanda varētu neizdoties, paturiet tās `Proc` un tad ieskatieties `.exitcode` (vai pārbaudiet to kā Būla vērtību), kad vien vēlaties zināt, kas notika.

{% include nav.html %}
