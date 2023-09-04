/*
 * @Descripttion:
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
import CryptoJS from "crypto-js";

export default function encode(str: string) {
  const message = CryptoJS.enc.Utf8.parse(str)
  const secretPassphrase = CryptoJS.enc.Utf8.parse('demo')
  const iv = CryptoJS.enc.Utf8.parse('demo')

  const encrypted = CryptoJS.AES.encrypt(message, secretPassphrase, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv
  }).toString()
  return encrypted;
}
