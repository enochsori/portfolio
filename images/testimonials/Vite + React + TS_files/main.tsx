import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=876f76b0"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=1f87c260"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=cbcbe230"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import App from "/src/App.tsx";
import { RouterProvider, createBrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=6951d259";
import Notfound from "/src/pages/Notfound.tsx";
import Videos from "/src/pages/Videos.tsx";
import VideoDetail from "/src/pages/VideoDetail.tsx";
import "/src/index.css";
const router = createBrowserRouter([
    {
        path: '/',
        element: /*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
            fileName: "C:/Users/Enoch/projects/dreamCoding/youtube-clone/src/main.tsx",
            lineNumber: 13,
            columnNumber: 14
        }, this),
        errorElement: /*#__PURE__*/ _jsxDEV(Notfound, {}, void 0, false, {
            fileName: "C:/Users/Enoch/projects/dreamCoding/youtube-clone/src/main.tsx",
            lineNumber: 14,
            columnNumber: 19
        }, this),
        children: [
            {
                // with hot videos
                index: true,
                element: /*#__PURE__*/ _jsxDEV(Videos, {}, void 0, false, {
                    fileName: "C:/Users/Enoch/projects/dreamCoding/youtube-clone/src/main.tsx",
                    lineNumber: 19,
                    columnNumber: 18
                }, this)
            },
            {
                // with hot videos
                path: 'videos',
                element: /*#__PURE__*/ _jsxDEV(Videos, {}, void 0, false, {
                    fileName: "C:/Users/Enoch/projects/dreamCoding/youtube-clone/src/main.tsx",
                    lineNumber: 24,
                    columnNumber: 18
                }, this)
            },
            {
                // with keyword option
                path: 'videos/:keyword',
                element: /*#__PURE__*/ _jsxDEV(Videos, {}, void 0, false, {
                    fileName: "C:/Users/Enoch/projects/dreamCoding/youtube-clone/src/main.tsx",
                    lineNumber: 29,
                    columnNumber: 18
                }, this)
            },
            {
                // with keyword option
                path: 'videos/watch/:videoId',
                element: /*#__PURE__*/ _jsxDEV(VideoDetail, {}, void 0, false, {
                    fileName: "C:/Users/Enoch/projects/dreamCoding/youtube-clone/src/main.tsx",
                    lineNumber: 34,
                    columnNumber: 18
                }, this)
            }
        ]
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/ _jsxDEV(React.StrictMode, {
    children: /*#__PURE__*/ _jsxDEV(RouterProvider, {
        router: router
    }, void 0, false, {
        fileName: "C:/Users/Enoch/projects/dreamCoding/youtube-clone/src/main.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this)
}, void 0, false, {
    fileName: "C:/Users/Enoch/projects/dreamCoding/youtube-clone/src/main.tsx",
    lineNumber: 41,
    columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnRzeCc7XG5pbXBvcnQgeyBSb3V0ZXJQcm92aWRlciwgY3JlYXRlQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IE5vdGZvdW5kIGZyb20gJy4vcGFnZXMvTm90Zm91bmQudHN4JztcbmltcG9ydCBWaWRlb3MgZnJvbSAnLi9wYWdlcy9WaWRlb3MudHN4JztcbmltcG9ydCBWaWRlb0RldGFpbCBmcm9tICcuL3BhZ2VzL1ZpZGVvRGV0YWlsLnRzeCc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgZWxlbWVudDogPEFwcCAvPixcbiAgICBlcnJvckVsZW1lbnQ6IDxOb3Rmb3VuZCAvPixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICAvLyB3aXRoIGhvdCB2aWRlb3NcbiAgICAgICAgaW5kZXg6IHRydWUsXG4gICAgICAgIGVsZW1lbnQ6IDxWaWRlb3MgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyB3aXRoIGhvdCB2aWRlb3NcbiAgICAgICAgcGF0aDogJ3ZpZGVvcycsXG4gICAgICAgIGVsZW1lbnQ6IDxWaWRlb3MgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyB3aXRoIGtleXdvcmQgb3B0aW9uXG4gICAgICAgIHBhdGg6ICd2aWRlb3MvOmtleXdvcmQnLFxuICAgICAgICBlbGVtZW50OiA8VmlkZW9zIC8+LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gd2l0aCBrZXl3b3JkIG9wdGlvblxuICAgICAgICBwYXRoOiAndmlkZW9zL3dhdGNoLzp2aWRlb0lkJyxcbiAgICAgICAgZWxlbWVudDogPFZpZGVvRGV0YWlsIC8+LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXSk7XG5cblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSEpLnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+XG4pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJBcHAiLCJSb3V0ZXJQcm92aWRlciIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJOb3Rmb3VuZCIsIlZpZGVvcyIsIlZpZGVvRGV0YWlsIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJlcnJvckVsZW1lbnQiLCJjaGlsZHJlbiIsImluZGV4IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJTdHJpY3RNb2RlIl0sIm1hcHBpbmdzIjoiO0FBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLE9BQU9DLGNBQWMsbUJBQW1CO0FBQ3hDLE9BQU9DLFNBQVMsWUFBWTtBQUM1QixTQUFTQyxjQUFjLEVBQUVDLG1CQUFtQixRQUFRLG1CQUFtQjtBQUN2RSxPQUFPQyxjQUFjLHVCQUF1QjtBQUM1QyxPQUFPQyxZQUFZLHFCQUFxQjtBQUN4QyxPQUFPQyxpQkFBaUIsMEJBQTBCO0FBQ2xELE9BQU8sY0FBYztBQUVyQixNQUFNQyxTQUFTSixvQkFBb0I7SUFDakM7UUFDRUssTUFBTTtRQUNOQyx1QkFBUyxRQUFDUjs7Ozs7UUFDVlMsNEJBQWMsUUFBQ047Ozs7O1FBQ2ZPLFVBQVU7WUFDUjtnQkFDRSxrQkFBa0I7Z0JBQ2xCQyxPQUFPO2dCQUNQSCx1QkFBUyxRQUFDSjs7Ozs7WUFDWjtZQUNBO2dCQUNFLGtCQUFrQjtnQkFDbEJHLE1BQU07Z0JBQ05DLHVCQUFTLFFBQUNKOzs7OztZQUNaO1lBQ0E7Z0JBQ0Usc0JBQXNCO2dCQUN0QkcsTUFBTTtnQkFDTkMsdUJBQVMsUUFBQ0o7Ozs7O1lBQ1o7WUFDQTtnQkFDRSxzQkFBc0I7Z0JBQ3RCRyxNQUFNO2dCQUNOQyx1QkFBUyxRQUFDSDs7Ozs7WUFDWjtTQUNEO0lBQ0g7Q0FDRDtBQUVETixTQUFTYSxVQUFVLENBQUNDLFNBQVNDLGNBQWMsQ0FBQyxTQUFVQyxNQUFNLGVBQzFELFFBQUNqQixNQUFNa0IsVUFBVTtjQUNmLGNBQUEsUUFBQ2Y7UUFBZUssUUFBUUEifQ==