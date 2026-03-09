let obj = JSON.parse($response.body);

obj.subscriber.subscriptions = {
 "gold": {
  "expires_date": "2099-12-31T00:00:00Z",
  "purchase_date": "2023-01-01T00:00:00Z"
 }
};

obj.subscriber.entitlements = {
 "gold": {
  "product_identifier": "gold",
  "expires_date": "2099-12-31T00:00:00Z"
 }
};

$done({body: JSON.stringify(obj)});
