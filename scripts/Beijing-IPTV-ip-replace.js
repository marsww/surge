let body = $response.body;
body = body.replaceAll('192.168.123.1', '10.0.1.1')
$notification.post("Beijing-IPTV-ip-replace", "success", "pull sucess")
$done({body})
