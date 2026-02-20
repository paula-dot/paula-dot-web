import path from 'path';
const mod = await import(path.resolve('api/contact.js'));
const req = { method: 'POST', body: { email: 'test@example.com', subject: 'hi', message: 'hello' } };
const res = {
  statusCode: 200,
  headers: {},
  status(code) { this.statusCode = code; return this; },
  setHeader(k, v) { this.headers[k] = v; },
  json(obj) { console.log('RES JSON', this.statusCode, obj); }
};
await mod.default(req, res);
