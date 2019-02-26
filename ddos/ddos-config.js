const DDDoS = require('dddos');
module.exports = new DDDoS({
                        errorData: "Hãy bình tĩnh, đợi tý đi!",
                        //Data to be passes to the client on DDoS detection. Default: "Not so fast!".
                        errorCode: 429,
                        //HTTP error code to be set on DDoS detection. Default: 429 (Too Many Requests)
                        weight: 1,
                        maxWeight: 16,
                        checkInterval: 1000,
                        rules: [
                            { //cho phep 1 yeu cau / 1 giay
                                string: '/',
                                maxWeight: 1,
                                queueSize: 1
                            },
                            //nhung duong dan /json-form/* se bi han che 1 phien tren 1 giay
                            {   regexp: "^/json-form/*",
                                flags: "i",
                                maxWeight: 1,
                                queueSize: 1 
                            },
                            { // Allow up to 16 other requests per check interval.
                                regexp: ".*",
                                maxWeight: 1,
                                queueSize: 1 
                            }
                        ]
                    })
;
  