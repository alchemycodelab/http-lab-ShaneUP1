module.exports = rawRequest => {

    const methodAndPathArray = rawRequest.split(' ');
    const bodyArray = rawRequest.split('\r\n');


    if (bodyArray.length > 1) {
        return {
            method: methodAndPathArray[0],
            path: methodAndPathArray[1],
            body: bodyArray[bodyArray.length - 1]
        };
    } else {
        return {
            method: methodAndPathArray[0],
            path: methodAndPathArray[1]
        };
    }

};
