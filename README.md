# great-things-done

A fully open-source GTD application made with Clojure/ClojureScript and Electron

# How to run

foreman start &

# How to dev

In separate terminal run:

- `lein cljsbuild auto atom-dev`
- `lein clean && lein cljsbuild once && rlwrap lein trampoline figwheel great-things-done`
- `lein less auto`
- and finally `./electron/Electron.app/Contents/MacOS/Electron .`

## License

Copyright © 2015 Benjamin Van Ryseghem

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
