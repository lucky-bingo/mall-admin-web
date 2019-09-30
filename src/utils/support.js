import Cookies from "js-cookie";
const SupportKey='supportKey';
export function getSupport() {
  // return Cookies.get(SupportKey)
  return true;
}

export function setSupport(isSupport) {
  // return Cookies.set(SupportKey, isSupport,{ expires: 0 })
  return Cookies.set(SupportKey, true,{ expires: 0 })
}
