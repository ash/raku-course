if @*ARGS[0] == @*ARGS[1] == @*ARGS[2] {
    say 3;
}
elsif @*ARGS[0] == @*ARGS[1] || @*ARGS[1] == @*ARGS[2] || @*ARGS[0] == @*ARGS[2] {
    say 2;
}
else {
    say 0;
}
