(ns great-things-done.crypto
  "Encryption/Decryption node modulde based on https://gist.github.com/chris-rock/993d8a22c7138d1f0d2e#file-crypto-ctr-js")

(def ^:private crypto (js/require "crypto"))

;; function encrypt(text){
;;   var cipher = crypto.createCipher(algorithm,password)
;;   var crypted = cipher.update(text,'utf8','hex')
;;   crypted += cipher.final('hex');
;;   return crypted;
;; }

(defn encrypt
  "Encrypt the provided text with the provided password. An optional algorithm can be provided, default is `aes-256-ctr`"
  [text password & {:keys [algorithm]
                    :or {algorithm "aes-256-ctr"}}]
  (let [cipher  (.createCipher crypto algorithm password)
        crypted (.update cipher text "utf8" "hex")]
    (+ crypted (.final cipher "hex"))))

;; function decrypt(text){
;;   var decipher = crypto.createDecipher(algorithm,password)
;;   var dec = decipher.update(text,'hex','utf8')
;;   dec += decipher.final('utf8');
;;   return dec;
;; }

(defn decrypt
  "Decrypt the provided text with the provided password. An optional algorithm can be provided, default is `aes-256-ctr`"
  [text password & {:keys [algorithm]
                    :or {algorithm "aes-256-ctr"}}]
  (let [decipher  (.createDecipher crypto algorithm password)
        decrypted (.update decipher text "hex" "utf8")]
    (+ decrypted (.final decipher "utf8"))))
