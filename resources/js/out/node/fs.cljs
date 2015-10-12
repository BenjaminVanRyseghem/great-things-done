(ns node.fs)

;; TODO: improve comments

(def ^:private fs (js/require "fs"))

;; ===========
;;
;; Node fs API (https://nodejs.org/api/fs.html)
;;
;; ===========

(defn path-exists?
  "Test whether or not the given path exists by checking the file system. If `callback` is provided, the execution is asynchronous and `callback` is invoked with either true or false."
  [path & [callback]]
  (if callback
    (.exists fs path callback)
    (.existsSync fs (clj->js path))))

(defn mkdir!
  "mkdir(2). `mode` defaults to `0777`. If `callback` is provided, the execution is asynchronous and `callback` is invoked with no arguments other than a possible exception."
  [path & [mode callback]]
  (if callback
    (.mkdir fs path mode callback)
    (.mkdirSync fs path mode)))

(defn write-file!
  "Write data to a file, replacing the file if it already exists. data can be a string or a buffer.

The encoding option is ignored if data is a buffer. It defaults to 'utf8'.

  - `filename` String
  - `data` String | Buffer
  - `options` Object
    - `encoding` String | Null default = 'utf8'
    - `mode` Number default = 438 (aka 0666 in Octal)
  - `flag` String default = 'w'
  - `callback` Function"
  [filename data & [options callback]]
  (if callback
    (.writeFile fs filename data options callback)
    (.writeFileSync fs filename data options)))

(defn rename!
  "Synchronous rename(2). If `callback` is provided the execution is asynchronous."
  [old-path new-path & [callback]]
  (if callback
    (.rename fs old-path new-path callback)
    (.renameSync fs old-path new-path)))

(defn unlink!
  "Synchronous unlink(2). If `callback` is provided the execution is asynchronous."
  [path & [callback]]
  (if callback
    (.unlink fs path callback)
    (.unlinkSync fs path)))

(defn read-dir
  "Synchronous readdir(3). Returns an array of filenames excluding '.' and '..'. If `callback` is provided the execution is asynchronous."
  [path & [callback]]
  (if callback
    (.readdir fs path callback)
    (.readdirSync fs path)))

(defn read-file
  "Synchronously reads the entire contents of a file. If `callback` is provided the execution is asynchronous."
  [path & [options callback]]
  (if callback
    (.readFile fs path options callback)
    (.readFileSync fs path options)))

(defn rm-dir!
  "Synchronous rmdir(2). If `callback` is provided the execution is asynchronous."
  [path & [callback]]
  (if callback
    (.rmdir fs path callback)
    (.rmdirSync fs path)))

;; ===========
;;
;; New API
;;
;; ===========

(defn ensure-dir!
  "Ensure tha provided `path` exists on disk. If `callback` is provided, the execution is asynchronous."
  [path & [callback]]
  (if callback
    (path-exists? path
                  #(when-not %
                     (mkdir! path
                             nil
                             callback)))
    (when-not (path-exists? path)
      (mkdir! path))))
