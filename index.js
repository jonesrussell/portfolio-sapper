const { createSapperServer } = require("./__sapper__/build/server/server"); // eslint-disable-line import/no-unresolved

const appPromise = createSapperServer();

exports.ssr = onRequest(async (...args) => { // eslint-disable-line no-undef
  const app = await appPromise;

  return app(...args);
});
