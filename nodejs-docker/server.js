import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
});

fastify.get('/', async function (request, reply) {
  return { hello: 'bumgu' }
});

try {
  fastify.listen({ port: 3000, host: '0.0.0.0'})
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
};
