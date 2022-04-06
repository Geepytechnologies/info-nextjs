import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'c53nutjk',
    dataset: 'production',
    apiVersion: '2022-03-31',
    useCdn: 'false'
})