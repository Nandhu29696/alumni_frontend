module.exports = [
"[project]/app/register/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function RegisterPage() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function submit(event) {
        event.preventDefault();
        setError('');
        setBusy(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerAccount"])(form);
            window.location.assign('/login');
        } catch (err) {
            setError(err.message);
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "auth-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "auth-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "auth-logo",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "auth-logo-mark",
                            children: "AM"
                        }, void 0, false, {
                            fileName: "[project]/app/register/page.jsx",
                            lineNumber: 16,
                            columnNumber: 97
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Alumni",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/app/register/page.jsx",
                                    lineNumber: 16,
                                    columnNumber: 151
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Meet"
                                }, void 0, false, {
                                    fileName: "[project]/app/register/page.jsx",
                                    lineNumber: 16,
                                    columnNumber: 157
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/register/page.jsx",
                            lineNumber: 16,
                            columnNumber: 139
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/register/page.jsx",
                    lineNumber: 16,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Join the hallway"
                }, void 0, false, {
                    fileName: "[project]/app/register/page.jsx",
                    lineNumber: 16,
                    columnNumber: 191
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Create your alumni profile and start reconnecting."
                }, void 0, false, {
                    fileName: "[project]/app/register/page.jsx",
                    lineNumber: 16,
                    columnNumber: 216
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: submit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "Full name",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    required: true,
                                    minLength: "2",
                                    value: form.name,
                                    onChange: (event)=>setForm({
                                            ...form,
                                            name: event.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/register/page.jsx",
                                    lineNumber: 16,
                                    columnNumber: 313
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/register/page.jsx",
                            lineNumber: 16,
                            columnNumber: 297
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "Email",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    required: true,
                                    value: form.email,
                                    onChange: (event)=>setForm({
                                            ...form,
                                            email: event.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/register/page.jsx",
                                    lineNumber: 16,
                                    columnNumber: 452
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/register/page.jsx",
                            lineNumber: 16,
                            columnNumber: 440
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "Password",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    required: true,
                                    minLength: "8",
                                    value: form.password,
                                    onChange: (event)=>setForm({
                                            ...form,
                                            password: event.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/register/page.jsx",
                                    lineNumber: 16,
                                    columnNumber: 595
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/register/page.jsx",
                            lineNumber: 16,
                            columnNumber: 580
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "auth-error",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/register/page.jsx",
                            lineNumber: 16,
                            columnNumber: 756
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "auth-submit",
                            disabled: busy,
                            children: busy ? 'Creating account...' : 'Create account'
                        }, void 0, false, {
                            fileName: "[project]/app/register/page.jsx",
                            lineNumber: 16,
                            columnNumber: 794
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/register/page.jsx",
                    lineNumber: 16,
                    columnNumber: 273
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "auth-link",
                    href: "/login",
                    children: "Already have an account? Sign in"
                }, void 0, false, {
                    fileName: "[project]/app/register/page.jsx",
                    lineNumber: 16,
                    columnNumber: 907
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/register/page.jsx",
            lineNumber: 16,
            columnNumber: 39
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/register/page.jsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
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
    "cancelRsvp",
    ()=>cancelRsvp,
    "changePassword",
    ()=>changePassword,
    "checkIn",
    ()=>checkIn,
    "deleteEvent",
    ()=>deleteEvent,
    "deletePerson",
    ()=>deletePerson,
    "downloadAttendanceCsv",
    ()=>downloadAttendanceCsv,
    "getAlumni",
    ()=>getAlumni,
    "getAlumniProfile",
    ()=>getAlumniProfile,
    "getAnalytics",
    ()=>getAnalytics,
    "getAttendance",
    ()=>getAttendance,
    "getEvent",
    ()=>getEvent,
    "getEvents",
    ()=>getEvents,
    "getMyEvents",
    ()=>getMyEvents,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "refreshSession",
    ()=>refreshSession,
    "registerAccount",
    ()=>registerAccount,
    "requestPasswordOtp",
    ()=>requestPasswordOtp,
    "resetPassword",
    ()=>resetPassword,
    "rsvp",
    ()=>rsvp,
    "updateEvent",
    ()=>updateEvent,
    "updatePerson",
    ()=>updatePerson,
    "updateProfile",
    ()=>updateProfile,
    "uploadEventBanner",
    ()=>uploadEventBanner,
    "uploadProfileImages",
    ()=>uploadProfileImages
]);
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
async function apiRequest(path, options = {}) {
    const { _retried, ...requestOptions } = options;
    const method = (options.method || 'GET').toUpperCase();
    let csrfToken = typeof document !== 'undefined' ? document.cookie.split('; ').find((item)=>item.startsWith('csrftoken='))?.split('=')[1] : null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const isFormData = typeof FormData !== 'undefined' && requestOptions.body instanceof FormData;
    const response = await fetch(`${API_URL}${path}`, {
        ...requestOptions,
        credentials: 'include',
        headers: {
            ...isFormData ? {} : {
                'Content-Type': 'application/json'
            },
            ...csrfToken ? {
                'X-CSRFToken': csrfToken
            } : {},
            ...requestOptions.headers
        }
    });
    if (response.status === 401 && !_retried && path !== '/auth/refresh/') {
        const refreshResponse = await fetch(`${API_URL}/auth/refresh/`, {
            method: 'POST',
            credentials: 'include',
            headers: csrfToken ? {
                'X-CSRFToken': csrfToken
            } : undefined
        });
        if (refreshResponse.ok) {
            return apiRequest(path, {
                ...requestOptions,
                _retried: true
            });
        }
    }
    if (response.status === 204 || response.status === 205) {
        return {};
    }
    const contentType = response.headers.get('content-type') || '';
    const isJson = contentType.includes('application/json');
    const data = isJson ? await response.json().catch(()=>({})) : await response.text();
    if (!response.ok) {
        if (isJson && data && typeof data === 'object') throw new Error(data.detail || 'Request failed');
        throw new Error(typeof data === 'string' && data.trim() || 'Request failed');
    }
    return isJson ? data : {
        value: data
    };
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
const requestPasswordOtp = (email)=>apiRequest('/auth/password/forgot/', {
        method: 'POST',
        body: JSON.stringify({
            email
        })
    });
const resetPassword = (details)=>apiRequest('/auth/password/reset/', {
        method: 'POST',
        body: JSON.stringify(details)
    });
const changePassword = (details)=>apiRequest('/auth/password/change/', {
        method: 'POST',
        body: JSON.stringify(details)
    });
async function registerAccount(details) {
    return apiRequest('/auth/register/', {
        method: 'POST',
        body: JSON.stringify(details)
    });
}
const logout = ()=>apiRequest('/auth/logout/', {
        method: 'POST'
    });
const getEvents = (params = {})=>{
    const query = new URLSearchParams(Object.entries(params).filter(([, value])=>value));
    return apiRequest(`/events/${query.toString() ? `?${query}` : ''}`);
};
const getEvent = (eventId)=>apiRequest(`/events/${eventId}/`);
const getAlumni = (page = 1)=>apiRequest(`/alumni/?page=${page}`);
const getAlumniProfile = (personId)=>apiRequest(`/alumni/${personId}/`);
const rsvp = (eventId)=>apiRequest(`/events/${eventId}/register/`, {
        method: 'POST'
    });
const cancelRsvp = (eventId)=>apiRequest(`/events/${eventId}/register/`, {
        method: 'POST',
        body: JSON.stringify({
            status: 'cancelled'
        })
    });
const getMyEvents = ()=>apiRequest('/my-events/');
const getAttendance = ()=>apiRequest('/admin/attendance/');
const getAnalytics = ()=>apiRequest('/admin/analytics/');
const updatePerson = (personId, person)=>apiRequest(`/admin/people/${personId}/`, {
        method: 'PUT',
        body: JSON.stringify(person)
    });
async function downloadAttendanceCsv() {
    const response = await fetch(`${API_URL}/admin/attendance/?download=csv`, {
        credentials: 'include'
    });
    if (!response.ok) {
        const data = await response.json().catch(()=>({}));
        throw new Error(data.detail || 'Attendance export failed');
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'attendance.csv';
    link.click();
    URL.revokeObjectURL(url);
}
const checkIn = (token)=>apiRequest('/admin/events/check-in/', {
        method: 'POST',
        body: JSON.stringify({
            token
        })
    });
const updateProfile = (profile)=>apiRequest('/auth/profile/', {
        method: 'PUT',
        body: JSON.stringify(profile)
    });
const uploadProfileImages = (files)=>{
    const form = new FormData();
    Object.entries(files).forEach(([name, file])=>{
        if (file) form.append(name, file);
    });
    return apiRequest('/auth/profile/images/', {
        method: 'POST',
        body: form
    });
};
const adminPeople = ()=>apiRequest('/admin/people/');
const adminEvents = (event)=>apiRequest('/events/', {
        method: 'POST',
        body: JSON.stringify(event)
    });
const updateEvent = (eventId, event)=>apiRequest(`/admin/events/${eventId}/`, {
        method: 'PUT',
        body: JSON.stringify(event)
    });
const uploadEventBanner = (file)=>{
    const form = new FormData();
    form.append('banner_image', file);
    return apiRequest('/admin/events/upload-banner/', {
        method: 'POST',
        body: form
    });
};
const deleteEvent = (eventId)=>apiRequest(`/admin/events/${eventId}/`, {
        method: 'DELETE'
    });
const deletePerson = (personId)=>apiRequest(`/admin/people/${personId}/`, {
        method: 'DELETE'
    });
}),
];

//# sourceMappingURL=_1l6w-4y._.js.map