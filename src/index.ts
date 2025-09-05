import { Container, getRandom } from "@cloudflare/containers";

export class Backend extends Container {
  defaultPort = 8080;
}

export default {
  async fetch(
    request: Request,
    env: { BACKEND: DurableObjectNamespace<Backend> }
  ): Promise<Response> {
    const containerInstance = await getRandom(env.BACKEND);
    return containerInstance.fetch(request);
  },
};
