export default {
  server: {
    host: 'localhost',
    port: 3000,
    useHTTPS: false,
  },
  services: {
    // active: ['twitter', 'instagram', 'facebook'],
    lazyLoad: false,
    // callbacksUseHTTPS: false,
    // callbackHost: 'localhost',
    // callbackPort: 4000
  },
  store: {
    kind: "memory",
    params: {}
  },
  logger: {
    default: "normal"
  },
  streamHandler: {
    kind: "memory",
    params: {}
  },
  middleware: {
    plugins: [
      // 'sentiment',
    ]
  }
};
