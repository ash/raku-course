---
title: Atbilde uz pieprasījumu
translations_gpt:
---

{% include menu.html %}

Tiklīdz klients ir pieslēdzies, jūs nolasāt tā pieprasījumu un sūtāt atbildi. Tīmekļa pārlūkam atbildei jābūt derīgam HTTP: statusa rinda, neobligātas galvenes, tukša rinda un tad ķermenis.

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

my $conn = $listener.accept;
my $request = $conn.recv;

$conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\nHello, web!\n");
$conn.close;
$listener.close;
```

Atbilde atspoguļo to pieprasījuma formātu, ko redzējāt klienta pusē. `HTTP/1.0 200 OK` ir statusa rinda, `Content-Type: text/plain` ir galvene, tukšā rinda (`\r\n\r\n`) noslēdz galvenes, un `Hello, web!` ir ķermenis, ko pārlūks parāda.

Palaidiet šo programmu, tad no citas termināļa loga uzsitiet tai ar `curl` (vai atveriet `http://127.0.0.1:8080/` pārlūkā), un tā izdrukā ķermeni tieši uz ekrāna:

```console
$ curl http://127.0.0.1:8080/
Hello, web!
```

Tas apstrādā vienu pieprasījumu un tad apstājas. Lai apkalpotu daudzus pieprasījumus, jūs `.accept`–nolasi–atbildi soļus ietītu ciklā un parasti katru savienojumu apstrādātu savā pavedienā vai solījumā, lai lēni klienti nebloķētu pārējos. Bet tīmekļa servera būtība ir tieši šī: pieņem savienojumu, nolasi pieprasījumu, uzraksti HTTP atbildi.

[Nākamā lappuse](/lv/paradigms/http-server/serving-requests) dara tieši to — serveris, kas paliek dzīvs, ciklā atbildot uz vienu pieprasījumu pēc otra, nevis apstājoties pēc pirmā.

{% include nav.html %}
