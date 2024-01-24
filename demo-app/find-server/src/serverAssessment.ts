import axios from 'axios';

interface Server {
  url: string;
  priority: number;
}

export async function findServer(servers: Server[]): Promise<Server> {
  const promises = servers.map(async (server) => {
    try {
      const response = await axios.get(server.url, { timeout: 10000 });
      if (response.status >= 200 && response.status < 300) {
        return server;
      }
    } catch (error) {
      // Ignore the error and continue
    }
  });

  const onlineServers = await Promise.all(promises.filter(Boolean)) as Server[];
  console.log(onlineServers)
  if (onlineServers.length === 0 || onlineServers.some(element => element === undefined)) {
    throw new Error('No servers are online');
  }

  onlineServers.sort((a, b) => a.priority - b.priority);
  return onlineServers[0];
}
