; Copyright (c) 2015, Benjamin Van Ryseghem. All rights reserved.
; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file epl-v10.html at the root of this distribution.
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns gtd.crypto
  "Encryption/Decryption node module based on https://gist.github.com/chris-rock/993d8a22c7138d1f0d2e#file-crypto-ctr-js")

(def ^{:private true
       :no-doc true} remote (js/require "remote"))
(def ^{:private true
       :no-doc true} crypto (.require remote "crypto"))

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
        crypted (.update cipher (str text) "utf8" "hex")]
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
        decrypted (.update decipher (str text) "hex" "utf8")]
    (+ decrypted (.final decipher "utf8"))))
