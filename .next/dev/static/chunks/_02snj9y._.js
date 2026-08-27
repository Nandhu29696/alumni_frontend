(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../components/AdminScreen'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DirectoryScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DirectoryScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EventsScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EventsScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EventDetailScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EventDetailScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Overview$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Overview.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProfileScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProfileScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shell$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Shell.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const tabs = [
    [
        'Overview',
        '◒'
    ],
    [
        'Alumni directory',
        '◌'
    ],
    [
        'Events',
        '▣'
    ],
    [
        'My profile',
        '◉'
    ]
];
function timeGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
}
function todayLabel() {
    return new Intl.DateTimeFormat('en', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date()).toUpperCase();
}
function Home() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Overview');
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [people, setPeople] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [registered, setRegistered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: 'Member'
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedEvent, setSelectedEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            ({
                "Home.useEffect": async ()=>{
                    try {
                        let profile;
                        try {
                            profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])('/auth/profile/');
                        } catch  {
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refreshSession"])();
                            profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])('/auth/profile/');
                        }
                        setUser(profile);
                        const [peopleData, eventsData, mine] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlumni"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEvents"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])('/my-events/')
                        ]);
                        setPeople(peopleData.results.filter({
                            "Home.useEffect": (item)=>item.role !== 'super_admin'
                        }["Home.useEffect"]));
                        setEvents(eventsData.results);
                        setRegistered(mine.results.filter({
                            "Home.useEffect": (item)=>item.status === 'registered'
                        }["Home.useEffect"]).map({
                            "Home.useEffect": (item)=>item.event_id
                        }["Home.useEffect"]));
                    } catch  {
                        window.location.assign('/login');
                    } finally{
                        setLoading(false);
                    }
                }
            })["Home.useEffect"]();
        }
    }["Home.useEffect"], []);
    async function saveProfile(profile) {
        setUser(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProfile"])(profile));
    }
    async function openEvent(event) {
        try {
            setSelectedEvent(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEvent"])(event.id));
        } catch  {
            setSelectedEvent(event);
        }
    }
    async function registerFor(event) {
        setSelectedEvent(event);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rsvp"])(event.id);
            setRegistered((current)=>current.includes(event.id) ? current : [
                    ...current,
                    event.id
                ]);
            setSelectedEvent((current)=>current ? {
                    ...current,
                    is_registered: true,
                    participant_count: (current.participant_count || 0) + 1,
                    remaining_capacity: Math.max(0, (current.remaining_capacity ?? current.capacity ?? 100) - 1)
                } : current);
        } catch (error) {
            if (error.message.includes('Authentication')) window.location.assign('/login');
        }
    }
    async function createEvent(event) {
        const created = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminEvents"])(event);
        setEvents((current)=>[
                created,
                ...current
            ]);
    }
    async function removeEvent(id) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteEvent"])(id);
        setEvents((current)=>current.filter((event)=>event.id !== id));
    }
    async function removePerson(id) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deletePerson"])(id);
        setPeople((current)=>current.filter((person)=>person.user_id !== id && person.id !== id));
    }
    const admin = user.role === 'admin' || user.role === 'super_admin';
    const navTabs = admin ? [
        ...tabs,
        [
            'Admin console',
            '◆'
        ]
    ] : tabs;
    const title = active === 'Overview' ? `${timeGreeting()}, ${user.name?.split(' ')[0] || 'there'}` : active;
    let screen;
    if (selectedEvent) screen = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EventDetailScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        event: selectedEvent,
        registered: registered.includes(selectedEvent.id),
        onRsvp: registerFor,
        onBack: ()=>setSelectedEvent(null)
    }, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 61,
        columnNumber: 31
    }, this);
    else if (active === 'Overview') screen = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Overview$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        events: events,
        people: people,
        registered: registered,
        onRsvp: registerFor,
        onOpen: openEvent,
        setActive: setActive
    }, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 62,
        columnNumber: 44
    }, this);
    if (!selectedEvent && active === 'Events') screen = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EventsScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        events: events,
        registered: registered,
        onRsvp: registerFor,
        onOpen: openEvent
    }, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 63,
        columnNumber: 55
    }, this);
    if (!selectedEvent && active === 'Alumni directory') screen = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DirectoryScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        people: people,
        query: query,
        setQuery: setQuery
    }, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 64,
        columnNumber: 65
    }, this);
    if (!selectedEvent && active === 'My profile') screen = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProfileScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        user: user,
        onSave: saveProfile
    }, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 65,
        columnNumber: 59
    }, this);
    if (!selectedEvent && active === 'Admin console' && admin) screen = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminScreen, {
        events: events,
        people: people,
        onCreateEvent: createEvent,
        onDeleteEvent: removeEvent,
        onDeletePerson: removePerson
    }, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 66,
        columnNumber: 71
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Shell$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        user: user,
        admin: admin,
        active: active,
        setActive: setActive,
        navTabs: navTabs,
        onSignOut: async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"])();
            window.location.assign('/login');
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "content",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "topbar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "kicker",
                                    children: todayLabel()
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 68,
                                    columnNumber: 238
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 68,
                                    columnNumber: 278
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 68,
                            columnNumber: 233
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "top-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "role-pill",
                                    children: admin ? 'ADMIN' : 'MEMBER'
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 68,
                                    columnNumber: 329
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "avatar avatar-small",
                                    children: user.name?.slice(0, 2).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 68,
                                    columnNumber: 392
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 68,
                            columnNumber: 300
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 68,
                    columnNumber: 206
                }, this),
                screen,
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loading-state",
                    role: "status",
                    "aria-live": "polite",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "loading-line"
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 68,
                            columnNumber: 574
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "loading-line short"
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 68,
                            columnNumber: 607
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "loading-card"
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 68,
                            columnNumber: 646
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 68,
                    columnNumber: 510
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 68,
            columnNumber: 177
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 68,
        columnNumber: 10
    }, this);
}
_s(Home, "DMiLn5tJSbZ5k7r+7Mi+YfygU+c=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DirectoryScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DirectoryScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function initials(name = '') {
    return name.split(' ').map((part)=>part[0]).join('').slice(0, 2).toUpperCase();
}
function DirectoryScreen({ people, query, setQuery }) {
    _s();
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DirectoryScreen.useMemo[filtered]": ()=>people.filter({
                "DirectoryScreen.useMemo[filtered]": (person)=>`${person.name} ${person.current_company} ${person.batch_year} ${person.location}`.toLowerCase().includes(query.toLowerCase())
            }["DirectoryScreen.useMemo[filtered]"])
    }["DirectoryScreen.useMemo[filtered]"], [
        people,
        query
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "screen-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-kicker",
                                children: "THE COMMUNITY"
                            }, void 0, false, {
                                fileName: "[project]/components/DirectoryScreen.jsx",
                                lineNumber: 7,
                                columnNumber: 49
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Find your people"
                            }, void 0, false, {
                                fileName: "[project]/components/DirectoryScreen.jsx",
                                lineNumber: 7,
                                columnNumber: 102
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Browse alumni by name, batch, workplace, or city."
                            }, void 0, false, {
                                fileName: "[project]/components/DirectoryScreen.jsx",
                                lineNumber: 7,
                                columnNumber: 127
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DirectoryScreen.jsx",
                        lineNumber: 7,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "search",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "⌕"
                            }, void 0, false, {
                                fileName: "[project]/components/DirectoryScreen.jsx",
                                lineNumber: 7,
                                columnNumber: 215
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: query,
                                onChange: (event)=>setQuery(event.target.value),
                                placeholder: "Search people"
                            }, void 0, false, {
                                fileName: "[project]/components/DirectoryScreen.jsx",
                                lineNumber: 7,
                                columnNumber: 229
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DirectoryScreen.jsx",
                        lineNumber: 7,
                        columnNumber: 189
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DirectoryScreen.jsx",
                lineNumber: 7,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "alumni-grid directory-grid",
                children: filtered.map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "alumni-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "avatar avatar-large teal",
                                children: initials(person.name)
                            }, void 0, false, {
                                fileName: "[project]/components/DirectoryScreen.jsx",
                                lineNumber: 7,
                                columnNumber: 479
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: person.name
                            }, void 0, false, {
                                fileName: "[project]/components/DirectoryScreen.jsx",
                                lineNumber: 7,
                                columnNumber: 550
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    person.job_title || 'Alumni member',
                                    person.current_company ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            " at ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: person.current_company
                                            }, void 0, false, {
                                                fileName: "[project]/components/DirectoryScreen.jsx",
                                                lineNumber: 7,
                                                columnNumber: 644
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DirectoryScreen.jsx",
                                        lineNumber: 7,
                                        columnNumber: 638
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DirectoryScreen.jsx",
                                lineNumber: 7,
                                columnNumber: 572
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "person-meta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Class of ",
                                            person.batch_year || '—'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DirectoryScreen.jsx",
                                        lineNumber: 7,
                                        columnNumber: 729
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: person.location || 'India'
                                    }, void 0, false, {
                                        fileName: "[project]/components/DirectoryScreen.jsx",
                                        lineNumber: 7,
                                        columnNumber: 777
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DirectoryScreen.jsx",
                                lineNumber: 7,
                                columnNumber: 700
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "connect-button",
                                children: "View profile ↗"
                            }, void 0, false, {
                                fileName: "[project]/components/DirectoryScreen.jsx",
                                lineNumber: 7,
                                columnNumber: 824
                            }, this)
                        ]
                    }, person.id || person.name, true, {
                        fileName: "[project]/components/DirectoryScreen.jsx",
                        lineNumber: 7,
                        columnNumber: 415
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/DirectoryScreen.jsx",
                lineNumber: 7,
                columnNumber: 345
            }, this),
            !filtered.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "empty-state",
                children: "No alumni match your search."
            }, void 0, false, {
                fileName: "[project]/components/DirectoryScreen.jsx",
                lineNumber: 7,
                columnNumber: 921
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DirectoryScreen.jsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_s(DirectoryScreen, "2uHcb/zWRevK0LrN0wam2fLVfYQ=");
_c = DirectoryScreen;
var _c;
__turbopack_context__.k.register(_c, "DirectoryScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/EventCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function EventCard({ event, registered, onRsvp, onDelete, onOpen, admin }) {
    const date = event.month ? event : (()=>{
        const value = new Date(event.date);
        return {
            month: value.toLocaleDateString('en', {
                month: 'short'
            }).toUpperCase(),
            day: value.getDate()
        };
    })();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "event-card",
        onClick: ()=>onOpen?.(event),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "date-tile",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: date.month
                    }, void 0, false, {
                        fileName: "[project]/components/EventCard.jsx",
                        lineNumber: 3,
                        columnNumber: 101
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: date.day
                    }, void 0, false, {
                        fileName: "[project]/components/EventCard.jsx",
                        lineNumber: 3,
                        columnNumber: 126
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/EventCard.jsx",
                lineNumber: 3,
                columnNumber: 74
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "event-copy",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tag",
                        children: event.event_type || event.type || 'COMMUNITY'
                    }, void 0, false, {
                        fileName: "[project]/components/EventCard.jsx",
                        lineNumber: 3,
                        columnNumber: 187
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: event.title
                    }, void 0, false, {
                        fileName: "[project]/components/EventCard.jsx",
                        lineNumber: 3,
                        columnNumber: 263
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: event.location || 'Location to be announced'
                    }, void 0, false, {
                        fileName: "[project]/components/EventCard.jsx",
                        lineNumber: 3,
                        columnNumber: 285
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "event-actions",
                        children: admin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rsvp-button danger",
                            onClick: (e)=>{
                                e.stopPropagation();
                                onDelete(event.id);
                            },
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/components/EventCard.jsx",
                            lineNumber: 3,
                            columnNumber: 378
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: registered ? 'rsvp-button registered' : 'rsvp-button',
                            onClick: (e)=>{
                                e.stopPropagation();
                                onRsvp(event);
                            },
                            children: [
                                registered ? '✓ Going' : 'RSVP now',
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "↗"
                                }, void 0, false, {
                                    fileName: "[project]/components/EventCard.jsx",
                                    lineNumber: 3,
                                    columnNumber: 666
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EventCard.jsx",
                            lineNumber: 3,
                            columnNumber: 497
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/EventCard.jsx",
                        lineNumber: 3,
                        columnNumber: 338
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/EventCard.jsx",
                lineNumber: 3,
                columnNumber: 159
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/EventCard.jsx",
        lineNumber: 3,
        columnNumber: 10
    }, this);
}
_c = EventCard;
var _c;
__turbopack_context__.k.register(_c, "EventCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/EventDetailScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventDetailScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function dateLabel(value) {
    return new Intl.DateTimeFormat('en', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    }).format(new Date(value));
}
function initials(name = '') {
    return name.split(' ').map((part)=>part[0]).join('').slice(0, 2).toUpperCase();
}
function EventDetailScreen({ event, registered, onRsvp, onBack }) {
    _s();
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function register() {
        if (registered || event.is_registered || busy) return;
        setBusy(true);
        await onRsvp(event);
        setBusy(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "event-detail-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "back-button",
                onClick: onBack,
                children: "← Back to events"
            }, void 0, false, {
                fileName: "[project]/components/EventDetailScreen.jsx",
                lineNumber: 17,
                columnNumber: 47
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "event-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: event.banner_image,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/components/EventDetailScreen.jsx",
                        lineNumber: 17,
                        columnNumber: 149
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "event-hero-overlay",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tag",
                                children: [
                                    event.event_type || 'OFFLINE',
                                    " · ",
                                    event.status || 'UPCOMING'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EventDetailScreen.jsx",
                                lineNumber: 17,
                                columnNumber: 224
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: event.title
                            }, void 0, false, {
                                fileName: "[project]/components/EventDetailScreen.jsx",
                                lineNumber: 17,
                                columnNumber: 315
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/EventDetailScreen.jsx",
                        lineNumber: 17,
                        columnNumber: 188
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/EventDetailScreen.jsx",
                lineNumber: 17,
                columnNumber: 121
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "event-detail-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "event-detail-main",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-kicker",
                                children: "ABOUT THIS EVENT"
                            }, void 0, false, {
                                fileName: "[project]/components/EventDetailScreen.jsx",
                                lineNumber: 17,
                                columnNumber: 423
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "event-date",
                                children: dateLabel(`${event.date}T${event.time || '00:00'}`)
                            }, void 0, false, {
                                fileName: "[project]/components/EventDetailScreen.jsx",
                                lineNumber: 17,
                                columnNumber: 479
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "event-location",
                                children: [
                                    "⌖ ",
                                    event.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EventDetailScreen.jsx",
                                lineNumber: 17,
                                columnNumber: 562
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "event-description",
                                children: event.description || 'Join the community for an evening of meaningful conversations and familiar faces.'
                            }, void 0, false, {
                                fileName: "[project]/components/EventDetailScreen.jsx",
                                lineNumber: 17,
                                columnNumber: 614
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "event-facts",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: event.is_free ? 'Free entry' : `₹${event.price}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/EventDetailScreen.jsx",
                                        lineNumber: 17,
                                        columnNumber: 786
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: event.event_type || 'Offline'
                                    }, void 0, false, {
                                        fileName: "[project]/components/EventDetailScreen.jsx",
                                        lineNumber: 17,
                                        columnNumber: 849
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: event.waitlist_enabled ? 'Waitlist enabled' : 'RSVP required'
                                    }, void 0, false, {
                                        fileName: "[project]/components/EventDetailScreen.jsx",
                                        lineNumber: 17,
                                        columnNumber: 893
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EventDetailScreen.jsx",
                                lineNumber: 17,
                                columnNumber: 757
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: registered || event.is_registered ? 'primary-button detail-rsvp registered' : 'primary-button detail-rsvp',
                                onClick: register,
                                disabled: busy || registered || event.is_registered,
                                children: [
                                    registered || event.is_registered ? '✓ You are going' : busy ? 'Joining...' : 'RSVP for this event',
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "↗"
                                    }, void 0, false, {
                                        fileName: "[project]/components/EventDetailScreen.jsx",
                                        lineNumber: 17,
                                        columnNumber: 1276
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EventDetailScreen.jsx",
                                lineNumber: 17,
                                columnNumber: 975
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/EventDetailScreen.jsx",
                        lineNumber: 17,
                        columnNumber: 384
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "participant-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "participant-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "section-kicker",
                                                children: "THE ROOM"
                                            }, void 0, false, {
                                                fileName: "[project]/components/EventDetailScreen.jsx",
                                                lineNumber: 17,
                                                columnNumber: 1388
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Participants"
                                            }, void 0, false, {
                                                fileName: "[project]/components/EventDetailScreen.jsx",
                                                lineNumber: 17,
                                                columnNumber: 1436
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/EventDetailScreen.jsx",
                                        lineNumber: 17,
                                        columnNumber: 1383
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            event.attendees_count || event.participant_count || event.participants?.length || 0,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: [
                                                    " / ",
                                                    event.capacity || 100
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/EventDetailScreen.jsx",
                                                lineNumber: 17,
                                                columnNumber: 1556
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/EventDetailScreen.jsx",
                                        lineNumber: 17,
                                        columnNumber: 1463
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EventDetailScreen.jsx",
                                lineNumber: 17,
                                columnNumber: 1346
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "capacity-note",
                                children: [
                                    event.remaining_capacity ?? Math.max(0, (event.capacity || 100) - (event.participants?.length || 0)),
                                    " spots remaining"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EventDetailScreen.jsx",
                                lineNumber: 17,
                                columnNumber: 1612
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "participant-list",
                                children: [
                                    event.participants?.map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "participant",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "avatar avatar-small",
                                                    children: initials(person.name)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EventDetailScreen.jsx",
                                                    lineNumber: 17,
                                                    columnNumber: 1879
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: person.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EventDetailScreen.jsx",
                                                            lineNumber: 17,
                                                            columnNumber: 1953
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: person.status === 'attended' ? 'Attended' : 'Going'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EventDetailScreen.jsx",
                                                            lineNumber: 17,
                                                            columnNumber: 1983
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EventDetailScreen.jsx",
                                                    lineNumber: 17,
                                                    columnNumber: 1947
                                                }, this)
                                            ]
                                        }, person.id, true, {
                                            fileName: "[project]/components/EventDetailScreen.jsx",
                                            lineNumber: 17,
                                            columnNumber: 1834
                                        }, this)),
                                    !event.participants?.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "empty-participants",
                                        children: "Be the first to RSVP."
                                    }, void 0, false, {
                                        fileName: "[project]/components/EventDetailScreen.jsx",
                                        lineNumber: 17,
                                        columnNumber: 2098
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EventDetailScreen.jsx",
                                lineNumber: 17,
                                columnNumber: 1763
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/EventDetailScreen.jsx",
                        lineNumber: 17,
                        columnNumber: 1309
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/EventDetailScreen.jsx",
                lineNumber: 17,
                columnNumber: 349
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/EventDetailScreen.jsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_s(EventDetailScreen, "1xb9mZubXs1SxY/cOnjkSF8CKNw=");
_c = EventDetailScreen;
var _c;
__turbopack_context__.k.register(_c, "EventDetailScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/EventsScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EventCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EventCard.jsx [app-client] (ecmascript)");
;
;
function EventsScreen({ events, registered, onRsvp, onDelete, onOpen, admin }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "screen-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-kicker",
                                children: "MARK YOUR CALENDAR"
                            }, void 0, false, {
                                fileName: "[project]/components/EventsScreen.jsx",
                                lineNumber: 4,
                                columnNumber: 49
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Community events"
                            }, void 0, false, {
                                fileName: "[project]/components/EventsScreen.jsx",
                                lineNumber: 4,
                                columnNumber: 107
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Join reunions, conversations, and gatherings hosted by your community."
                            }, void 0, false, {
                                fileName: "[project]/components/EventsScreen.jsx",
                                lineNumber: 4,
                                columnNumber: 132
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/EventsScreen.jsx",
                        lineNumber: 4,
                        columnNumber: 44
                    }, this),
                    admin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "admin-badge",
                        children: "ADMIN MODE"
                    }, void 0, false, {
                        fileName: "[project]/components/EventsScreen.jsx",
                        lineNumber: 4,
                        columnNumber: 225
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/EventsScreen.jsx",
                lineNumber: 4,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "events-grid events-list",
                children: events.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EventCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        event: event,
                        registered: registered.includes(event.id),
                        onRsvp: onRsvp,
                        onDelete: onDelete,
                        onOpen: onOpen,
                        admin: admin
                    }, event.id, false, {
                        fileName: "[project]/components/EventsScreen.jsx",
                        lineNumber: 4,
                        columnNumber: 343
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/EventsScreen.jsx",
                lineNumber: 4,
                columnNumber: 279
            }, this),
            !events.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "empty-state",
                children: "No events have been published yet."
            }, void 0, false, {
                fileName: "[project]/components/EventsScreen.jsx",
                lineNumber: 4,
                columnNumber: 521
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/EventsScreen.jsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
_c = EventsScreen;
var _c;
__turbopack_context__.k.register(_c, "EventsScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Overview.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Overview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EventCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EventCard.jsx [app-client] (ecmascript)");
;
;
function Overview({ events, people, registered, onRsvp, onOpen, setActive }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcome-band",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "welcome-label",
                                children: "THE HALLWAY"
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 47
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Stay close to",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/Overview.jsx",
                                        lineNumber: 4,
                                        columnNumber: 114
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "where you began."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Overview.jsx",
                                        lineNumber: 4,
                                        columnNumber: 120
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 97
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Reconnect with the people and moments that made your school years special."
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 150
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "primary-button",
                                onClick: ()=>setActive('Alumni directory'),
                                children: [
                                    "Explore the community ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "↗"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Overview.jsx",
                                        lineNumber: 4,
                                        columnNumber: 334
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 231
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Overview.jsx",
                        lineNumber: 4,
                        columnNumber: 42
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sun-art",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "✦"
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 388
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sun"
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 402
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "arch arch-one"
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 425
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "arch arch-two"
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 458
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Overview.jsx",
                        lineNumber: 4,
                        columnNumber: 363
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Overview.jsx",
                lineNumber: 4,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stats",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "stat-label",
                                children: "COMMUNITY MEMBERS"
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 531
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: people.length
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 584
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "positive",
                                children: "Live directory"
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 616
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Overview.jsx",
                        lineNumber: 4,
                        columnNumber: 526
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "stat-label",
                                children: "UPCOMING EVENTS"
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 677
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: events.length.toString().padStart(2, '0')
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 728
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "From MongoDB"
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 788
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Overview.jsx",
                        lineNumber: 4,
                        columnNumber: 672
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "stat-label",
                                children: "YOUR RSVPS"
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 826
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: registered.length
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 872
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "positive",
                                children: "Persistent"
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 908
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Overview.jsx",
                        lineNumber: 4,
                        columnNumber: 821
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Overview.jsx",
                lineNumber: 4,
                columnNumber: 503
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-kicker",
                                children: "MARK YOUR CALENDAR"
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 1004
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Upcoming events"
                            }, void 0, false, {
                                fileName: "[project]/components/Overview.jsx",
                                lineNumber: 4,
                                columnNumber: 1062
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Overview.jsx",
                        lineNumber: 4,
                        columnNumber: 999
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-button",
                        onClick: ()=>setActive('Events'),
                        children: "View all events ↗"
                    }, void 0, false, {
                        fileName: "[project]/components/Overview.jsx",
                        lineNumber: 4,
                        columnNumber: 1092
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Overview.jsx",
                lineNumber: 4,
                columnNumber: 966
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "events-grid",
                children: events.slice(0, 3).map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EventCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        event: event,
                        registered: registered.includes(event.id),
                        onRsvp: onRsvp,
                        onOpen: onOpen
                    }, event.id, false, {
                        fileName: "[project]/components/Overview.jsx",
                        lineNumber: 4,
                        columnNumber: 1256
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Overview.jsx",
                lineNumber: 4,
                columnNumber: 1192
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Overview.jsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
_c = Overview;
var _c;
__turbopack_context__.k.register(_c, "Overview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProfileScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function initials(name = '') {
    return name.split(' ').map((part)=>part[0]).join('').slice(0, 2).toUpperCase();
}
function ProfileScreen({ user, onSave }) {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: user.name || '',
        batch_year: user.batch_year || '',
        current_company: user.current_company || '',
        job_title: user.job_title || '',
        location: user.location || '',
        bio: user.bio || ''
    });
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function submit(event) {
        event.preventDefault();
        await onSave({
            ...form,
            batch_year: form.batch_year ? Number(form.batch_year) : undefined
        });
        setSaved(true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "profile-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "screen-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-kicker",
                                children: "YOUR STORY"
                            }, void 0, false, {
                                fileName: "[project]/components/ProfileScreen.jsx",
                                lineNumber: 9,
                                columnNumber: 79
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "My profile"
                            }, void 0, false, {
                                fileName: "[project]/components/ProfileScreen.jsx",
                                lineNumber: 9,
                                columnNumber: 129
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Keep your details current so classmates can find you."
                            }, void 0, false, {
                                fileName: "[project]/components/ProfileScreen.jsx",
                                lineNumber: 9,
                                columnNumber: 148
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProfileScreen.jsx",
                        lineNumber: 9,
                        columnNumber: 74
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "avatar avatar-profile",
                        children: initials(form.name)
                    }, void 0, false, {
                        fileName: "[project]/components/ProfileScreen.jsx",
                        lineNumber: 9,
                        columnNumber: 214
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProfileScreen.jsx",
                lineNumber: 9,
                columnNumber: 42
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "profile-form",
                onSubmit: submit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Full name",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.name,
                                onChange: (event)=>setForm({
                                        ...form,
                                        name: event.target.value
                                    }),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/components/ProfileScreen.jsx",
                                lineNumber: 9,
                                columnNumber: 351
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProfileScreen.jsx",
                        lineNumber: 9,
                        columnNumber: 335
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Batch year",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: form.batch_year,
                                onChange: (event)=>setForm({
                                        ...form,
                                        batch_year: event.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/ProfileScreen.jsx",
                                lineNumber: 9,
                                columnNumber: 481
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProfileScreen.jsx",
                        lineNumber: 9,
                        columnNumber: 464
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Current company",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.current_company,
                                onChange: (event)=>setForm({
                                        ...form,
                                        current_company: event.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/ProfileScreen.jsx",
                                lineNumber: 9,
                                columnNumber: 633
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProfileScreen.jsx",
                        lineNumber: 9,
                        columnNumber: 611
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Job title",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.job_title,
                                onChange: (event)=>setForm({
                                        ...form,
                                        job_title: event.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/ProfileScreen.jsx",
                                lineNumber: 9,
                                columnNumber: 775
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProfileScreen.jsx",
                        lineNumber: 9,
                        columnNumber: 759
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Location",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.location,
                                onChange: (event)=>setForm({
                                        ...form,
                                        location: event.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/ProfileScreen.jsx",
                                lineNumber: 9,
                                columnNumber: 904
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProfileScreen.jsx",
                        lineNumber: 9,
                        columnNumber: 889
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "wide-field",
                        children: [
                            "Bio",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: form.bio,
                                onChange: (event)=>setForm({
                                        ...form,
                                        bio: event.target.value
                                    }),
                                rows: "4"
                            }, void 0, false, {
                                fileName: "[project]/components/ProfileScreen.jsx",
                                lineNumber: 9,
                                columnNumber: 1049
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProfileScreen.jsx",
                        lineNumber: 9,
                        columnNumber: 1016
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "primary-button",
                                children: "Save profile"
                            }, void 0, false, {
                                fileName: "[project]/components/ProfileScreen.jsx",
                                lineNumber: 9,
                                columnNumber: 1192
                            }, this),
                            saved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "saved-note",
                                children: "Profile updated"
                            }, void 0, false, {
                                fileName: "[project]/components/ProfileScreen.jsx",
                                lineNumber: 9,
                                columnNumber: 1258
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProfileScreen.jsx",
                        lineNumber: 9,
                        columnNumber: 1163
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProfileScreen.jsx",
                lineNumber: 9,
                columnNumber: 286
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProfileScreen.jsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_s(ProfileScreen, "Pnsqzdlmmi1V3wz11bCoa8xpwKw=");
_c = ProfileScreen;
var _c;
__turbopack_context__.k.register(_c, "ProfileScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Shell.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Shell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function Shell({ children, user, admin, active, setActive, navTabs, onSignOut }) {
    _s();
    const initials = (user.name || '').split(' ').map((part)=>part[0]).join('').slice(0, 2).toUpperCase();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function selectTab(item) {
        setActive(item);
        setMenuOpen(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: menuOpen ? 'sidebar menu-open' : 'sidebar',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-nav-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "brand-mark",
                                        children: "AM"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Shell.jsx",
                                        lineNumber: 7,
                                        columnNumber: 156
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Alumni",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/Shell.jsx",
                                                lineNumber: 7,
                                                columnNumber: 206
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Meet"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Shell.jsx",
                                                lineNumber: 7,
                                                columnNumber: 212
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Shell.jsx",
                                        lineNumber: 7,
                                        columnNumber: 194
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Shell.jsx",
                                lineNumber: 7,
                                columnNumber: 133
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "menu-button",
                                onClick: ()=>setMenuOpen((open)=>!open),
                                "aria-expanded": menuOpen,
                                "aria-label": menuOpen ? 'Close menu' : 'Open menu',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    children: menuOpen ? '×' : '☰'
                                }, void 0, false, {
                                    fileName: "[project]/components/Shell.jsx",
                                    lineNumber: 7,
                                    columnNumber: 413
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Shell.jsx",
                                lineNumber: 7,
                                columnNumber: 246
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Shell.jsx",
                        lineNumber: 7,
                        columnNumber: 98
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "desktop-brand brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-mark",
                                children: "AM"
                            }, void 0, false, {
                                fileName: "[project]/components/Shell.jsx",
                                lineNumber: 7,
                                columnNumber: 519
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Alumni",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/Shell.jsx",
                                        lineNumber: 7,
                                        columnNumber: 569
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Meet"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Shell.jsx",
                                        lineNumber: 7,
                                        columnNumber: 575
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Shell.jsx",
                                lineNumber: 7,
                                columnNumber: 557
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Shell.jsx",
                        lineNumber: 7,
                        columnNumber: 482
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "YOUR COMMUNITY"
                    }, void 0, false, {
                        fileName: "[project]/components/Shell.jsx",
                        lineNumber: 7,
                        columnNumber: 609
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Main navigation",
                        children: navTabs.map(([item, icon])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: active === item ? 'nav-item active' : 'nav-item',
                                onClick: ()=>selectTab(item),
                                "aria-current": active === item ? 'page' : undefined,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "nav-icon",
                                        "aria-hidden": "true",
                                        children: icon
                                    }, void 0, false, {
                                        fileName: "[project]/components/Shell.jsx",
                                        lineNumber: 7,
                                        columnNumber: 893
                                    }, this),
                                    item
                                ]
                            }, item, true, {
                                fileName: "[project]/components/Shell.jsx",
                                lineNumber: 7,
                                columnNumber: 715
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Shell.jsx",
                        lineNumber: 7,
                        columnNumber: 650
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-bottom",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "profile-mini",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "avatar avatar-small",
                                        children: initials
                                    }, void 0, false, {
                                        fileName: "[project]/components/Shell.jsx",
                                        lineNumber: 7,
                                        columnNumber: 1037
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: user.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/Shell.jsx",
                                                lineNumber: 7,
                                                columnNumber: 1098
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: admin ? 'Administrator' : `Class of ${user.batch_year || '—'}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/Shell.jsx",
                                                lineNumber: 7,
                                                columnNumber: 1126
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Shell.jsx",
                                        lineNumber: 7,
                                        columnNumber: 1092
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Shell.jsx",
                                lineNumber: 7,
                                columnNumber: 1007
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "sign-out",
                                onClick: onSignOut,
                                children: "↪ Sign out"
                            }, void 0, false, {
                                fileName: "[project]/components/Shell.jsx",
                                lineNumber: 7,
                                columnNumber: 1218
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Shell.jsx",
                        lineNumber: 7,
                        columnNumber: 975
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Shell.jsx",
                lineNumber: 7,
                columnNumber: 36
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/Shell.jsx",
        lineNumber: 7,
        columnNumber: 12
    }, this);
}
_s(Shell, "K77eQVFAaxZgbvGoNWFAiCE7OTY=");
_c = Shell;
var _c;
__turbopack_context__.k.register(_c, "Shell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "getEvent",
    ()=>getEvent,
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
    "updateEvent",
    ()=>updateEvent,
    "updateProfile",
    ()=>updateProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
async function apiRequest(path, options = {}) {
    const method = (options.method || 'GET').toUpperCase();
    let csrfToken = typeof document !== 'undefined' ? document.cookie.split('; ').find((item)=>item.startsWith('csrftoken='))?.split('=')[1] : null;
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && method !== 'GET' && !csrfToken) {
        const csrfResponse = await fetch(`${API_URL}/auth/csrf/`, {
            credentials: 'include'
        });
        const csrfData = await csrfResponse.json();
        csrfToken = csrfData.csrfToken;
    }
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
const getEvent = (eventId)=>apiRequest(`/events/${eventId}/`);
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
const updateEvent = (eventId, event)=>apiRequest(`/admin/events/${eventId}/`, {
        method: 'PUT',
        body: JSON.stringify(event)
    });
const deleteEvent = (eventId)=>apiRequest(`/admin/events/${eventId}/`, {
        method: 'DELETE'
    });
const deletePerson = (personId)=>apiRequest(`/admin/people/${personId}/`, {
        method: 'DELETE'
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_02snj9y._.js.map