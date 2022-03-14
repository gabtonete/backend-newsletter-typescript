"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
exports.app = app;
const options = {
    origin: ["*"],
    methods: "*"
};
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.router);
app.listen(process.env.PORT || 80, () => {
    console.log(`Server is running on 3001`);
});
//# sourceMappingURL=app.js.map