const client = require('../../models/source_type/source_type.model');

exports.createNewSourceType = (requestData, result) => {
    client.index({
        index: 'source_type',
        type: 'source_type',
        body: {
            'ip': requestData.body.ip,
            'os': requestData.body.os,
            'category': requestData.body.category,
            'description': requestData.body.description
        }
    },function(error, response, status) {
        if (error) result.send(response, status)
        if (response) result.send(response, status)
    });
}

exports.listSourceType = (requestData, result) => {
    client.search({
        index: 'source_type',
        type: 'source_type',
        body: {
            query: {
                "match_all": {}
            }
        }
    }, function getMoreUntilDone(error, response, status) {
        if (error) result.send(error, status)
        if (response) result.send(response.hits, status)
    });
}

exports.updateSourceTypeId = (requestData, result) => {
    client.update({
        index: "source_type",
        type: "source_type",
        id: requestData.body.id,
        body: {
            // put the partial document under the `doc` key
            doc: {
                'ip': requestData.body.ip,
                'os': requestData.body.os,
                'category': requestData.body.category,
                'description': requestData.body.description
            }
        }
    }, function getMoreUntilDone(error, response, status) {
        if (error) result.send(error, status)
        if (response) result.send(response, status)
    });
}

exports.deleteSourceTypeId = (requestData, result) => {
    client.delete({
        index: 'source_type',
        type: 'source_type',
        id: requestData.body.id,
    }, function getMoreUntilDone(error, response) {
        if (error) result.send(error)
        if (response) result.send(response)
    });
}

exports.searchWithIp = (requestData, result) => {
    client.search({
        index: 'source_type',
        type: 'source_type',
        body: {
            query: {
                match: { 'ip': requestData.body.ip },
            },
        }
    }, function getMoreUntilDone(error, response, status) {
        if (error) result.send(error, status)
        if (response) result.send(response.hits, status)
    });
}
