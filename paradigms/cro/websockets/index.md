---
title: WebSockets
---

{% include menu.html %}

An HTTP conversation is one-shot: the client asks, the server answers, and the connection is done. A **WebSocket** upgrades that into a long-lived, two-way channel — either side can send a message at any moment, which is what chats, games, and live dashboards need. Cro supports WebSockets out of the box, and a WebSocket handler is built from the reactive tools you already know: a message stream is a supply.

Here is a tiny chat server. Every message any client sends is upper-cased by the server and broadcast to everyone connected — so what comes back is visibly *not* what went out, proving the data really made the round trip:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Router::WebSocket;
use Cro::HTTP::Server;

my $chat = Supplier.new;

my $application = route {
    get -> 'chat' {
        web-socket -> $incoming {
            supply {
                whenever $incoming -> $message {
                    $chat.emit(uc(await $message.body-text));
                    LAST { done }
                }
                whenever $chat -> $text {
                    emit $text;
                }
            }
        }
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Chat server on ws://127.0.0.1:8080/chat — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

Look at the `web-socket` block — it is the reactive part of the course in miniature. Each connected client gets a `supply` with two `whenever`s: one watches `$incoming`, the messages arriving *from* that client, upper-cases each and pushes it into the shared `$chat` supplier; the other watches `$chat` and `emit`s every broadcast text back *to* the client. One `Supplier`, tapped by every connection, is the entire chat room.

The little `LAST { done }` matters. It is the [phaser](/advanced/block-phasers) you met with loops; in a `whenever` block it fires when the watched stream **ends** — that is, when this client disconnects. Calling `done` there closes the whole connection supply, unsubscribing it from `$chat`. Without it, a departed client's `whenever $chat` would linger, and the next broadcast would try to write to a closed socket and print an error on the server.

A browser talks to this with a few lines of JavaScript, but so does another Raku program — Cro also provides the client side:

```raku
use Cro::WebSocket::Client;

my $conn = await Cro::WebSocket::Client.connect('ws://127.0.0.1:8080/chat');

my $got = Promise.new;

$conn.messages.tap(-> $message {
    say 'Received: ', await $message.body-text;
    $got.keep;
});

say 'Sending:  Hello, chat!';
$conn.send('Hello, chat!');

await $got;
await $conn.close;
```

`.send` fires the message off and returns at once; the reply arrives later, on another thread, in the `.tap` block. The main line must therefore wait before closing — and rather than sleeping and hoping, it awaits a `Promise` that the tap keeps the moment the reply lands: the concurrency tools from earlier in this part, doing exactly what they were made for.

Run the server in one terminal and this client in another. The client prints both directions of the conversation:

```
Sending:  Hello, chat!
Received: HELLO, CHAT!
```

What went out lowercase came back in capitals — the message travelled *to* the server, was transformed there, and travelled *back* over the same connection. That is the two-way channel in action. Start the client in several terminals at once and every message appears in all of them: a working chat in under thirty lines of Raku.

> These examples need Cro installed (`zef install cro`).

This is a fitting place to end the course. A service, the client that calls it, and a live two-way channel between them stand on everything that came before — objects and exceptions, regexes and grammars, and the functional, concurrent, and reactive tools of this part — yet the code stays short and says exactly what you mean. From [bytes on a socket](/paradigms/connections/sending-receiving) to a chat room in a screenful of code: that is Raku.

{% include nav.html %}
