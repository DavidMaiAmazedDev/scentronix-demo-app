// the test file
import axios from 'axios';
import { findServer } from './serverAssessment';

jest.mock('axios');

const servers = [
  { url: 'https://does-not-work.perfume.new', priority: 1 },
  { url: 'https://gitlab.com', priority: 4 },
  { url: 'http://app.scnt.me', priority: 3 },
  { url: 'https://offline.scentronix.com', priority: 2 }
];

describe('findServer', () => {
  it('should return server with the lowest priority', async () => {
    const mockGet = jest.spyOn(axios, 'get');
    mockGet.mockResolvedValue({ status: 200 }); // Mock a successful response

    const server = await findServer(servers);
    expect(server.url).toBe('https://does-not-work.perfume.new');

    mockGet.mockRestore(); // Restore the original axios.get method
  });

  it('should throw an error if no servers are online', async () => {
    const mockGet = jest.spyOn(axios, 'get');
    mockGet.mockRejectedValue(new Error('Network Error')); // Mock a failed response

    await expect(findServer(servers)).rejects.toThrow('No servers are online');

    mockGet.mockRestore(); // Restore the original axios.get method
  });
});
