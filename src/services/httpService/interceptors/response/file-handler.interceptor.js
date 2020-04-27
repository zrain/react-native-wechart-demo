const isFileDownLoad = function( response ){
    const { headers } = response;
    const contentType = headers && headers['content-type'];
    const contentDisposition = headers && headers['content-disposition'];
    if( contentType && contentType.indexOf('application/csv') !== -1){
        return 'application/csv';
    }
    if( contentType && contentType.indexOf('application/vnd.ms-excel') !== -1){
        return 'application/vnd.ms-excel';
    }
    if( contentType && contentType.indexOf('octet-stream') !== -1 ){
        return true;
    }
    if( contentDisposition && contentDisposition.indexOf('attachment') !== -1 ){
        return true;
    }
    return false;
}

const isCsv = ( response ) => {
    const { headers } = response;
    const contentType = headers && headers['content-type'];
    if( contentType && contentType.indexOf('application/csv') !== -1){
        return true;
    }
}

const getFileName = ( response ) => {
    const { headers } = response;
    const contentDisposition = headers && headers['content-disposition'];
    // eslint-disable-next-line no-useless-escape)
    const result = contentDisposition && contentDisposition.match(/filename\s*=\s*\"([^\"]*)\"/);
    return result && result.length && result[1];
}

const fileHandlerInterceptor = [
    function(response){
        let isFile = isFileDownLoad(response);
        if( response && isFile ){
            try {
                let fileName = getFileName(response);
                const link = document.createElement("a");
                let blob;
                if( isFile === 'application/csv'){
                    blob = new Blob(["\ufeff" + response.data], {type: 'text/csv'});
                    fileName = fileName ? fileName : new Date().getTime().toString() + '.csv';
                }
                if( isFile === 'application/vnd.ms-excel'){
                    blob = new Blob([response.data], {type: 'application/vnd.ms-excel'});
                    fileName = fileName ? fileName : new Date().getTime().toString() + '.xls';
                }
                if( blob ){
                    link.setAttribute("href", URL.createObjectURL(blob));
                    link.setAttribute("download", fileName);
                    link.click();
                }
            } catch (err) {
                // Errors are thrown for bad options, or if the data is empty and no fields are provided.
                // Be sure to provide fields if it is possible that your data array will be empty.
                console.error(err);
            }
        }
        return response;
    },
    function( error ){
        return error;
    }
]

export default fileHandlerInterceptor;
