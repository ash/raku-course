my %h = a => 1, b => 2, c => 3;
%h<b>:delete;
say %h.elems;
