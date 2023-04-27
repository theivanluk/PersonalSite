export const sanityQuery = (queryType: string): string => `*[_type == "${queryType}"]`

export const serverEndpoint = (endpoint: string): string => `${process.env.REACT_APP_SERVER_URL}/${endpoint}`