export async function handle({event, resolve}){

    if (event.url.pathname === '/bears'){
        const allowedOrigins : string[] = ['localhost:4173', 'localhost:5173'];
        const requestOrigin : string | null = event.request.headers.get('Host');

        if (requestOrigin && !allowedOrigins.includes(requestOrigin)){
            return new Response('Forbidden: Invalid origin', {
                status: 403,
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
        }

        const response = await resolve(event);

        if (requestOrigin) {
            response.headers.set('Access-Control-Allow-Origin', requestOrigin);
            response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        }

        return response;
    }
    return await resolve(event);
}