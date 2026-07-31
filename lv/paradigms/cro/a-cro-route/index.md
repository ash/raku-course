---
title: Cro maršruts
translations_gpt:
---

{% include menu.html %}

Cro HTTP pakalpojumu apraksta _maršrutu_ kopums: katrs maršruts pasaka, kuru URL tas apstrādā un ko atgriež. Tos būvē `route` bloka iekšienē ar atslēgvārdu `get`:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello' {
        content 'text/plain', 'Hello from Cro!';
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Listening on http://127.0.0.1:8080/hello — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

Maršrutu lasiet kā «`GET` pieprasījums ceļam `hello` atgriež tekstu `Hello from Cro!`». Funkcija `content` uzstāda gan satura tipu, gan ķermeni — nekādu roku darba statusa rindu vai `\r\n` te nav. `Cro::HTTP::Server` piesien maršrutus adresei un portam, un `.start` sāk apkalpošanu.

Viens smalkums: `.start` **nebloķē** — tas palaiž pakalpojumu fona pavedienos un tūlīt atgriežas, un, ja programma vienkārši tur beigtos, serveris pazustu līdz ar to. Noslēdzošais `react` bloks ir tas, kas programmu tur pie dzīvības, un tas ir vecs paziņa: `whenever signal(SIGINT)` reaģē uz pārtraukuma signālu (Ctrl-C uz tastatūras), apturot serveri un izsaucot `done`. Šīs daļas agrākie reaktīvie rīki ir tieši tas, kā Cro programma gaida, apkalpo un tīri izslēdzas.

> Šim piemēram vajadzīgs uzstādīts Cro (`zef install cro`). Palaidiet to, atveriet `http://127.0.0.1:8080/hello` un, kad esat pabeidzis, apturiet serveri ar Ctrl-C.

> Neuztraucieties, ja serveris pārlūkošanas laikā reizēm izdrukā `Cannot write to a closed socket`. Tā nav kļūda jūsu kodā: klients — parasti pārlūks — atvēra savienojumu un pameta to, nenolasījis atbildi, kā pārlūki mēdz darīt ar minējumu vai atceltiem pieprasījumiem. Cro pieraksta pazudušo klientu, un serveris turpina apkalpot.

Maršruts var ņemt URL segmentus kā parametrus, atgriezt JSON un daudz ko citu, bet forma vienmēr ir šī: pasakiet, ko katrs ceļš dara, nododiet maršrutus serverim un palaidiet to. Salīdzinājumā ar iepriekšējās sadaļas neapstrādāto ligzdu serveri Cro noņem visu protokola grāmatvedību un ļauj uzrakstīt tikai to daļu, kas ir raksturīga jūsu pakalpojumam.

Šis maršruts gan vienmēr saka vienu un to pašu. Nākamā lappuse ļauj maršrutam nolasīt **parametru** no URL, lai viens maršruts varētu `/hello/Anna` un `/hello/Bob` sveicināt dažādi.

{% include nav.html %}
