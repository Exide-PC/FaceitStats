

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

const _fetch = async<T> (uri: string, method: HTTPMethod = "GET", data?: object): Promise<T> => {
    const encodedURI = encodeURI(uri);
    const fullURI = data && method === 'GET' ? `${encodedURI}?${objectToUrlQuery(data)}` : encodedURI;

    const response = await fetch(fullURI, {
        method,
        body: method !== 'GET' ? JSON.stringify(data) : undefined,
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    });

    if (response.ok) {
        const result = await response.text();
        return JSON.parse(result) as T;
    }

    switch (response.status) {
        case 404:
            throw new ApiException(method, 'Object not found');
        case 500:
            throw new ApiException(method, 'Internal server error');
        case 403:
            throw new ApiException(method, 'Forbidden');
        case 401:
            window.location.reload();
            throw new ApiException(method, 'Unauthorized');
        default:
            throw new ApiException(method, 'An error has occurred');
    }
}

class ApiException extends Error {
    public httpMethod: HTTPMethod;

    public constructor(httpMethod: HTTPMethod, message: string | null | undefined) 
    {
        super(message || "Unknown error");
        this.httpMethod = httpMethod;
    }

    public toString() : string {
        return this.message;
    }
}

function objectToUrlQuery(obj: any): string {
    let list = Object
        .keys(obj)
        .map(key => obj[key] === undefined || obj[key] === null ? undefined : `${encodeURI(key)}=${encodeURIComponent(obj[key].toString())}`)
        .filter(s => s);
    return list.join("&");
}

export { _fetch, ApiException};
export default _fetch;