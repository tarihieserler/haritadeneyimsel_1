import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 3000;
const files = new Map([
  ['/', 'index.html'],
  ['/index.html', 'index.html'],
  ['/style.css', 'style.css'],
  ['/app.js', 'app.js'],
]);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };

http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400).end('Geçersiz adres');
    return;
  }
  const filename = files.get(pathname);
  if (!filename) {
    res.writeHead(404).end('Bulunamadı');
    return;
  }
  fs.readFile(path.join(root, filename), (error, body) => {
    if (error) {
      res.writeHead(500).end('Dosya okunamadı');
      return;
    }
    res.setHeader('Content-Type', types[path.extname(filename)]);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.end(body);
  });
}).listen(port, '0.0.0.0', () => console.log(`Miras Atlası: http://localhost:${port}`));
