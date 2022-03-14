"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(request, response) {
        var _a, _b;
        const data = {
            name: (_a = request === null || request === void 0 ? void 0 : request.body) === null || _a === void 0 ? void 0 : _a.name,
            email: (_b = request === null || request === void 0 ? void 0 : request.body) === null || _b === void 0 ? void 0 : _b.email
        };
        try {
            const result = await this.createUserUseCase.execute(data);
            if (result !== 'User already exists') {
                return response.status(200).json({ msg: "Create user succeeded" });
            }
            else {
                return response.status(400).json({ msg: "User already exists" });
            }
        }
        catch (err) {
            return response.status(500).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=CreateUserController.js.map