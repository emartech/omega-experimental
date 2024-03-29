const allPages = [

    {
        id: 'overview',
        name: 'Overview',
        path: '/'
    },

    {
        id: 'analytics',
        name: 'Analytics',
        path: '/area/analytics'
    },

    {
        id: 'automation',
        name: 'Automation',
        path: '/area/automation'
    },

    {
        id: 'channels',
        name: 'Channels',
        path: '/area/channels'
    },

    {
        id: 'cdp',
        name: 'Customer Data Platform',
        path: '/area/cdp'
    },    

    {
        id: 'eme',
        name: 'Enhanced Marketer Experience',
        path: '/area/eme'
    },    
    
    {
        id: 'pcm',
        name: 'Personalized Content Management',        
        path: '/area/pcm'
    }

]


const areaOrderInBackend = ['cdp', 'analytics', 'automation', 'channels', 'eme', 'pcm']

export { allPages, areaOrderInBackend }