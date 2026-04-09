"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimauxController = void 0;
const common_1 = require("@nestjs/common");
const animaux_service_1 = require("./animaux.service");
const create_animaux_dto_1 = require("./dto/create-animaux.dto");
const update_animaux_dto_1 = require("./dto/update-animaux.dto");
let AnimauxController = class AnimauxController {
    animauxService;
    constructor(animauxService) {
        this.animauxService = animauxService;
    }
    create(createAnimauxDto) {
        return this.animauxService.create(createAnimauxDto);
    }
    findAll() {
        return this.animauxService.findAll();
    }
    findOne(id) {
        return this.animauxService.findOne(+id);
    }
    update(id, updateAnimauxDto) {
        return this.animauxService.update(+id, updateAnimauxDto);
    }
    remove(id) {
        return this.animauxService.remove(+id);
    }
};
exports.AnimauxController = AnimauxController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_animaux_dto_1.CreateAnimauxDto]),
    __metadata("design:returntype", void 0)
], AnimauxController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnimauxController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnimauxController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_animaux_dto_1.UpdateAnimauxDto]),
    __metadata("design:returntype", void 0)
], AnimauxController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnimauxController.prototype, "remove", null);
exports.AnimauxController = AnimauxController = __decorate([
    (0, common_1.Controller)('animaux'),
    __metadata("design:paramtypes", [animaux_service_1.AnimauxService])
], AnimauxController);
//# sourceMappingURL=animaux.controller.js.map