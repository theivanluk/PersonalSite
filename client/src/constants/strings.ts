export const sanityQuery = (queryType: string): string => `*[_type == "${queryType}"]`;

export const serverEndpoint = (endpoint: string): string => `${process.env.REACT_APP_SERVER_URL}/${endpoint}`;

export const resumeLink = "https://github.com/theivanluk/PersonalSite/raw/main/Ivan_Luk_Resume.pdf";