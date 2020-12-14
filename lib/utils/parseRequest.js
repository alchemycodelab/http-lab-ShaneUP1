module.exports = rawRequest => {

    const methodAndPathArray = rawRequest.split(' ');
    const bodyArray = rawRequest.split('\r\n');

    return {
        method: methodAndPathArray[0],
        path: methodAndPathArray[1],
        body: bodyArray[2]
    };

};
