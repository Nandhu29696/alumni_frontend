module.exports = [
"[project]/app/forgot-password/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ForgotPasswordPage
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
function ForgotPasswordPage() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        email: '',
        otp: '',
        new_password: ''
    });
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function requestOtp(event) {
        event?.preventDefault();
        setBusy(true);
        setMessage('');
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestPasswordOtp"])(form.email);
            setSent(true);
            setMessage('If that email is registered, an OTP has been sent.');
        } catch (error) {
            setMessage(error.message);
        } finally{
            setBusy(false);
        }
    }
    async function reset(event) {
        event.preventDefault();
        setBusy(true);
        setMessage('');
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetPassword"])(form);
            setMessage('Password reset successfully. Redirecting to sign in...');
            setTimeout(()=>window.location.assign('/login'), 1200);
        } catch (error) {
            setMessage(error.message);
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
                            fileName: "[project]/app/forgot-password/page.jsx",
                            lineNumber: 14,
                            columnNumber: 97
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Alumni",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/app/forgot-password/page.jsx",
                                    lineNumber: 14,
                                    columnNumber: 151
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Meet"
                                }, void 0, false, {
                                    fileName: "[project]/app/forgot-password/page.jsx",
                                    lineNumber: 14,
                                    columnNumber: 157
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/forgot-password/page.jsx",
                            lineNumber: 14,
                            columnNumber: 139
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/forgot-password/page.jsx",
                    lineNumber: 14,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Reset password"
                }, void 0, false, {
                    fileName: "[project]/app/forgot-password/page.jsx",
                    lineNumber: 14,
                    columnNumber: 191
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Request a one-time code sent to your email."
                }, void 0, false, {
                    fileName: "[project]/app/forgot-password/page.jsx",
                    lineNumber: 14,
                    columnNumber: 214
                }, this),
                !sent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: requestOtp,
                    children: [
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
                                    fileName: "[project]/app/forgot-password/page.jsx",
                                    lineNumber: 14,
                                    columnNumber: 313
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/forgot-password/page.jsx",
                            lineNumber: 14,
                            columnNumber: 301
                        }, this),
                        message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "auth-error",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/app/forgot-password/page.jsx",
                            lineNumber: 14,
                            columnNumber: 453
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "auth-submit",
                            disabled: busy,
                            children: busy ? 'Sending...' : 'Send OTP'
                        }, void 0, false, {
                            fileName: "[project]/app/forgot-password/page.jsx",
                            lineNumber: 14,
                            columnNumber: 493
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/forgot-password/page.jsx",
                    lineNumber: 14,
                    columnNumber: 273
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: reset,
                    children: [
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
                                    fileName: "[project]/app/forgot-password/page.jsx",
                                    lineNumber: 14,
                                    columnNumber: 629
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/forgot-password/page.jsx",
                            lineNumber: 14,
                            columnNumber: 617
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "otp-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "OTP",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            inputMode: "numeric",
                                            pattern: "[0-9]{6}",
                                            minLength: "6",
                                            maxLength: "6",
                                            required: true,
                                            value: form.otp,
                                            onChange: (event)=>setForm({
                                                    ...form,
                                                    otp: event.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/app/forgot-password/page.jsx",
                                            lineNumber: 14,
                                            columnNumber: 796
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/forgot-password/page.jsx",
                                    lineNumber: 14,
                                    columnNumber: 786
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "resend-button",
                                    onClick: ()=>requestOtp(),
                                    disabled: busy,
                                    children: "Resend OTP"
                                }, void 0, false, {
                                    fileName: "[project]/app/forgot-password/page.jsx",
                                    lineNumber: 14,
                                    columnNumber: 974
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/forgot-password/page.jsx",
                            lineNumber: 14,
                            columnNumber: 757
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "New password",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    minLength: "8",
                                    required: true,
                                    value: form.new_password,
                                    onChange: (event)=>setForm({
                                            ...form,
                                            new_password: event.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/app/forgot-password/page.jsx",
                                    lineNumber: 14,
                                    columnNumber: 1111
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/forgot-password/page.jsx",
                            lineNumber: 14,
                            columnNumber: 1092
                        }, this),
                        message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: message.includes('successfully') || message.includes('sent') ? 'saved-note' : 'auth-error',
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/app/forgot-password/page.jsx",
                            lineNumber: 14,
                            columnNumber: 1282
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "auth-submit",
                            disabled: busy,
                            children: busy ? 'Resetting...' : 'Reset password'
                        }, void 0, false, {
                            fileName: "[project]/app/forgot-password/page.jsx",
                            lineNumber: 14,
                            columnNumber: 1402
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/forgot-password/page.jsx",
                    lineNumber: 14,
                    columnNumber: 594
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "auth-link",
                    href: "/login",
                    children: "Back to sign in"
                }, void 0, false, {
                    fileName: "[project]/app/forgot-password/page.jsx",
                    lineNumber: 14,
                    columnNumber: 1509
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/forgot-password/page.jsx",
            lineNumber: 14,
            columnNumber: 39
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/forgot-password/page.jsx",
        lineNumber: 14,
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
function normalizeApiBase(value) {
    const fallback = 'https://alumnibackendapi.vercel.app/api';
    const raw = (value || fallback).trim();
    try {
        const url = new URL(raw);
        let path = (url.pathname || '').replace(/\/+$/, '');
        path = path.replace(/\/auth\/login$/i, '');
        if (!path || path === '/') path = '/api';
        return `${url.origin}${path}`;
    } catch  {
        return fallback;
    }
}
const API_URL = normalizeApiBase(("TURBOPACK compile-time value", "https://alumnibackendapi.vercel.app/api"));
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
    const contentType = response.headers?.get?.('content-type') || '';
    const hasJsonReader = typeof response.json === 'function';
    const hasTextReader = typeof response.text === 'function';
    const isJson = contentType.includes('application/json') || hasJsonReader && !hasTextReader;
    const data = isJson ? await response.json().catch(()=>({})) : hasTextReader ? await response.text() : {};
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

//# sourceMappingURL=_0gfsh2y._.js.map