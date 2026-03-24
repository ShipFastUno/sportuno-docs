import { generateFiles } from 'fumadocs-openapi';
import { createOpenAPI } from 'fumadocs-openapi/server';

const openapi = createOpenAPI({
  input: ['./openapi/edge-api.json'],
});

void generateFiles({
  input: openapi,
  output: './content/docs/api-reference',
  per: 'operation',
  includeDescription: true,
});
