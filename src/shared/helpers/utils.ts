import {parseXmlToJson} from "@shared/helpers";

export const isJsonOrJsonString = (target : any) : boolean => {
    // if (typeof target == 'object')
    try {
        JSON.parse(target);
    } catch (e) {
        return false;
    }
    return true;
}

export const getJsonOrXml = (response: any,data : any ) => {
    switch (true){
        case (response?.headers && response?.headers['content-type'].includes('application/xml')):
            return  parseXmlToJson(data);
        case (typeof data == "object"):
            return data;
        case (typeof data == "string" && isJsonOrJsonString(data)):
            return JSON.parse(data);
        case (typeof parseXmlToJson(data) == "object" && JSON.stringify(data) !== '{}' ):
            return  parseXmlToJson(data);
        default :
            return null;
    }
}

