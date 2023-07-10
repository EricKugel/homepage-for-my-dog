"use strict";
exports.id = 298;
exports.ids = [298];
exports.modules = {

/***/ 298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/Banner.tsx


const Banner = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "banner",
                className: "jsx-79968a088c2ac5f7",
                children: "THis is a banner, okay?"
            }),
            jsx_runtime.jsx((style_default()), {
                id: "79968a088c2ac5f7",
                children: "#banner.jsx-79968a088c2ac5f7{background-color:gray}"
            })
        ]
    });
};
/* harmony default export */ const components_Banner = (Banner);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Layout.tsx




const Layout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: "pageWrapper",
        className: "jsx-3ba1952e7d8fea26",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        className: "jsx-3ba1952e7d8fea26",
                        children: "Eric Kugel"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico",
                        className: "jsx-3ba1952e7d8fea26"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_Banner, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "contentPane",
                className: "jsx-3ba1952e7d8fea26",
                children: /*#__PURE__*/ jsx_runtime.jsx("main", {
                    className: "jsx-3ba1952e7d8fea26",
                    children: children
                })
            }),
            jsx_runtime.jsx((style_default()), {
                id: "3ba1952e7d8fea26",
                children: "body{margin:0}"
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.tsx


const MyApp = ({ Component, pageProps })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(components_Layout, {
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ })

};
;