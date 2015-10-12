// Compiled by ClojureScript 1.7.122 {}
goog.provide('utils.keychain');
goog.require('cljs.core');
utils.keychain.keytar = require("keytar");
/**
 * Add the `password` for the `service` and `account` to the keychain.
 */
utils.keychain.add_password_BANG_ = (function utils$keychain$add_password_BANG_(service,account,password){
if(cljs.core.truth_(utils.keychain.keytar.addPassword(service,account,password))){
return null;
} else {
throw (new Error("Error during the creation of the password"));
}
});
/**
 * Get the stored password for the `service` and `account`.
 */
utils.keychain.get_password = (function utils$keychain$get_password(service,account){
var password = utils.keychain.keytar.getPassword(service,account);
if((password == null)){
throw (new Error("Error retrieving the password"));
} else {
return password;
}
});
/**
 * Delete the stored `password` for the `service` and `account`.
 */
utils.keychain.delete_password_BANG_ = (function utils$keychain$delete_password_BANG_(service,account){
var password = utils.keychain.keytar.deletePassword(service,account);
if((password == null)){
throw (new Error("Error deletion the password"));
} else {
return password;
}
});
/**
 * Replace the `password` for the `service` and `account` in the keychain.
 */
utils.keychain.replace_password_BANG_ = (function utils$keychain$replace_password_BANG_(service,account,password){
if(cljs.core.truth_(utils.keychain.keytar.replacePassword(service,account,password))){
return null;
} else {
throw (new Error("Error during the replacement of the password"));
}
});
/**
 * Find the first password for the `service` in the keychain.
 */
utils.keychain.find_password = (function utils$keychain$find_password(service){
var password = utils.keychain.keytar.findPassword(service);
if((password == null)){
throw (new Error("Error retrieving the password"));
} else {
return password;
}
});

//# sourceMappingURL=keychain.js.map