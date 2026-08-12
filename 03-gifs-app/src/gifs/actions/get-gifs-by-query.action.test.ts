import { beforeEach, describe, expect, test, vi } from 'vitest';
import { getGifsByQuery } from './get-gifs-by-query.action';

import MockAdapter from 'axios-mock-adapter';
import { giphyApi } from './api/giphy.api';
import { gifphyResponseMock } from '../../tests/mocks';
import { act, renderHook } from '@testing-library/react';
import { useGifs } from '../hooks/useGifs';

describe('getGifsByQuery', () => {

    // test('should return an array of gifs', async () => {

    //     const gifs = await getGifsByQuery('goku');

    //     const [gif1] = gifs;

    //     console.log(gif1);

    //     expect(gif1).toEqual({
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         width: expect.any(Number),
    //         height: expect.any(Number),
    //     });

    // });

    const mock = new MockAdapter(giphyApi).onGet('/search').reply(200, gifphyResponseMock);

    beforeEach(() => {
        mock.resetHistory();
    });

    test('should return an List of gifs', async () => {

        const gifs = await getGifsByQuery('goku');

        expect(gifs.length).toBe(10);

    });

    test('should return an empty list of gifs if the query is empty', async () => {

        const mock = new MockAdapter(giphyApi).onGet('/search').reply(200, { data: [] });

        const gifs = await getGifsByQuery('');

        // console.log(gifs);

        expect(gifs.length).toBe(0);

    });

    test('should handle error when the API returns an error', async () => {

        // mejorando la prueba con espia (spy)
        vi.spyOn(console, 'error').mockImplementation(() => {
            console.log('console.error called');
        });


        const mock = new MockAdapter(giphyApi);

        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad Request',
            }
        });

        const gifs = await getGifsByQuery('goku');

        expect(gifs.length).toBe(0);
        expect(console.error).toHaveBeenCalled();
        expect(console.error).toHaveBeenCalledWith('Error fetching gifs:', expect.anything());

    });

})