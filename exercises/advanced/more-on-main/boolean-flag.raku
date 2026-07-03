sub MAIN(Bool :$shout = False) {
    say $shout ?? 'HELLO' !! 'hello';
}
