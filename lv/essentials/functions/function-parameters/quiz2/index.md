---
title: Viktorīna — Argumentu nodošana
---

{% include menu.html %}

## 1

Ir funkcija ar šādu definīciju:

```raku
sub f {
    say 'Function called';
}
```

Izvēlieties pareizos šīs funkcijas izsaukumus.

{:.quiz}
1 | f;
0 | f(&apos;&apos;); | Funkcija nepieņem nekādus argumentus, bet šeit tiek saņemts viens.
0 | f &apos;&apos;; | Tas pats kā iepriekš.
1 | f(); | Tas ir pareizi, netiek nodoti nekādi argumenti.
0 | f (); | Šeit tiek nodots viens arguments (tukšs saraksts).
0 | f(10);

## 2

Ir vēl viena funkcija.

```raku
sub g($x, $y) {
    say "Called g($x, $y)";
}
```

Izvēlieties pareizos šīs funkcijas izsaukumus.

{:.quiz}
1 | g(10, 20);
0 | g 10 20; | Nav komata starp argumentiem.
0 | g(10); | Pārāk maz argumentu: nepieciešami divi, nodots viens.
1 | g 10, 20; | Iekavas nav nepieciešamas, ja tas nav neskaidrs.
0 | g(10,); | Nav derīga sintakse.
0 | g(,20); | Arī nav derīga sintakse.
0 | g(&apos;10, 20&apos;); | Nodots viens argumenta virkne.
1 | g(&apos;word&apos;, 20); | Argumenti var būt dažādu tipu.
0 | g(10, 20, 30); | Pārāk daudz argumentu.
0 | g 10, 20, 30; | Tas pats šeit: nodoti trīs argumenti.


{% include quiz.html %}

{% include nav.html %}