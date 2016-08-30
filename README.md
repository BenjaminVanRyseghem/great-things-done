# great-things-done

A fully open-source GTD application made with Clojure/ClojureScript and Electron

# How to run

In separate terminals run: 

- `foreman start &`
- `./electron/Electron.app/Contents/MacOS/Electron .`

# How to dev

In separate terminal run:

- `lein cljsbuild auto electron`
- `lein clean && lein cljsbuild once && rlwrap lein trampoline figwheel dev`
- `lein less auto`
- and finally `./electron/Electron.app/Contents/MacOS/Electron .`

# Buid for prod

    lein prod

## License

Copyright © 2015 Benjamin Van Ryseghem

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
