import { describe, expect, test } from 'vitest';
import { giphyApi } from './giphy.api';

describe('giphyApi', () => {

    test('should have the correct baseURL and params', () => {

        console.log(giphyApi.defaults); // logs

        const baseURL = giphyApi.defaults.baseURL;
        const params = giphyApi.defaults.params;

        expect(baseURL).toBe('https://api.giphy.com/v1/gifs');
        expect(params).toEqual({
            lang: 'es',
            api_key: import.meta.env.VITE_GIPHY_API_KEY
        });

    });

});