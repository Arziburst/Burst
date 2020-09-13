let token = '';

export const setAccessToken = (newToken: string) => {
    token = newToken;
};

export const getAccessToken = () => token;
