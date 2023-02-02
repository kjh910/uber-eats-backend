import { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
   schema: 'http://localhost:10041/graphql',
   documents: ['./src/**/*.{tsx,ts}'],
   overwrite:true,
   generates: {
      './src/__generated__/index.ts': {
         documents: ['./src/**/*.{tsx,ts}'],
         plugins: [
            'typescript',
            'typescript-operations',
            'typescript-react-query'
         ],
         config:{
            fetcher: 'graphql-request',
            isReactHook: true,
            exposeQueryKeys: true,
         }
      }
   }
};
 
export default config;