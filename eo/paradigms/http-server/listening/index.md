---
title: Aŭskulti konektojn
translations_gpt:
---

{% include menu.html %}

Por agi kiel servilo, kreu kontaktskatolon en **aŭskulta** reĝimo per la argumento `:listen`, donante la adreson kaj pordon, ĉe kiuj aŭskulti:

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);
```

`:localhost('127.0.0.1')` aŭskultas sur via propra maŝino, kaj `:localport(8080)` estas la pordo, al kiu klientoj devas konektiĝi. La kontaktskatolo nun atendas, sed ankoraŭ neniu kliento alvenis.

Por preni la sekvan envenantan konekton, voku `.accept`. Ĝi **blokas**, ĝis kliento konektiĝas, poste redonas freŝan kontaktskatolon reprezentantan tiun unu interparolon:

```raku
my $conn = $listener.accept;
say 'a client connected';
```

La `$listener` daŭre aŭskultas por pliaj klientoj, dum `$conn` estas via kanalo por paroli kun ĉi tiu aparta. Vera servilo vokas `.accept` en buklo, traktante ĉiun klienton laŭ ĝia alveno.

> Ĉi tiuj ekzemploj plenumiĝas sur via propra maŝino; konektiĝu al ili el retumilo aŭ alia programo ĉe `127.0.0.1:8080`.

Do servilo estas simple kontaktskatolo turnita: anstataŭ `:host`/`:port` por elvoki eksteren, vi donas `:listen` kun `:localhost`/`:localport` por atendi envenantajn vokojn.

{% include nav.html %}
