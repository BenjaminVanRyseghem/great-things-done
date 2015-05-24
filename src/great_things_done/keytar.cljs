(ns great_things_done.keytar
  "A native Node module to get, add, replace, and delete passwords. On OS X the passwords are managed by the Keychain, and on Windows they are managed by the Credential Vault.")

(def ^:private keytar (js/require "keytar"))

(defn add-password!
  "Add the `password` for the `service` and `account` to the keychain."
  [service account password]
  (when-not (.addPassword keytar service account password)
    (throw (js/Error. "Error during the creation of the password"))))

(defn get-password
  "Get the stored password for the `service` and `account`."
  [service account]
  (let [password (.getPassword keytar service account)]
    (if (nil? password)
      (throw (js/Error. "Error retrieving the password"))
      password)))

(defn delete-password!
  "Delete the stored `password` for the `service` and `account`."
  [service account]
  (let [password (.deletePassword keytar service account)]
    (if (nil? password)
      (throw (js/Error. "Error deletion the password"))
      password)))

(defn replace-password!
  "Replace the `password` for the `service` and `account` in the keychain."
  [service account password]
  (when-not (.replacePassword keytar service account password)
    (throw (js/Error. "Error during the replacement of the password"))))

(defn find-password
  "Find the first password for the `service` in the keychain."
  [service]
  (let [password (.findPassword keytar service)]
    (if (nil? password)
      (throw (js/Error. "Error retrieving the password"))
      password)))
