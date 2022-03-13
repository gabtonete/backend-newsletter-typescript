"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const index_1 = require("../useCases/CreateUser/index");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/api/users', (request, response) => {
    return index_1.createUserController.handle(request, response);
});
//# sourceMappingURL=routes.js.map