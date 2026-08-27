module.exports = [
"[project]/app/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var e = new Error("Could not parse module '[project]/app/page.jsx'\n\nawait isn't allowed in non-async function");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/services/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminEvents",
    ()=>adminEvents,
    "adminPeople",
    ()=>adminPeople,
    "apiRequest",
    ()=>apiRequest,
    "deleteEvent",
    ()=>deleteEvent,
    "deletePerson",
    ()=>deletePerson,
    "getAlumni",
    ()=>getAlumni,
    "getEvents",
    ()=>getEvents,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "refreshSession",
    ()=>refreshSession,
    "registerAccount",
    ()=>registerAccount,
    "rsvp",
    ()=>rsvp,
    "updateProfile",
    ()=>updateProfile
]);
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
async function apiRequest(path, options = {}) {
    const method = (options.method || 'GET').toUpperCase();
    let csrfToken = typeof document !== 'undefined' ? document.cookie.split('; ').find((item)=>item.startsWith('csrftoken='))?.split('=')[1] : null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const response = await fetch(`${API_URL}${path}`, {
        ...options,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...csrfToken ? {
                'X-CSRFToken': csrfToken
            } : {},
            ...options.headers
        }
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || 'Request failed');
    return data;
}
async function refreshSession() {
    return apiRequest('/auth/refresh/', {
        method: 'POST'
    });
}
async function login(credentials) {
    return apiRequest('/auth/login/', {
        method: 'POST',
        body: JSON.stringify(credentials)
    });
}
async function registerAccount(details) {
    return apiRequest('/auth/register/', {
        method: 'POST',
        body: JSON.stringify(details)
    });
}
const logout = ()=>apiRequest('/auth/logout/', {
        method: 'POST'
    });
const getEvents = ()=>apiRequest('/events/');
const getAlumni = ()=>apiRequest('/alumni/');
const rsvp = (eventId)=>apiRequest(`/events/${eventId}/register/`, {
        method: 'POST'
    });
const updateProfile = (profile)=>apiRequest('/auth/profile/', {
        method: 'PUT',
        body: JSON.stringify(profile)
    });
const adminPeople = ()=>apiRequest('/admin/people/');
const adminEvents = (event)=>apiRequest('/events/', {
        method: 'POST',
        body: JSON.stringify(event)
    });
const deleteEvent = (eventId)=>apiRequest(`/admin/events/${eventId}/`, {
        method: 'DELETE'
    });
const deletePerson = (personId)=>apiRequest(`/admin/people/${personId}/`, {
        method: 'DELETE'
    });
}),
];

//# sourceMappingURL=_13yj1ym._.js.map