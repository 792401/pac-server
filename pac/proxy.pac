function FindProxyForURL(url, host) {
  PROXY = "PROXY 127.0.0.1:8080"

  if (shExpMatch(host, "*google-analytics.com*")) {
    return PROXY;
  }

  return "DIRECT";
}