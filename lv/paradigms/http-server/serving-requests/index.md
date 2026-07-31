---
title: Daudzu pieprasījumu apkalpošana
translations_gpt:
---

{% include menu.html %}

Iepriekšējās lappuses serveris apstrādāja vienu pieprasījumu un tad apstājās. Īsts serveris turpina darboties, atbildot klientam pēc klienta. Ietiniet pieņemšanas–nolasīšanas–atbildēšanas soļus `loop` ciklā — un, tā kā cikls dala ap to deklarētos mainīgos, starp pieprasījumiem var paturēt stāvokli. Šeit serveris saskaita savus klientus un katram pasaka viņa numuru:

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

my $customer = 0;

loop {
    my $conn = $listener.accept;
    $conn.recv;
    $customer++;

    # qq:to heredoc dod glītu veidni — mainīgais interpolējas turpat
    my $body = qq:to/END/;
        Hello!
        You are customer number $customer.
        Thanks for visiting.
        END

    # vispirms nosūtām galveni, tad ķermeni — kā divus atsevišķus rakstījumus
    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n");
    $conn.print($body);

    $conn.close;
}
```

`.accept` **bloķē**, līdz klients pieslēdzas, un tad atgriež svaigu ligzdu šai vienai sarunai. Tā kā `$customer` dzīvo ārpus cikla, tas izdzīvo no viena pieprasījuma līdz nākamajam: pirmais apmeklētājs ir klients `1`, otrais — `2` un tā tālāk. Cikls pats no sevis nekad nebeidzas, tāpēc serveris paliek augšā, līdz to apturat ar Ctrl-C.

Divas detaļas ir vērts ievērot:

* **Atbilde tiek rakstīta divās daļās.** Pirmais `.print` nosūta HTTP galveni — statusa rindu, satura tipu un tukšo rindu, kas noslēdz galvenes. Otrais nosūta ķermeni. HTTP nerūp, vai tie pienāk vienā vai vairākos rakstījumos, tāpēc to sadalīšana nemainīgo protokola gabalu tur atsevišķi no tā, kas tiešām mainās.

* **Ķermenis nāk no veidnes.** `qq:to/END/` ir *heredoc* — `qq` virkne, kas stiepjas līdz rindai `END`. Tā aptver vairākas rindas un interpolē `$customer` tāpat kā jebkura pēdiņās likta virkne, un tas padara to par glītu mazu veidņu rīku atbildes būvēšanai. (Tā ir viena no [citēšanas konstrukcijām](/lv/advanced/quoting-constructs) no kursa agrākās daļas.)

Pieslēdzieties dažas reizes, lai vērotu, kā skaitītājs kāpj:

```console
$ curl http://127.0.0.1:8080/
Hello!
You are customer number 1.
Thanks for visiting.
$ curl http://127.0.0.1:8080/
Hello!
You are customer number 2.
Thanks for visiting.
```

Šāda pieprasījumu apstrāde citu pēc cita ir vienkāršākais servera veids. Ražošanas serveris katru savienojumu apkalpotu arī savā pavedienā vai solījumā, lai lēns klients nevarētu aizturēt pārējos, — bet tā sirds ir tieši šis cikls: pieņem, nolasi, atbildi, atkārto.

{% include nav.html %}
